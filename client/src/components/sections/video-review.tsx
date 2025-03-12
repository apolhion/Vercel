import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"

export const VideoReview = () => {
  return (
    <div className="container mx-auto px-4 py-16 bg-white">
      <div className="rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 mt-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center  rounded-full">
            <Play className="text-red-500" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 ml-3">Review em Vídeo</h3>
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          
           <div id="vid_67d21d8a32378af32d35bb09" style="position: relative; width: 100%; padding: 56.25% 0 0;"> <img id="thumb_67d21d8a32378af32d35bb09" src="https://images.converteai.net/82ea698c-ca97-47d4-b22b-bb660d4b70b5/players/67d21d8a32378af32d35bb09/thumbnail.jpg" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover; display: block;" alt="thumbnail"> <div id="backdrop_67d21d8a32378af32d35bb09" style=" -webkit-backdrop-filter: blur(5px); backdrop-filter: blur(5px); position: absolute; top: 0; height: 100%; width: 100%; "></div> </div> <script type="text/javascript" id="scr_67d21d8a32378af32d35bb09"> var s=document.createElement("script"); s.src="https://scripts.converteai.net/82ea698c-ca97-47d4-b22b-bb660d4b70b5/players/67d21d8a32378af32d35bb09/player.js", s.async=!0,document.head.appendChild(s); </script>
        </div>
      </div>
    </div>
  )
}
