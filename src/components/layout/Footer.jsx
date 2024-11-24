import React from "react";
import { Github, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    // Cambiamos el fondo a gris muy claro
    <footer className="bg-gray-50 shadow-lg rounded-lg mt-auto p-4">
      <div className="container mx-auto flex justify-between items-center">
        <p className="text-center flex-1 text-gray-600">
          Made With 💗 By Andres Mauricio Dussan / Andres - Shadow
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/Andres-Shadow"
            className="text-gray-600 hover:text-green-600"
          >
            <Github size={24} />
          </a>
          <a
            href="https://www.linkedin.com/in/am-dussanb/"
            className="text-gray-600 hover:text-green-600"
          >
            <Linkedin size={24} />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
