"use client";

import React from "react";
import SideMenu from "../components/SideMenu";
import LoGo from "../components/LoGo";
import { HiOutlineAcademicCap } from "react-icons/hi";

const academia = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-950 to-slate-900 flex flex-col items-center justify-center p-10 relative">
      <SideMenu />
      <div className="w-full max-w-4xl text-center">
        <HiOutlineAcademicCap size={40} className="mx-auto mb-4 text-white-500" />
        <h1 className="text-4xl font-bold mb-8">Experiência Acadêmica</h1>

        <div className="flex items-center justify-center gap-x-10 text-white text-left ">
          
          <p className="max-w-xl text-lg leading-relaxed">
          Sou estudante de Sistemas para Internet na Universidade Católica de Pernambuco, estou no terceiro período do curso e pretendo me especializar em Inteligência Artificial e Banco de Dados. Tenho conhecimento em diversas áreas como: Desenvolvimento Web, Banco de Dados, Desenvolvimento Backend, Java, PowerBI. Além das habilidades técnicas, possuo soft-skills como: comunicação, liderança e trabalho em grupo. 
          </p>
        </div>
      </div>

      <footer className="bottom-1 mt-20">
        <LoGo/>
      </footer>
    </div>
  );
};

export default academia;
