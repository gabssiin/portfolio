"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import SideMenu from "./components/SideMenu";
import DecorativeLines from "./components/DecorativeLines";
import {
  Shape1, Shape2, Shape3, Shape4, Shape5, Shape6, Shape7, Shape8, Shape9,
  Shape10, Shape11, Shape12, Shape13, Shape14, Shape15, Shape16, Shape17,
  Shape18, Shape19, Shape20, Shape21, Shape22
} from './components/GeometricShapes'; 

export default function Home() {
  return (
    <div className="flex h-screen w-screen bg-gradient-to-r from-slate-950 to-slate-900">
      <SideMenu />
      <div className="relative rounded-xl overflow-hidden w-3/12 h-8/10 top-22 left-5 scale-90 transition-all duration-300 hover:scale-100">
        <Image
          src="/portfolio.jpg"
          alt="imagem da tela inicial"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute bottom-1 left-0 z-0 opacity-80 animate-pulse">
        <Shape7 />
      </div>

      <div className="absolute up-1 left-0 z-0 opacity-80 animate-pulse">
        <Shape12/>
      </div>

      <div className="absolute bottom-1 right-1 z-0 opacity-80 animate-pulse">
      <Shape19/>
      </div>



      <div className="flex flex-col justify-center items-start w-1/2 text-white p-16">
        <h1 className="text-7xl font-bold mb-10 transition-all duration-300 hover:scale-101">
          {" "}
          Gabriel Santos{" "}
        </h1>
        <p className="text-2xl mb-10 transition-all duration-300 hover:scale-101">
          {" "}
          Olá, esse é o meu portfólio para os meus projetos.{" "}
        </p>
        <div className="flex space-x-6">
          <a
            href="#"
            className="hover:opacity-100 bg-gradient-to-r from-cyan-500 to-cyan-400 scale-110 transition-all duration-300 hover:scale-130"
          >
            <FaLinkedin size={44} color="202C39" />
          </a>
          <a
            href="#"
            className="hover:opacity-100 bg-gradient-to-r from-cyan-500 to-cyan-400 scale-110 transition-all duration-300 hover:scale-130"
          >
            <FaSquareGithub size={44} color="202C39" />
          </a>
        </div>
      </div>
    </div>
  );
}
