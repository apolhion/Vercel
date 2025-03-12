import { useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import { ShoppingCart } from "lucide-react";
import { useCountdown } from '@/contexts/CountdownContext';

const names = [
  "Beatriz Almeida",
  "Rafael Carvalho",
  "Gabriel Ferreira",
  "Maria Santos",
  "Ana Costa",
  "Julia Rodrigues",
  "João Silva",
  "Isabella Souza",
  "Lucas Pereira",
  "Pedro Oliveira",
  "Carla Martins",
  "Felipe Almeida",
  "Luana Mendes",
  "Thiago Lima",
  "Camila Pereira",
  "Mateus Rocha",
  "Juliana Silva",
  "Renan Santos",
  "Fernanda Costa",
  "Paulo Henrique",
  "Mariana Alves",
  "Vitor Souza",
  "Lúcia Rodrigues",
  "Carlos Mendes",
  "Raquel Lima",
  "André Silva",
  "Cláudia Oliveira",
  "Fernando Martins",
  "Tatiane Costa",
  "Eduardo Pereira",
  "Larissa Almeida",
  "Vinícius Rocha"
];

export function PurchaseNotification() {
  const { toast } = useToast();
  const { unitsLeft } = useCountdown();

  useEffect(() => {
    // Só continua se ainda tiver mais de 9 unidades
    if (unitsLeft <= 9) return;

    const showRandomPurchase = () => {
      const randomName = names[Math.floor(Math.random() * names.length)];
      const now = new Date();
      const timeStr = now.toLocaleTimeString('pt-BR', { 
        hour: '2-digit', 
        minute: '2-digit' 
      });

      toast({
        title: (
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-4 w-4 text-red-600" />
            <span className="text-sm font-medium">{randomName}</span>
          </div>
        ),
        description: (
          <p className="text-xs text-gray-500">
            Acabou de comprar um Realme 10 Pro Coca-Cola Edition • {timeStr}
          </p>
        ),
        className: "bg-white/95 dark:bg-zinc-950/95 border border-red-100 dark:border-red-900/20 backdrop-blur-sm",
        duration: 4000,
      });
    };

    // Mostrar primeira notificação após 5 segundos
    const initialTimeout = setTimeout(showRandomPurchase, 5000);

    // Mostrar novas notificações periodicamente (a cada 30 segundos)
    const interval = setInterval(showRandomPurchase, 30000);

    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [toast, unitsLeft]); // Adicionado unitsLeft como dependência

  return null;
}