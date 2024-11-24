// TechCard.jsx
const TechCard = ({ name, description }) => {
  return (
    // Cambiamos el fondo a blanco con borde sutil
    <div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm transition-transform hover:scale-105">
      <h4 className="font-semibold text-green-600">{name}</h4>
      <p className="text-sm text-gray-600">{description}</p>
    </div>
  );
};

export default TechCard;
