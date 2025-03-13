import { useEffect } from 'react';
import { LoadingOverlay } from "@/components/shared/loading-overlay";

export default function Checkout() {
  return (
    <div className="w-full h-screen">
      <iframe 
        src="https://pay.realmeoferta.com/P5LNZ8J4E04gaRy"
        className="w-full h-full border-0"
        title="Checkout"
      />
    </div>
  );
}
