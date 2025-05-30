"use client";

import React from "react";
import { MdOutlineWorkOutline } from "react-icons/md";
import SideMenu from "../components/SideMenu";
import LoGo from "../components/LoGo";
import { Shape12 } from "../components/GeometricShapes";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { RiTailwindCssFill } from "react-icons/ri";
import { LuGithub } from "react-icons/lu";

export default function tecnologias() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-950 to-slate-900 flex flex-col items-center justify-center p-10 relative ">
      <MdOutlineWorkOutline size={60} color="white" className="mr-4 mb-10 transition-all duration-300 hover:scale-130" />
      <h1 className="text-4xl mb-10">Tecnologias Usadas</h1>

      <h1 className="text-xl">
        React, TailwindCss, Next.js e a aplicação da API do GitHub
      </h1>
      <div className="flex justify-center mt-10 ">
        <div className="mx-5  transition-all duration-300 hover:scale-130">
          <FaReact  size={44} color="fff"  />{" "}
        </div>
        <div className="mx-5  transition-all duration-300 hover:scale-130">
          <RiTailwindCssFill  size={44} color="fff"  />
        </div>
        <div className="mx-5  transition-all duration-300 hover:scale-130">
          <SiNextdotjs  size={44} color="fff" />{" "}
        </div>
        <div className="mx-5  transition-all duration-300 hover:scale-130">
          <LuGithub  size={44} color="fff"  />
        </div>
      </div>

      <div className="absolute bottom-1 left-0 z-0 opacity-80 animate-pulse">
        <Shape12 />
      </div>

      <SideMenu />
      <footer className=" absolute bottom-10">
        <LoGo />
      </footer>
    </div>
  );
}
