import React from "react";
import WordCounter from "./components/wordCounter/WordCounter";
import TechSection from "./components/techStack/TechSection";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";

const App = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4 py-8">
        <Header />
        <WordCounter />
        <TechSection />
        <Footer />
      </div>
    </div>
  );
};

export default App;
