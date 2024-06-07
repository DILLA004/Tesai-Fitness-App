'use client';

import Image from "next/image";
import './globals.css';
import React from "react";
import { useEffect } from "react";


export default function Home() {

  return (
    <div id="hero">
      <img src="/images/Rectangle%206.png" alt="Hero"/>

        <p className="right-0 max-w-48">
          [ Tesai is an app that makes regular workouts accessible, effective and joyful ]
        </p>
        <div className="w-full flex flex-row px-36 ">
            <h1 className="flex">FIND YOUR GREATNESS.</h1>
            <div onClick={() => {}}
                 className="right-64 absolute bottom-8 text-black font-semibold py-3 px-14 rounded-full transition cursor-pointer hover:bg-[#000000] bg-[#FF4400]">
                JOIN US
            </div>
        </div>
    </div>
  );
}
