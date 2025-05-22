// components/DecorativeLines.jsx
import React from 'react';

const DecorativeLines = () => (
  <>
    {/* Linha horizontal superior
    
    */}
    <div className="absolute top-15 left-1/4 w-1/2 h-1 bg-gradient-to-r from-blue-800 to-indigo-900"></div>
    {/* Bloco quadrado rotacionado
     */}
    <div className="absolute shadow-xl/30 rounded-l-lg bottom-50 right-20 w-15 h-15 rotate-0 bg-gradient-to-r from-blue-800 to-indigo-900 animate-slide-in-and-out" />
    <div className="absolute shadow-xl/30 rounded-r-lg bottom-40 right-10 w-15 h-15 rotate-0 bg-gradient-to-r from-cyan-500 to-cyan-400 animate-slide-in-and-out" />
    <div className="absolute shadow-xl/30 rounded-l-lg bottom-30 right-20 w-15 h-15 rotate-0 bg-gradient-to-r from-blue-800 to-indigo-900 animate-slide-in-and-out" />
    {/* Pequena linha horizontal inferior */}
    <div className="absolute bottom-15 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-400" />
  </>
);

export default DecorativeLines;