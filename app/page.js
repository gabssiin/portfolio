"use client"; 

import React, { useState } from 'react';
import Image from "next/image";
import { FaLinkedin, FaGithub, FaRegUser} from 'react-icons/fa';
import { TiHomeOutline } from "react-icons/ti"

import { FiAlignRight, FiPhone } from "react-icons/fi";
import { FiGrid } from "react-icons/fi";

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="flex h-screen w-screen">
      <div className="relative w-1/3 h-full">
        <Image
          src="/portfolio.jpg"
          alt="imagem da tela inicial"
          layout="fill"
          objectFit="cover"
        />
      </div>

      <div className="absolute top-4 right-4 z-10">
        <button onClick={toggleMenu} className="cursor-pointer hover:opacity-75 focus:outline-none">
          <FiAlignRight size={36} color="white" />
        </button>
      </div>
  
      {menuOpen && (
        <div className="fixed top-0 right-0 w-1/4 h-full bg-gray-900 text-white z-30 shadow-lg flex flex-col items-start p-8">
       
          <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-400 hover:text-white text-2xl focus:outline-none">
            &times;
          </button>
          
          <a href='#' className='flex items-center py-2 text-xl hover:opacity-90'>
            <TiHomeOutline size={30} color='white' className="mr-4" /> 
            <span className="text-xl">Início</span> 
          </a>

          <a href="#" className="flex items-center py-2 text-xl hover:opacity-90">
          <FaRegUser size={30} color='white' className='mr-4'/>
          <span className='text-x1'>Sobre</span> 
          </a>


          <a href="#" className="flex items-center py-2 text-xl hover:opacity-90">
          <FiGrid size={30} color='white' className='mr-4'/>
          <span className='text-x1'> Portfólio </span>
          </a>


          

          <a href="#" className="flex items-center py-2 text-xl hover:opacity-90">
          <FiPhone size={30} color='white' className='mr-4'/>
          <span className='text-x1'>Contato </span>  
          </a>

        </div>
      )}

      <div className="flex flex-col justify-center items-start w-1/2 text-white p-16">
        <h1 className="text-4xl font-bold mb-10"> Gabriel Santos </h1>
        <p className="text-lg mb-10"> Olá, esse é o meu portfólio para os meus projetos. </p>
        <div className="flex space-x-6">
          <a href="#" className="hover:opacity-90 ">
            <FaLinkedin size={36} color="E3752B" />
          </a>
          <a href="#" className="hover:opacity-90">
            <FaGithub size={36} color="E3752B" />
          </a>
        </div>
      </div>
    </div>
  );
}