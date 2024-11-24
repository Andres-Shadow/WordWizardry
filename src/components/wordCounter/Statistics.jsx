const Statistics = ({ stats }) => {
  const StatItem = ({ label, value }) => (
    <div className="bg-white border border-gray-100 p-4 rounded-lg shadow-sm">
      <p className="text-2xl font-bold text-green-600">{value}</p>
      <p className="text-sm text-gray-600">{label}</p>
    </div>
  );

  return (
    <div className="flex flex-col gap-4 justify-center min-w-[200px]">
      <StatItem
        label="Palabras sin espacios"
        value={stats.wordsWithoutSpaces}
      />
      <StatItem label="Palabras" value={stats.wordsWithSpaces} />
      <StatItem label="Total caracteres" value={stats.totalCharacters} />
    </div>
  );
};

export default Statistics;
