import { AnimatedSection } from "../shared/animated-section";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";

export function Limited() {
  return (
    <div id="limited">
      <AnimatedSection className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="secondary" className="mb-4">Edição Limitada</Badge>
            <h2 className="text-4xl font-bold mb-4">
              Pacote Exclusivo para Colecionadores
            </h2>
            <p className="text-xl text-gray-600">
              Seja um dos poucos a possuir este dispositivo em edição especial
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  Caixa Edição Especial
                </h3>
                <p className="text-gray-600">
                  Caixa para colecionador com design único apresentando elementos icônicos de ambas as marcas
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  Acessórios Exclusivos
                </h3>
                <p className="text-gray-600">
                  Capa personalizada, ferramenta de ejeção de SIM e outros itens colecionáveis
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-3">
                  Cartão de Autenticidade
                </h3>
                <p className="text-gray-600">
                  Certificado de autenticidade numerado único para cada unidade
                </p>
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}