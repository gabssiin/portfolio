// app/sobremim/page.js
"use client";

import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import SideMenu from "../components/SideMenu";
import LoGo from "../components/LoGo";
import DecorativeLines from "../components/DecorativeLines";
import { Shape12 } from "../components/GeometricShapes";
export default function tecnologias() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-950 to-slate-900 flex flex-col items-center justify-center p-10 relative">
      <MdOutlineWorkOutline size={30} color="white" className="mr-4 mb-10" />
      <h1 className="text-6xl mb-30">Tecnologias Usadas</h1>
      {<h1 className="text-xl m">React, TailwindCss, Next.js e a aplicação da API do GitHub</h1>}
      
      
      <div className="absolute bottom-1 left-0 z-0 opacity-80 animate-pulse">
        <Shape12 />
      </div>


      <SideMenu/> 
    </div>
  );
}
