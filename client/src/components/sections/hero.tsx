import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const bubbleImages = [
  "/bolha1.png",
  "/bolha3.png",
  "/bolha4.png",
  "/bolha5.png",
  "/bolha6.png",
  "/bolha7.png",
  "/bolha1-transaparecida.png",
];

const floatAnimation = {
  y: [-10, 10],
  transition: {
    duration: 2,
    repeat: Infinity,
    repeatType: "mirror",
    ease: "easeInOut"
  }
};

interface BubbleProps {
  src: string;
  className: string;
  delay?: number;
}

const Bubble = ({ src, className, delay = 0 }: BubbleProps) => (
  <motion.img
    src={src}
    alt="Bubble"
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
        className="absolute inset-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: `url(/backgroundgeral.jpg)`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />

      {/* Floating Bubbles */}
      <Bubble src={bubbleImages[0]} className="top-20 left-[10%]" />
      <Bubble src={bubbleImages[1]} className="top-40 right-[15%]" delay={0.5} />
      <Bubble src={bubbleImages[2]} className="bottom-32 left-[20%]" delay={1} />
      <Bubble src={bubbleImages[3]} className="top-60 right-[25%]" delay={1.5} />
      <Bubble src={bubbleImages[4]} className="bottom-40 right-[30%]" delay={2} />
      <Bubble src={bubbleImages[5]} className="top-80 left-[30%]" delay={2.5} />
      <Bubble src={bubbleImages[6]} className="bottom-60 right-[10%]" delay={3} />

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