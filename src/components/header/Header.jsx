import React from "react";
import { Carrito } from "../car/Carrito";

export const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-xl bg-zinc-950/80 border-b border-zinc-800/50 shadow-[0_4px_20px_-5px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a 
            href="/" 
            className="flex items-center group transition-transform duration-300 hover:scale-105"
          >
            <img
              src="./public/img/logo.svg"
              alt="Logo Guitarra"
              className="w-32 sm:w-36 lg:w-40 h-auto"
            />
          </a>

          {/* Navegación / Carrito */}
          <nav className="flex items-center">
            <Carrito />
          </nav>
        </div>
      </div>
    </header>
  );
};