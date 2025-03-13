import { Camera as CameraIcon, Image, Aperture } from "lucide-react";
import { AnimatedSection } from "../shared/animated-section";

function CameraSection() {
  return (
    <div id="camera">
      <AnimatedSection className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Capture Cada Momento em Detalhes
            </h2>
            <p className="text-xl text-gray-600">
              Câmera principal de 108MP para fotos impressionantes em qualquer condição
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-8 order-2 md:order-1">
              <div className="flex items-start gap-4 bg-white p-5 rounded-lg shadow-lg transform hover:-translate-y-1 transition-all duration-300">
                <div className="p-4 bg-gradient-to-br from-red-500 to-red-700 rounded-full text-white">
                  <CameraIcon className="h-7 w-7" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Câmera Principal 108MP</h3>
                  <p className="text-gray-600">
                    Capture fotos incrivelmente detalhadas com nosso sensor de alta resolução
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Image className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Modo Noturno 2.0</h3>
                  <p className="text-gray-600">
                    Tire fotos impressionantes mesmo em condições de pouca luz
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 bg-red-100 rounded-lg">
                  <Aperture className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">Fotografia de Rua</h3>
                  <p className="text-gray-600">
                    Modos especiais otimizados para capturar momentos urbanos
                  </p>
                </div>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="absolute -inset-4 bg-gradient-to-r from-red-500/20 to-red-700/20 rounded-full blur-xl"></div>
              <img 
                src="https://i.ibb.co/nsQjMKP7/foto108.jpg" 
                alt="Amostra de foto da câmera de 108MP" 
                loading="lazy"
                className="rounded-lg shadow-2xl border-4 border-white transform rotate-3"
              />
              <div className="absolute -bottom-4 -right-4 bg-white text-red-600 p-2 rounded-lg font-bold shadow-lg">
                108MP
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}

export default CameraSection;