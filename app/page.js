
"use client"; 

import React from "react";
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import SideMenu from "./components/SideMenu";
import Footer from "./components/Footer";

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

      <div className="absolute top-0 left-0 z-0 opacity-80 animate-pulse">
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
        <div className="flex space-x-6 ml-2">
          <a
            href="https://www.linkedin.com/in/gabriel-santos-ti"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:opacity-100 bg-gradient-to-r from-cyan-500 to-cyan-400 scale-110 transition-all duration-300 hover:scale-130"
          >
            <FaLinkedin size={40} color="12181f" />
          </a>
          <a
            href="./portfolio"
            className="hover:opacity-100 bg-gradient-to-r from-cyan-500 to-cyan-400 scale-110 transition-all duration-300 hover:scale-130"
          >
            <FaSquareGithub size={40} color="12181f" />
          </a>
        </div>
      </div>
      <div className="absolute bottom-1 w-full">
        <Footer />
      </div>
    </div>
  );
}