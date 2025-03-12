import { AnimatedSection } from "../shared/animated-section";
import { Battery, Cpu, Wifi } from "lucide-react";
import { Progress } from "@/components/ui/progress";

export function Performance() {
  return (
    <div id="performance">
      <AnimatedSection className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Desempenho Poderoso
            </h2>
            <p className="text-xl text-gray-600">
              Equipado com tecnologia avançada para operação perfeita
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Cpu className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Processador Snapdragon</h3>
              <p className="text-gray-600 mb-4">
                Poder de processamento avançado para multitarefas suaves
              </p>
              <Progress value={100} className="h-2" />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Battery className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Bateria 5000mAh</h3>
              <p className="text-gray-600 mb-4">
                Bateria de longa duração para uso durante todo o dia
              </p>
              <Progress value={100} className="h-2" />
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg">
              <Wifi className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-4">Conectividade 5G</h3>
              <p className="text-gray-600 mb-4">
                Velocidades de rede ultra-rápidas para streaming sem interrupções
              </p>
              <Progress value={100} className="h-2" />
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}