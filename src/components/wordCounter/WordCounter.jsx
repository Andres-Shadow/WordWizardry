import React, { useState, useCallback } from "react";
import TextArea from "./TextArea";
import Statistics from "./Statistics";

const WordCounter = () => {
  const [text, setText] = useState('');

  const calculateStats = useCallback((text) => {
    // Words without spaces 
    const wordsWithoutSpaces = text.trim().replace(/\s+/g, '').length;
    
    // Words with spaces (normal word count)
    const wordsWithSpaces = text.trim() === '' ? 0 : text.trim().split(/\s+/).length;
    
    // Total characters count (including spaces and like breaks)
    const totalCharacters = text.length;

    return {
      wordsWithoutSpaces,
      wordsWithSpaces,
      totalCharacters
    };
  }, []);

  const handleTextChange = (newText) => {
    setText(newText);
  };

  return (
    <div className="flex flex-col md:flex-row gap-8 mb-16 bg-gray-50 rounded-lg shadow-lg p-6">
      <TextArea value={text} onChange={handleTextChange} />
      <Statistics stats={calculateStats(text)} />
    </div>
  );
};

export default WordCounter;

