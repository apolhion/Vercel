import { useState } from "react";
import { useLocation } from "wouter";
import { AnimatedSection } from "../shared/animated-section";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { LoadingOverlay } from "../shared/loading-overlay";
import { useCountdown } from "@/contexts/CountdownContext";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export function Pricing() {
  const [isLoading, setIsLoading] = useState(false);
  const [, setLocation] = useLocation();
  const { unitsLeft } = useCountdown();

  const handlePurchase = () => {
    setIsLoading(true);
    // Simulate a small delay before redirecting
    setTimeout(() => {
      setLocation("/checkout");
    }, 2000);
  };

  return (
    <div id="pricing">
      {isLoading && <LoadingOverlay />}
      <AnimatedSection className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <Carousel className="w-full max-w-3xl mx-auto relative">
              <CarouselContent>
                <CarouselItem>
                  <img
                    src="https://i.ibb.co/bt5JD1f/produto1.jpg"
                    alt="Realme 10 Pro Coca-Cola Edition - Vista 1"
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="https://i.ibb.co/4wwPqMGY/produto2.jpg"
                    alt="Realme 10 Pro Coca-Cola Edition - Vista 2"
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="https://i.ibb.co/S7tKGSG7/produto3.jpg"
                    alt="Realme 10 Pro Coca-Cola Edition - Vista 3"
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </CarouselItem>
                <CarouselItem>
                  <img
                    src="https://i.ibb.co/mVwHhf42/produto4.jpg"
                    alt="Realme 10 Pro Coca-Cola Edition - Vista 4"
                    className="w-full h-[400px] object-cover rounded-lg"
                  />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious className="left-2" />
              <CarouselNext className="right-2" />
            </Carousel>
          </div>

          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">
              Garanta o Seu Hoje
            </h2>
            <p className="text-xl text-gray-600 mb-4">
              Quantidades limitadas disponíveis
            </p>
            <div className="inline-block bg-red-100 text-red-800 px-4 py-2 rounded-full font-semibold text-lg animate-pulse">
              Apenas {unitsLeft} unidades disponíveis!
            </div>
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
                <Button
                  className="w-full"
                  size="lg"
                  onClick={handlePurchase}
                  disabled={isLoading}
                >
                  {isLoading ? "Carregando..." : "Comprar Agora"}
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </AnimatedSection>
    </div>
  );
}