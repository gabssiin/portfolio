// app/sobremim/page.js
"use client";

import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import SideMenu from "../components/SideMenu";
import LoGo from "../components/LoGo";
export default function tecnologias() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-950 to-slate-900 flex flex-col items-center justify-center p-10 relative">
      <MdOutlineWorkOutline size={30} color="white" className="mr-4" />
      <h1 className="text-6xl mb-30">Tecnologias Usadas</h1>
      {<h1 className="text-xl">React, TailwindCss, Next.js</h1>}
    </div>
  );
}
