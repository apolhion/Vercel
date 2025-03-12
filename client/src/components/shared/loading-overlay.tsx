import { Shield } from "lucide-react";

export function LoadingOverlay() {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-2xl text-center max-w-md w-full mx-4">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Shield className="text-primary h-6 w-6" />
            </div>
          </div>
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2">Carregando Ambiente Seguro</h3>
        <p className="text-gray-600 text-sm mb-4">Preparando um ambiente seguro para sua transação...</p>
        <div className="flex items-center justify-center space-x-3">
          <Shield className="text-green-500 h-4 w-4" />
          <span className="text-sm text-green-600">Conexão SSL Segura</span>
        </div>
      </div>
    </div>
  );
}
