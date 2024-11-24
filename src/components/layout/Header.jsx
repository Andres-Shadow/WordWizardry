import React from "react";

const Header = () => {
  return (
    <header className="text-center mb-12">
      <div className="inline-block">
        {/* Contenedor principal con efectos */}
        <div className="relative px-8 py-6">
          {/* Fondo decorativo */}
          <div className="absolute inset-0 bg-gradient-to-r from-green-50 via-white to-green-50 transform -skew-y-2 rounded-2xl shadow-lg"></div>

          {/* Bordes decorativos */}
          <div className="absolute -top-1 -bottom-1 -left-1 -right-1 bg-gradient-to-r from-green-200 to-green-300 rounded-2xl transform -rotate-1 opacity-30"></div>
          <div className="absolute -top-1 -bottom-1 -left-1 -right-1 bg-gradient-to-l from-green-200 to-green-300 rounded-2xl transform rotate-1 opacity-30"></div>

          {/* Contenido */}
          <div className="relative">
            <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-green-500 mb-2">
              WordWizardry
            </h1>
            <p className="text-gray-600">
              Tu asistente mágico para contar palabras
            </p>

            {/* Elementos decorativos */}
            <div className="absolute -left-4 top-1/2 transform -translate-y-1/2">
              <div className="w-2 h-2 bg-green-400 rounded-full mb-2"></div>
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
            </div>
            <div className="absolute -right-4 top-1/2 transform -translate-y-1/2">
              <div className="w-2 h-2 bg-green-400 rounded-full mb-2"></div>
              <div className="w-2 h-2 bg-green-300 rounded-full"></div>
            </div>
          </div>
        </div>

        {/* Subrayado decorativo */}
        <div className="mt-2 h-1 bg-gradient-to-r from-transparent via-green-200 to-transparent rounded-full"></div>
      </div>
    </header>
  );
};

export default Header;
