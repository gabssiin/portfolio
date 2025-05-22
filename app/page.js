"use client";

import React from "react";
import Image from "next/image";
import { FaLinkedin} from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import SideMenu from "./components/SideMenu";


export default function Home() {


  return (
    <div className="flex h-screen w-screen bg-gradient-to-r from-slate-950 to-slate-900">
      <SideMenu/>

      <div className="relative rounded-xl overflow-hidden w-90 h-140 top-22 left-1 scale-90 transition-all duration-300 hover:scale-100">
        <Image
          src="/portfolio.jpg"
          alt="imagem da tela inicial"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="flex flex-col justify-center items-start w-1/2 text-white p-16">
        <h1 className="text-6xl font-bold mb-10"> Gabriel Santos </h1>
        <p className="text-lg mb-10">
          {" "}
          Olá, esse é o meu portfólio para os meus projetos.{" "}
        </p>
        <div className="flex space-x-6">
          <a
            href="#"
            className="hover:opacity-100 bg-gradient-to-r from-cyan-500 to-cyan-400 scale-110 transition-all duration-300 hover:scale-130"
          >
            <FaLinkedin size={36} color="202C39" />
          </a>
          <a
            href="#"
            className="hover:opacity-100 bg-gradient-to-r from-cyan-500 to-cyan-400 scale-110 transition-all duration-300 hover:scale-130"
          >
            <FaSquareGithub size={36} color="202C39" />
          </a>
        </div>
      </div>
    </div>
  );
}
