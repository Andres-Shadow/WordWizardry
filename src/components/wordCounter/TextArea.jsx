const TextArea = ({ value, onChange }) => {
  return (
    <div className="flex-1">
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Empieza a escribir algo mágico..."
        className="w-full h-64 p-4 bg-white border border-green-200 rounded-lg focus:ring-2 focus:ring-green-300 focus:border-transparent resize-none"
      />
    </div>
  );
};

export default TextArea;
