import React from "react";
import { Github, Linkedin, Facebook } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="relative mt-20 bg-gradient-to-t from-zinc-950 via-zinc-900 to-zinc-950 border-t border-zinc-800/60 py-10">
      {/* Glow decorativo */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.25)_0%,transparent_70%)] blur-3xl"></div>

      <div className="relative container mx-auto px-4 text-center">
        <p className="text-zinc-400 text-sm sm:text-base tracking-wide">
          <span className="text-emerald-400 font-semibold">GuitarLA</span> — Todos los derechos reservados ©{" "}
          {new Date().getFullYear()}
        </p>

        <div className="mt-4 flex justify-center gap-4 text-zinc-500">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-emerald-400 hover:bg-zinc-800/50 rounded-lg transition-all duration-300"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-emerald-400 hover:bg-zinc-800/50 rounded-lg transition-all duration-300"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 hover:text-emerald-400 hover:bg-zinc-800/50 rounded-lg transition-all duration-300"
            aria-label="Facebook"
          >
            <Facebook size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
};