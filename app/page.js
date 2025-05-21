"use client";

import React, { useState } from "react";
import Image from "next/image";
import { FaLinkedin, FaRegUser } from "react-icons/fa";
import { FaSquareGithub } from "react-icons/fa6";
import { TiHomeOutline } from "react-icons/ti";
import { CgGames } from "react-icons/cg";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiAlignRight, FiPhone } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";

const DecorativeLines = () => (
  <>
    {/* Linha horizontal superior
    
    */}
    <div className="absolute top-15 left-1/4 w-1/2 h-1 bg-gradient-to-r from-blue-800 to-indigo-900"></div>
    {/* Bloco quadrado rotacionado
     */}
    <div className="absolute shadow-xl/30 rounded-l-lg bottom-50 right-20 w-15 h-15 opacity-100 rotate-0 bg-gradient-to-r from-blue-800 to-indigo-900 animate-slide-in-right" />
    <div className="absolute shadow-xl/30 rounded-r-lg bottom-40 right-10 w-15 h-15 opacity-100 rotate-0 bg-gradient-to-r from-cyan-500 to-cyan-400" />
    <div className="absolute shadow-xl/30 rounded-l-lg bottom-30 right-20 w-15 h-15 opacity-100 rotate-0 bg-gradient-to-r from-blue-800 to-indigo-900 " />

    {/* Pequena linha horizontal inferior */}
    <div className="absolute bottom-15 left-1/4 w-1/2 h-0.5 bg-gradient-to-r from-cyan-500 to-cyan-400" />
  </>
);

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex h-screen w-screen">
      <DecorativeLines />
      <div className="relative w-1/3 h-full">
        <Image
          src="/portfolio.jpg"
          alt="imagem da tela inicial"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={toggleMenu}
          className="cursor-pointer hover:opacity-75 focus:outline-none"
        >
          <FiAlignRight size={36} color="white" />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 w-1/4 h-full bg-gray-900 text-white z-30 shadow-lg flex flex-col items-start p-8 transition-transform duration-300 transform ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          onClick={toggleMenu}
          className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl focus:outline-none"
        >
          &times;
        </button>

        <a
          href="/page"
          className="flex items-center py-2 text-xl hover:opacity-90 "
        >
          <TiHomeOutline size={30} className="mr-4" />
          <span className="text-xl">Início</span>
        </a>

        <a
          href="/sobremim"
          className="flex items-center py-2 text-xl hover:opacity-90"
        >
          <FaRegUser size={30} color="white" className="mr-4" />
          <span className="text-xl">Sobre mim</span>
        </a>

        <a
          href="/portfolio"
          className="flex items-center py-2 text-xl hover:opacity-90"
        >
          <FiGrid size={30} color="white" className="mr-4" />
          <span className="text-xl"> Portfólio </span>
        </a>

        <a
          href="/contato"
          className="flex items-center py-2 text-xl hover:opacity-90"
        >
          <FiPhone size={30} color="white" className="mr-4" />
          <span className="text-xl">Contato </span>
        </a>

        <a
          href="/jogo"
          className="flex items-center py-2 text-xl hover:opacity-90"
        >
          <CgGames size={30} color="white" className="mr-4" />
          <span className="text-xl"> Jogo </span>
        </a>

        <a
          href="/tecnologias"
          className="flex items-center py-2 text-xl hover:opacity-90"
        >
          <MdOutlineWorkOutline size={30} color="white" className="mr-4" />
          <span className="text-xl">Tecnologias Usadas</span>
        </a>

        <div className="absolute top-200 left-1/4 w-1/2 h-1 bg-gradient-to-r from-blue-800 to-indigo-900"></div>
        <div className="absolute left-50 bottom-10">
          <Image
            src="/logo.png"
            width={100}
            height={100}
            alt="Logo"
          />
        </div>
      </div>

      <div className="flex flex-col justify-center items-start w-1/2 text-white p-16">
        <h1 className="text-4xl font-bold mb-10"> Gabriel Santos </h1>
        <p className="text-lg mb-10">
          {" "}
          Olá, esse é o meu portfólio para os meus projetos.{" "}
        </p>
        <div className="flex space-x-6">
          <a
            href="#"
            className="hover:opacity-100 bg-gradient-to-r from-cyan-500 to-cyan-400"
          >
            <FaLinkedin size={36} color="202C39" />
          </a>
          <a
            href="#"
            className="hover:opacity-100 bg-gradient-to-r from-cyan-500 to-cyan-400"
          >
            <FaSquareGithub size={36} color="202C39" />
          </a>
        </div>
      </div>
    </div>
  );
}
