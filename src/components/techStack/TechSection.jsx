import React from "react";
import TechCard from "./TechCard";
import { techData } from "../../constants/techData";

const TechSection = () => {
  return (
    <section className="mb-16">
      <h2 className="text-2xl font-bold text-green-600 mb-8 text-center">
        Tecnologías Implementadas
      </h2>
      <div className="grid gap-8">
        {Object.entries(techData).map(([category, items]) => (
          <div key={category} className="bg-gray-200 rounded-lg shadow-lg p-6">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">
              {category}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {items.map((tech) => (
                <TechCard key={tech.name} {...tech} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechSection;
