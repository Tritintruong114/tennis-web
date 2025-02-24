"use client";
import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Section from "@/components/layouts/section";
import Container from "@/components/layouts/container";

gsap.registerPlugin(ScrollTrigger);

export type HeroData = {
  title?: string;
  subtitle?: string;
  heroVideo?: string; // Optional in case there's a fallback video
  cta?: string;
  subTitle?: string;
};

export const HeroContent = ({ hero }: { hero: HeroData }) => {
  const videoContainer = useRef(null);

  useEffect(() => {
    gsap.to(videoContainer.current, {
      scrollTrigger: {
        scroller: "body",
        trigger: ".video-wrap",
        pin: true,
        scrub: true,
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
    <Section className="flex relative items-center justify-center sm:pb-0">
      <Container>
        <h1 className="uppercase w-full flex items-center justify-center relative z-10 text-black leading-none font-coolvetica text-hero">
          <p className="w-2/4">{hero?.title || "Swing With Confidence"}</p>
        </h1>
        <div className="flex video-wrap flex-col -mt-[10vh] sm:-mt-[20vh] items-center justify-center w-full sticky h-screen">
          <div
            ref={videoContainer}
            className="flex video-container flex-col h-[90%] w-[90%] rounded-3xl overflow-hidden sm:h-[90%] sm:w-[90%] justify-center sticky top-0 z-10 items-center"
          >
            <div className="flex relative z-10 flex-col justify-center items-center h-full">
              <p className="font-coolvetica text-title uppercase text-white">
                {hero?.cta || "Learn more"}
              </p>
              <button className="bg-highlight-green rounded-full p-6 material-symbols-outlined">
                arrow_downward
              </button>
            </div>
            <p className="text-features z-10 font-coolvetica bottom-0 uppercase text-white absolute">
              {hero?.subTitle || "Evaluate your game"}
            </p>
            <div className="h-full w-full overflow-hidden absolute items-start top-0">
              <video
                autoPlay
                muted
                aria-label="Video player"
                className="h-full w-full object-cover"
                loop
              >
                <source
                  src={
                    hero?.heroVideo ||
                    "https://cdn.sanity.io/files/1u2mp0fk/production/f6295a0882e50d1fd65d9ce0fbed53e834bc6866.mp4"
                  }
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};
