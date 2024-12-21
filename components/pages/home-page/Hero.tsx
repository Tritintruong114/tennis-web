"use client";
import React, { useRef } from "react";
import heroVideo from "/videos/hero_video.mp4";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import BackgroundVideo from "next-video/background-video";
import { useGSAP } from "@gsap/react";

const Hero = () => {
  const videoWrapRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.to(containerRef.current, {
      scrollTrigger: {
        scroller: "body",
        trigger: videoWrapRef.current,
        pin: true,
        scrub: true,
        markers: true,
        start: "top top",
        end: "bottom top",
        toggleActions: "play reverse play reverse",
      },
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  }, []);

  return (
    <section className="flex relative items-center justify-center h-fit">
      <div className="container">
        <h1 className="uppercase relative z-10  text-black leading-none  font-coolvetica text-hero text-center">
          <span>Swing</span>
          <span>With</span>
          <br />
          <span className="inline-block">Confidence</span>
        </h1>
        <div
          id="video-wrap"
          ref={videoWrapRef}
          className="flex flex-col -mt-[10vh] sm:-mt-[20vh] items-center justify-center w-full sticky h-screen"
        >
          <div
            ref={containerRef}
            className="flex flex-col h-[90%] w-[90%] rounded-3xl overflow-hidden sm:h-[90%] sm:w-[90%]  justify-center sticky top-0 z-10 items-center"
          >
            <div className="flex relative z-10 flex-col justify-center items-center h-full">
              <p className="font-coolvetica text-title uppercase text-white">
                Learn More
              </p>
              <button className="bg-highlight-green rounded-full p-6 material-symbols-outlined">
                arrow_downward
              </button>
            </div>
            <p className="text-features z-10 font-coolvetica bottom-0 uppercase text-white absolute">
              Elevate Your Game
            </p>
            <div className="h-full w-full overflow-hidden absolute items-start top-0">
              <BackgroundVideo
                className="h-full"
                src={heroVideo}
              ></BackgroundVideo>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
