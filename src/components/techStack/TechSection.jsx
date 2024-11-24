// src/components/techStack/TechSection.jsx
import React from "react";
import CategorySection from "./CategorySection";
import { techData } from "../../constants/techData";

const TechSection = () => {
  return (
    <section className="mb-16">
      {/* decorated title*/}
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-green-600 mb-2">
          Implemented Technologies
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-transparent via-green-300 to-transparent mx-auto" />
      </div>

      {/* categories grid */}
      <div className="grid gap-8">
        {Object.entries(techData).map(([category, items]) => (
          <CategorySection key={category} category={category} items={items} />
        ))}
      </div>
    </section>
  );
};

export default TechSection;
