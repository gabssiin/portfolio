"use client";

import React from 'react';
import BullsAndCowsGame from '../components/BullsAndCows';
import SideMenu from '../components/SideMenu';

export default function jogo() {
  return (
    <div>
     <BullsAndCowsGame></BullsAndCowsGame> <SideMenu/>
    </div>
  );
}