import React from "react";
import { Products } from "../Products/Products";

export const MainProduct = () => {
  return (
    <main className="relative py-8 sm:py-12 lg:py-16 px-4 sm:px-6">
      {/* Efectos de fondo */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Header de sección */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 tracking-tight">
            Nuestra <span className="text-emerald-400">Colección</span>
          </h2>
          <p className="text-sm sm:text-base text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Guitarras premium diseñadas para músicos exigentes que buscan
            calidad profesional
          </p>
        </div>

        {/* Grid de productos */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          <Products />
        </div>
      </div>
    </main>
  );
};
