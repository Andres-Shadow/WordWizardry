// src/components/techStack/CategorySection.jsx
import React from "react";
import TechCard from "./TechCard";

const CategorySection = ({ category, items }) => {
  return (
    <div className="overflow-hidden relative">
      {/* Fondo con gradiente sutil */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white rounded-xl" />

      {/* Contenido */}
      <div className="relative p-6 rounded-xl">
        <h3 className="text-xl font-bold text-gray-700 mb-6 flex items-center">
          <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-3" />
          {category}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((tech) => (
            <TechCard key={tech.name} {...tech} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategorySection;
