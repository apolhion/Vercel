import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { lazy, Suspense } from "react";

const bubbleImages = [
  "/bolha1.png",
  "/bolha3.png",
  "/bolha4.png",
  "/bolha5.png",
  "/bolha6.png",
  "/bolha7.png",
  "/bolha1-transaparecida.png",
].map((src) => ({
  src,
  loading: "lazy" as const,
}));

const floatAnimation = {
  y: [-10, 10],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "mirror" as const,
    ease: "easeInOut"
  }
};

interface BubbleProps {
  src: string;
  className: string;
  delay?: number;
  loading?: "lazy" | "eager";
}

const Bubble = ({ src, className, delay = 0, loading = "lazy" }: BubbleProps) => (
  <motion.img
    src={src}
    alt="Bubble"
    loading={loading}
    className={`absolute w-16 h-16 object-contain ${className}`}
    initial={{ opacity: 0 }}
    animate={{ 
      opacity: [0.4, 0.8, 0.4],
      y: [-10, 10, -10],
      x: [-5, 5, -5],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export function Hero() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-black">
      <div 
        className="absolute inset-0 opacity-30 mix-blend-overlay bg-cover bg-center"
        style={{
          backgroundImage: `url(/backgroundgeral.jpg)`,
        }}
      />

      {/* Floating Bubbles */}
      <Suspense fallback={null}>
        {bubbleImages.map((img, index) => (
          <Bubble 
            key={img.src}
            src={img.src}
            loading={img.loading}
            className={`top-${20 + index * 20} ${index % 2 === 0 ? 'left' : 'right'}-[${10 + index * 5}%]`}
            delay={index * 0.5}
          />
        ))}
      </Suspense>

      <div className="relative container mx-auto px-4 pt-32 pb-16 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <motion.h1 
              className="text-4xl font-extrabold text-white mb-4 leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              Realme 10 Pro <br /><span className="text-red-500">Coca-Cola</span> Edition
            </motion.h1>
            <motion.p
              className="text-xl text-white/80 mb-8 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
            >
              A edição limitada que une tecnologia inovadora e o design icônico que todo mundo ama.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.7 }}
            >
              <a href="#pricing">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-6 text-lg rounded-md">
                  Comprar Agora
                </Button>
              </a>
            </motion.div>
            <img 
              src="/header-coca.png" 
              alt="realme 10 Pro 5G Coca-Cola Edition"
              loading="lazy"
              className="absolute -bottom-16 -left-20 w-48 opacity-60 rotate-12"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative"
          >
            <motion.img
              src="/imagem-telefone.png"
              alt="realme 10 Pro Edição Coca-Cola"
              loading="eager"
              className="w-full max-w-md mx-auto drop-shadow-2xl"
              animate={floatAnimation}
            />
            <div className="absolute -inset-4 bg-red-500/20 blur-3xl rounded-full -z-10" />
          </motion.div>
        </div>
      </div>
    </div>
  );
}