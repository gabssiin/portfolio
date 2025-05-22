"use client";

import React from "react";
import { FaRegUser } from "react-icons/fa";
import SideMenu from "../components/SideMenu";
import LoGo from "../components/LoGo";

const SobreMim = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-950 to-slate-900 flex flex-col items-center justify-center p-10 relative">
      <SideMenu />
      <div className="w-full max-w-4xl text-center">
        <FaRegUser size={40} className="mx-auto mb-4 text-white-500" />
        <h1 className="text-4xl font-bold mb-8">Sobre mim</h1>

        <div className="flex items-center justify-center gap-x-10 text-white text-left ">
          
          <p className="max-w-xl text-lg leading-relaxed">
            Falando mais de mim, sou Gabriel Willian da Cunha Santos, tenho 19
            anos, curto Tecnologia, Música e Artes. Tenho um grande interesse
            nas áreas de Dados e Inteligência Artificial, mas posso me
            considerar apenas um curioso, gosto de sempre estar em contato com
            coisas novas e fora da minha área de conforto. Busco constantemente
            aprender novas tecnologias e aprimorar minhas habilidades em
            programação. Sou uma pessoa dedicada, proativa e gosto de trabalhar
            em equipe, sempre buscando contribuir com ideias e soluções
            criativas. Além disso, valorizo muito o aprendizado contínuo e
            acredito que desafios são oportunidades de crescimento.
          </p>
        </div>
      </div>

      <footer className="bottom-1 mt-20">
        <LoGo/>
      </footer>
    </div>
  );
};

export default SobreMim;
