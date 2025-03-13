import { AnimatedSection } from "../shared/animated-section";
import { motion } from "framer-motion";

function Display() {
  return (
    <div id="display">
      <AnimatedSection className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Conteúdo de Texto */}
            <div className="flex-1 space-y-6">
              <h2 className="text-5xl font-bold leading-tight">
                A EXPERIÊNCIA DE VISUALIZAÇÃO MAIS IMERSIVA JÁ VISTA EM UM SMARTPHONE.
              </h2>

              <div className="space-y-4">
                <p className="font-bold text-red-600">Bordas laterais de 1mm,</p>
                <p className="text-gray-300">
                  para uma experiência de visualização completa.
                  <br />
                  (Já mencionamos que é completa?)
                </p>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Uma proporção de tela para corpo de 93,76%¹ permite que você experimente seu telefone de uma maneira totalmente nova, 
                  com bordas ultrafinas de 1mm² garantindo que sua experiência de visualização permaneça impecável e sem distrações.
                </p>
              </div>
            </div>

            {/* Conteúdo de Imagem */}
            <div className="flex-1 relative">
              <div className="relative">
                <motion.div
                  className="absolute top-0 right-0 w-40 h-40 bg-red-600 rounded-full -mr-10 -mt-10 blur-xl opacity-30"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ duration: 1 }}
                />
                <motion.img
                  src="https://i.ibb.co/PZrT0n7F/120hz.jpg"
                  alt="Tela de 120Hz"
                  loading="lazy"
                  className="w-full h-auto object-contain rounded-lg border-2 border-red-800/20"
                  initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
                  whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                  transition={{ duration: 0.8 }}
                />
                <motion.div 
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-9xl font-bold text-white/10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                />
              </div>
              <motion.div
                className="bg-gradient-to-r from-red-600 to-red-800 text-white text-center p-3 rounded-lg mt-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
              >
                <span className="font-bold">SUPER AMOLED</span> • <span className="font-light">FHD+</span> • <span className="font-bold">120Hz</span>
              </motion.div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default Display;