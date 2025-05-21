// app/sobremim/page.js
"use client";

import React from 'react';
import { FaRegUser } from 'react-icons/fa';

export default function sobremim() {
  return (

    <div className='flex flex-col justify-center items-start w-1/2 text-white p-16'>
      <FaRegUser size={50} color='white'/>
      <h1 className='text-5x1'> Sobre Mim</h1>
      { <p>Olá mundo! </p>
      }
    </div>
  );
}