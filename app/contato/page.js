"use client";

import React from "react";
import { MdOutlineMail } from "react-icons/md";
import SideMenu from "../components/SideMenu";
import LoGo from "../components/LoGo";
import { FiPhone } from "react-icons/fi";

export default function contato() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-slate-950 to-slate-900 flex flex-col items-center justify-center p-10 relative">
      <SideMenu />
      <div className="flex flex-col items-center justify-center">
        <FiPhone size={50} className="mx-auto mb-4 text-white-500" />
        <h1 className="text-4xl font-bold mb-8">Contato</h1>

        <a href="#" className="flex items-center py-2 text-xl hover:opacity-90">
          <MdOutlineMail size={30} color="white" className="mr-4" />
          <span className="text-xl">gabriel.willian.br@gmail.com</span>
        </a>
      </div>

      <footer className="bottom-1 mt-20">
        <LoGo />
      </footer>
    </div>
  );
}
