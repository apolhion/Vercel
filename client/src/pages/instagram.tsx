import { useEffect } from "react";

export default function Instagram() {
  useEffect(() => {
    // Script para carregar o player de vídeo
    const script = document.createElement("script");
    script.src = "https://cdn.tailwindcss.com";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white font-['Roboto']">
      {/* Fixed Header */}
      <div className="fixed top-0 left-0 right-0 bg-black z-[1000] h-10 flex items-center px-2.5">
        <div className="nav-icon">
          <img src="/instagram-small.png" alt="Instagram" className="w-6 h-6 invert" />
        </div>
      </div>

      {/* Content with padding for fixed header */}
      <div className="pt-10">
        {/* Profile Section */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center">
            <div className="profile-image-container">
              <img src="/realme-profile.jpg" alt="realme" className="profile-image" />
            </div>
            <div className="ml-8">
              <div className="flex items-center">
                <span className="font-semibold">realme</span>
                <div className="verified-icon">
                  <img src="/verified.png" alt="Verified" />
                </div>
              </div>
              <p className="text-sm text-gray-400">realme</p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-3 border-y border-gray-800 py-4">
          <div className="text-center">
            <div className="font-bold">1,283</div>
            <div className="text-sm text-gray-400">Posts</div>
          </div>
          <div className="text-center">
            <div className="font-bold">7.2M</div>
            <div className="text-sm text-gray-400">Followers</div>
          </div>
          <div className="text-center">
            <div className="font-bold">180</div>
            <div className="text-sm text-gray-400">Following</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-around p-4">
          <button className="custom-blue flex-1 rounded py-1.5 px-2 mr-2">
            <span className="btn-text">Follow</span>
          </button>
          <button className="bg-gray-800 flex-1 rounded py-1.5 px-2 ml-2">
            <span className="btn-text">Message</span>
          </button>
        </div>

        {/* Video Review Section */}
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100 hover:shadow-lg transition-shadow duration-300 mt-6">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 flex items-center justify-center bg-red-100 rounded-full">
              <i className="fas fa-play-circle text-red-500"></i>
            </div>
            <h3 className="text-lg font-medium text-gray-800 ml-3">Review em Vídeo</h3>
          </div>
          <div className="relative rounded-lg overflow-hidden shadow-lg">
            <div id="vid_67d21d8a32378af32d35bb09" style={{ position: "relative", width: "100%", paddingTop: "56.25%" }}>
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
      </div>
    </div>
  );
}
