import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import compression from "compression";
import helmet from "helmet";
import path from "path";
import rateLimit from 'express-rate-limit';

const app = express();

// Configurar trust proxy para funcionar com o rate limiting
app.set('trust proxy', 1);

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutos
  max: 100 // limite de 100 requisições por IP
});

// Middleware para detectar e bloquear bots
const botDetectionMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const userAgent = req.headers['user-agent']?.toLowerCase() || '';
  const accept = req.headers['accept'] || '';
  const acceptLanguage = req.headers['accept-language'];

  // Lista de user agents conhecidos de bots
  const botUserAgents = [
    'bot', 'crawler', 'spider', 'selenium', 'puppeteer', 'phantomjs',
    'headless', 'scraper', 'python-requests', 'python-urllib', 'wget',
    'curl', 'apache-httpclient', 'java-http-client'
  ];

  // Verifica user agent suspeito
  if (botUserAgents.some(bot => userAgent.includes(bot))) {
    return res.status(403).json({ error: 'Acesso negado' });
  }

  // Verifica headers típicos de navegadores
  if (!acceptLanguage || !accept.includes('text/html')) {
    return res.status(403).json({ error: 'Acesso negado' });
  }

  // Verifica se é uma requisição automatizada
  if (!req.headers['upgrade-insecure-requests'] && !req.headers['sec-fetch-site']) {
    return res.status(403).json({ error: 'Acesso negado' });
  }

  next();
};

// Aplicar rate limiting e bot detection antes de outros middlewares
app.use(limiter);
app.use(botDetectionMiddleware);

// Segurança e Headers
app.use(helmet({
  contentSecurityPolicy: false, // Desabilitado para desenvolvimento
  crossOriginEmbedderPolicy: false,
}));

// Compressão gzip
app.use(compression());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Cache para arquivos estáticos
const staticOptions = {
  dotfiles: 'ignore',
  etag: true,
  maxAge: '1d',
  lastModified: true,
  setHeaders: (res: Response, path: string) => {
    // Cache mais longo para imagens e assets
    if (path.match(/\.(jpg|jpeg|png|gif|ico|svg|webp)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=31536000'); // 1 ano
    } else if (path.match(/\.(css|js)$/)) {
      res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 dia
    }
  }
};

// Servir arquivos estáticos com cache
app.use('/assets', express.static(path.join(process.cwd(), 'client', 'public', 'assets'), staticOptions));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  if (process.env.NODE_ENV === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  const port = process.env.PORT || 5000;
  server.listen({
    port,
    host: "0.0.0.0",
    reusePort: true,
  }, () => {
    log(`serving on port ${port}`);
  });
})();