// src/components/techStack/TechCard.jsx
import React from "react";

const TechCard = ({ name, description, icon: Icon }) => {
  return (
    <div className="group relative bg-white p-6 rounded-xl shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-gray-100">
      {/* decorative background point */}
      <div className="absolute -right-4 -top-4 w-16 h-16 bg-green-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* content */}
      <div className="relative">
        <div className="flex items-center mb-3">
          <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center text-green-600 mr-3">
            <Icon className="w-5 h-5" />
          </div>
          <h4 className="font-semibold text-green-600 text-lg">{name}</h4>
        </div>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default TechCard;
