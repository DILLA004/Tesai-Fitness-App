'use client';

import '../../globals.css';
import React, {useEffect, useLayoutEffect, useRef, useState} from "react";
import useRegisterModal from "@/app/hooks/useRegisterModal";
import {useCurrentUser} from "@/app/components/CurrentUserProvider";
import gsap from 'gsap-trial';
import ScrollSmoother from "gsap-trial/ScrollSmoother";
import ScrollTrigger from "gsap/ScrollTrigger";
import Footer from "@/app/components/Footer";

gsap.registerPlugin(ScrollTrigger,
    // ScrollSmoother
);

const Home = () =>{
    const [isSmootherReady, setIsSmootherReady] = useState(false);
    // useLayoutEffect(() => {
    //     let smoother : any;
    //     if (typeof window !== 'undefined') {
    //         window.scrollTo(0, 0);
    //         if(ScrollTrigger.isTouch !== 1) {
    //             smoother = ScrollSmoother.create({
    //                 wrapper: '.wrapper',
    //                 content: '.content',
    //                 smooth: 1.6, // duration of smooth scroll
    //                 effects: true,
    //                 onUpdate: () => {
    //                     if (!isSmootherReady) {
    //                         setIsSmootherReady(true);
    //                     }
    //                 }
    //             });
    //
    //             gsap.fromTo('.hero', {opacity: 1}, {
    //                 opacity: 0,
    //                 scrollTrigger: {
    //                 trigger: '.hero',
    //                     start: '100',
    //                     end: '1200',
    //                     scrub: true
    //                 }});
    //
    //             const itemsL = gsap.utils.toArray('.section__left .section__item');
    //             itemsL.forEach(item => {
    //                 // @ts-ignore
    //                 return gsap.fromTo(item,
    //                     {x: -50, opacity: 0},
    //                     {
    //                         opacity: 1, x: 0,
    //                         scrollTrigger: {
    //                             trigger: item,
    //
    //                             scrub: true
    //                         }
    //                     });
    //             });
    //             const itemsR = gsap.utils.toArray('.section__right .section__item');
    //             itemsR.forEach(item => {
    //                 // @ts-ignore
    //                 return gsap.fromTo(item,
    //                     {x: 50, opacity: 0},
    //                     {
    //                         opacity: 1, x: 0,
    //                         scrollTrigger: {
    //                             trigger: item,
    //
    //                             scrub: true
    //                         }
    //                     });
    //             });
    //
    //         }
    //         window.scrollTo(0, 0);
    //     }
    //
    //     return () => {
    //         if (smoother) smoother.kill();
    //     };
    // }, [isSmootherReady]);
    const registerModal = useRegisterModal();
    const { currentUser } = useCurrentUser();
    console.log('currentUser in ChildComponent:', currentUser);

  return (
      <div>
          {/*{!isSmootherReady && (*/}
          {/*    <div className="preloader z-50 absolute w-[100vw] h-[100vh] bg-black text-white text-3xl flex justify-center items-center">*/}
          {/*        <h1>Loading...</h1>*/}
          {/*    </div>*/}
          {/*)}*/}

      {/*<div className="wrapper">*/}
      {/*<div className="content">*/}

          <div className="hero-section">
              <img data-speed="0.8" className="hero" src="/images/Rectangle%206.png" alt="Hero"/>
              <div className="container">
                  <div data-speed=".96" className="header">
                      <div  className="main-header">
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
                          <div className="text-block1 section__item">
                              <h1 className="text-block__h">START YOUR JOURNEY</h1>
                              <h1 className="text-block__h1">TO HEALTH AND STRENGTH</h1>
                              <img src="/images/image%20127.png" alt="woman-workout"/>
                              <div className="join-button" onClick={()=>{}}>
                                  <p>VIEW ALL PLANS</p>
                                  <img src="/images/Frame.png" alt="Icon"/>
                              </div>
                          </div>
                      </div>
                      <div className="section__right">
                          <div className="text-block section__item">
                              <h1 className="text-block__h">A HABIT BUILDING SEQUENCE</h1>
                              <h1 className="text-block__h1">TO UPGRADE DAILY RITUALS</h1>
                              <p className="text-block__p">Our app combines statistics, multifunctional exercises and scientific approaches. We are passionate about progressive training programmes and create challenges with our professional coaches to make working out fun and rewarding for you.</p>
                              {
                                  currentUser ? (
                                          <div></div>

                                  ) : (
                                      <div className="join-button" onClick={registerModal.onOpen}>
                                          <p>JOIN US</p>
                                          <img src="/images/Frame.png" alt="Icon"/>
                                      </div>
                                  )
                              }
                          </div>
                          <div className = "categories section__item">
                              <ul>
                                  <li>BODY</li>
                                  <li>FITNESS</li>
                                  <li>CARDIO</li>
                                  <li>CROSSFIT</li>
                                  <li>PILATES</li>
                                  <li>YOGA</li>
                                  <li>ENDURANCE</li>
                              </ul>
                          </div>
                          <img className="clean section__item" src="/images/image%20126.png" alt="woman-workout"/>
                      </div>
                  </main>
                  <div className="bottom-header">
                      <h1 className="text-block__h1">THOSE WHO WILL MAKE </h1>
                      <h1 className="text-block__h1">YOU STRONGER</h1>
                  </div>
                  <div className="section-b">
                      <div className="section__left">
                          <img className="section__item" src="/images/image%20128.png" alt="woman-workout"/>
                      </div>
                      <div className="section__right">
                          <div className="text-block section__item">
                              <p className="text-block__p1">Maya Lacy</p>
                              <h4 className="text-block__h4">‘There is no such thing as impossible - there is only the undone!’</h4>
                              <div className="consult-button" onClick={()=>{}}>
                                  <p>FREE CONSULTATION</p>
                                  <img src="/images/Frame.png" alt="Icon"/>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <Footer/>
      </div>
  );
}

export default Home;