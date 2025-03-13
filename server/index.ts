import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";
import compression from "compression";
import helmet from "helmet";
import path from "path";

const app = express();

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