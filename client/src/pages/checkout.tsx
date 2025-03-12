import { useEffect } from 'react';
import { LoadingOverlay } from "@/components/shared/loading-overlay";

export default function Checkout() {
  return (
    <div className="w-full h-screen">
      <iframe 
        src="https://pay.lojasrossi.com/6YQPgjJP1EAgpxz"
        className="w-full h-full border-0"
        title="Checkout"
      />
    </div>
  );
}
