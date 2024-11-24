// src/constants/techData.js
import { Code2, Paintbrush, Wrench } from "lucide-react";

export const techData = {
  "Frontend Core": [
    { name: "React", description: "Biblioteca de UI", icon: Code2 },
    { name: "JavaScript", description: "Lenguaje principal", icon: Code2 },
  ],
  Estilos: [
    {
      name: "TailwindCSS",
      description: "Framework de CSS utilitario",
      icon: Paintbrush,
    },
    {
      name: "Responsive Design",
      description: "Diseño adaptativo",
      icon: Paintbrush,
    },
  ],
  Desarrollo: [
    {
      name: "Best Practices",
      description: "Código limpio y mantenible",
      icon: Wrench,
    },
    {
      name: "Component Pattern",
      description: "Arquitectura modular",
      icon: Wrench,
    },
  ],
};
