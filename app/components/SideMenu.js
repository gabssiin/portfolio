"use client";

import React, { useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { TiHomeOutline } from "react-icons/ti";
import { CgGames } from "react-icons/cg";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FiAlignRight, FiPhone } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi";

const SideMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div className="absolute top-4 right-4 z-10">
        <button
          onClick={toggleMenu}
          className="cursor-pointer hover:opacity-75 focus:outline-none scale-110 transition-all duration-300 hover:scale-130"
        >
          <FiAlignRight size={36} color="white" />
        </button>
      </div>

      <div
        className={`fixed top-0 right-0 w-1/4 h-full bg-gray-950 text-white z-30 shadow-lg flex flex-col items-start p-8 transition-transform duration-300 transform ${
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
          href="/"
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
          href="/academia"
          className="flex items-center py-2 text-xl hover:opacity-90"
        >
          <HiOutlineAcademicCap size={30} color="white" className="mr-4" />
          <span className="text-xl">Experiência Acadêmica</span>
        </a>

        <a
          href="/portfolio"
          className="flex items-center py-2 text-xl hover:opacity-90"
        >
          <FiGrid size={30} color="white" className="mr-4" />
          <span className="text-xl"> Projetos Desenvolvidos </span>
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

        <span className="text-white mt-70 ml-35 text-3xl font-silkscreen font-light">
          {" "}
          &lt;<span className="text-cyan-500">G</span>/&gt;
        </span>
      </div>
    </>
  );
};

export default SideMenu;
