import { AnimatedSection } from "../shared/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function Pricing() {
  return (
    <div id="pricing">
      <AnimatedSection className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Garanta o Seu Hoje
            </h2>
            <p className="text-xl text-gray-600">
              Quantidades limitadas disponíveis
            </p>
          </div>

          <div className="max-w-md mx-auto">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-primary text-white px-4 py-1 rounded-bl-lg">
                Edição Limitada
              </div>

              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center">
                  realme 10 Pro
                  <span className="block text-xl mt-1">Edição Coca-Cola</span>
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <div className="text-center">
                  <span className="text-4xl font-bold">R$ 189,90</span>
                </div>

                <ul className="space-y-3 text-gray-600">
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    8GB RAM + 512GB Armazenamento
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Câmera Principal 108MP
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Tela 6.72" 120Hz
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Bateria 5000mAh
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary">✓</span>
                    Pacote Edição Colecionador
                  </li>
                </ul>
              </CardContent>

              <CardFooter>
                <Button className="w-full" size="lg">
                  Comprar Agora
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}