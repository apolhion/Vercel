
import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"
import { useEffect, useRef } from "react"

export const VideoReview = () => {
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Carrega o script do player de vídeo de forma segura
    if (videoContainerRef.current) {
      const script = document.createElement("script");
      script.src = "https://scripts.converteai.net/82ea698c-ca97-47d4-b22b-bb660d4b70b5/players/67d21d8a32378af32d35bb09/player.js";
      script.async = true;
      script.id = "scr_67d21d8a32378af32d35bb09";
      document.head.appendChild(script);

      return () => {
        // Limpeza ao desmontar o componente
        if (document.head.contains(script)) {
          document.head.removeChild(script);
        }
      };
    }
  }, []);

  return (
    <div className="container mx-auto px-4 bg-white">
      <Card className="border border-gray-100 hover:shadow-lg transition-shadow duration-300">
        <div className="p-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 flex items-center justify-center rounded-full">
              <Play className="text-red-500" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 ml-3">Review em Vídeo</h3>
          </div>
          
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <div 
              ref={videoContainerRef}
              id="vid_67d21d8a32378af32d35bb09" 
              style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}
            >
              <img 
                id="thumb_67d21d8a32378af32d35bb09" 
                src="https://images.converteai.net/82ea698c-ca97-47d4-b22b-bb660d4b70b5/players/67d21d8a32378af32d35bb09/thumbnail.jpg" 
                style={{ 
                  position: "absolute", 
                  top: 0, 
                  left: 0, 
                  width: "100%", 
                  height: "100%", 
                  objectFit: "cover" 
                }} 
                alt="thumbnail" 
              />
              <div 
                id="backdrop_67d21d8a32378af32d35bb09" 
                style={{ 
                  backdropFilter: "blur(5px)", 
                  WebkitBackdropFilter: "blur(5px)", 
                  position: "absolute", 
                  top: 0, 
                  height: "100%", 
                  width: "100%" 
                }}
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}
