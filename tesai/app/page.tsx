'use client';

import Image from "next/image";
import './globals.css';
import React from "react";
import { useEffect } from "react";


export default function Home() {

  return (
      <div>
          <div className="hero-section">
              <img className="hero" src="/images/Rectangle%206.png" alt="Hero"/>
              <div className="container">
                  <div className="header">
                      <div className="main-header">
                          <p className="header-1">Your ideal fitness plan: Personal training with a personalised approach</p>
                          <h1>FIND YOUR GREATNESS.</h1>
                      </div>
                      <p className="header-2">[ Tesai is an app that makes regular workouts accessible, effective and joyful ]</p>
                      <div className="plan-button" onClick={()=>{}}>
                          <p>CHOOSE A PROGRAM</p>
                          <img src="/images/Frame.png" alt="Icon"/>
                      </div>
                  </div>
              </div>
          </div>

          <div className="main">
              <div className="container">
                  <main className="section">
                      <div className="section__left">
                          <div className="text-block section__item">
                              <p className="text-block__p">[OUR MISSION]</p>
                          </div>
                          <img className="section__item" src="/images/image%20125.png" alt="woman-workout"/>
                          <img className="section__item" src="/images/image%20127.png" alt="woman-workout"/>
                      </div>
                      <div className="section__right">
                          <div className="text-block section__item">
                              <h1 className="text-block__h">A HABIT BUILDING SEQUENCE</h1>
                              <h1 className="text-block__h1">TO UPGRADE DAILY RITUALS</h1>
                              <p className="text-block__p">Our app combines statistics, multifunctional exercises and scientific approaches. We are passionate about progressive training programmes and create challenges with our professional coaches to make working out fun and rewarding for you.</p>
                              <div className="join-button" onClick={()=>{}}>
                                  <p>JOIN US</p>
                                  <img src="/images/Frame.png" alt="Icon"/>
                              </div>
                          </div>
                          <img className="section__item" src="/images/image%20126.png" alt="woman-workout"/>
                          <img className="section__item" src="/images/image%20128.png" alt="woman-workout"/>
                      </div>
                  </main>
              </div>
          </div>




        {/*<img src="/images/Rectangle%206.png" alt="Hero"/>*/}
        {/*<p className="right-0 max-w-48">*/}
        {/*  [ Tesai is an app that makes regular workouts accessible, effective and joyful ]*/}
        {/*</p>*/}
        {/*<div className="w-full flex flex-row px-36 ">*/}
        {/*  <h1 className="flex">FIND YOUR GREATNESS.</h1>*/}
        {/*  <div onClick={() => {}}*/}
        {/*       className="right-64 absolute bottom-8 text-black font-semibold py-3 px-14 rounded-full transition cursor-pointer hover:bg-[#000000] bg-[#FF4400]">*/}
        {/*    JOIN US*/}
        {/*  </div>*/}
        {/*</div>*/}

      </div>
  );
}