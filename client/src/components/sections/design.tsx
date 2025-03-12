import { AnimatedSection } from "../shared/animated-section";

export function Design() {
  return (
    <div id="design">
      <AnimatedSection className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">
            Design Icônico Encontra Inovação
          </h2>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-red-700/20 rounded-xl blur-xl transform group-hover:scale-105 transition-all duration-700"></div>
              <img
                src="https://i.ibb.co/m5ftCXwv/png.jpg"
                alt="Detalhes do Design do realme 10 Pro"
                className="w-full rounded-xl shadow-2xl relative z-10 transform group-hover:scale-105 transition-all duration-500"
              />
              <div className="absolute -bottom-4 -right-4 bg-red-600 text-white p-3 rounded-lg font-bold shadow-lg z-20 transform group-hover:scale-110 transition-all duration-500">
                EDIÇÃO LIMITADA
              </div>
            </div>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg shadow-md border-l-4 border-red-600 transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-3 flex items-center">
                  <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white mr-3">1</span>
                  Vermelho Coca-Cola Exclusivo
                </h3>
                <p className="text-gray-600 ml-11">
                  Apresentando o icônico vermelho Coca-Cola com um acabamento premium fosco que chama a atenção e se destaca da multidão.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg shadow-md border-l-4 border-red-600 transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-3 flex items-center">
                  <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white mr-3">2</span>
                  Design de Logo Clássico
                </h3>
                <p className="text-gray-600 ml-11">
                  O lendário logotipo da Coca-Cola está perfeitamente integrado ao corpo elegante, criando uma harmonia perfeita entre design clássico e contemporâneo.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-50 to-white p-6 rounded-lg shadow-md border-l-4 border-red-600 transform hover:-translate-y-1 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-3 flex items-center">
                  <span className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center text-white mr-3">3</span>
                  Qualidade Premium
                </h3>
                <p className="text-gray-600 ml-11">
                  Construído com precisão usando materiais de alta qualidade para um dispositivo que se sente tão premium quanto parece.
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}