// src/App.js
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResumeForm from "./components/ResumeForm";
import "./index.css"; // TailwindCSS directives

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center">
        <ResumeForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;