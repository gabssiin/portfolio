// app/portfolio/page.js
"use client";

import React from 'react';
import GitHubRepo from '../components/GitHubRepo'; 
import SideMenu from '../components/SideMenu'; 

export default function portfolio() { 
  return (

    <div className="flex min-h-screen bg-gradient-to-r from-slate-950 to-slate-900">
      <SideMenu />
      <main className="flex-grow">
        <GitHubRepo />
      </main>
    </div>
  );
}