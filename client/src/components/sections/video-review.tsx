import { Card } from "@/components/ui/card"
import { Play } from "lucide-react"

export const VideoReview = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 mt-6">
        <div className="flex items-center mb-4">
          <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-full">
            <Play className="text-red-500" />
          </div>
          <h3 className="text-lg font-medium text-gray-800 ml-3">Review em Vídeo</h3>
        </div>
        <div className="relative rounded-lg overflow-hidden shadow-lg">
          <script src="https://scripts.converteai.net/lib/js/smartplayer/v1/sdk.min.js" data-id="67cb627b072c3fc40e3dfb35"></script>
          <div id="ifr_67cb627b072c3fc40e3dfb35_wrapper" style={{ margin: '0 auto', width: '100%' }}>
            <div style={{ padding: '56.25% 0 0 0', position: 'relative' }} id="ifr_67cb627b072c3fc40e3dfb35_aspect">
              <iframe 
                frameBorder="0" 
                allowFullScreen 
                src="https://scripts.converteai.net/82ea698c-ca97-47d4-b22b-bb660d4b70b5/players/67cb627b072c3fc40e3dfb35/embed.html?utm_source=organic&utm_campaign=&utm_medium=&utm_content=&utm_term=&xcod=jLj67d20dd85e8743a85967ef0dhQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR&sck=jLj67d20dd85e8743a85967ef0dhQwK21wXxRhQwK21wXxRhQwK21wXxRhQwK21wXxR"
                id="ifr_67cb627b072c3fc40e3dfb35"
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                referrerPolicy="origin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
