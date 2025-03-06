"use client";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Button from "@/components/elements/button";
import Section from "@/components/layouts/section";
import React, { useLayoutEffect } from "react";

export type HeroFitnessData = {
  heading?: string;
  subtitle?: string;
  heroVideo?: string; // Optional in case there's a fallback video
  cta?: string;
  tagline?: string;
};
export type HighLightData = {
  heading?: string;
  tagline?: string;
};
const Hero = ({
  hero,
  highlight,
}: {
  hero: HeroFitnessData;
  highlight: HighLightData;
}) => {
  useLayoutEffect(() => {
    gsap.to(".text-highlight", {
      boxShadow: "inset 0rem -4rem 0 0em #ceff65", // Adjust box-shadow size and color
      scrollTrigger: {
        trigger: ".sticky", // The element to trigger animation
        start: "bottom 30%", // Start animation when top of ".sticky" is at the center of the viewport
        toggleActions: "play none none reverse", // Play and reverse when entering/exiting
      },
    });
  }, []);
  return (
    <Section className="h-[200vh]  pt-0 sm:pt-0 relative flex flex-col items-center">
      <div
        style={{ height: `calc(98vh - 10rem)` }}
        className="w-[98%] bg-black z-30 rounded-3xl relative flex items-end overflow-hidden mb-[100vh]"
      >
        <div className="h-full w-full overflow-hidden absolute items-start top-0">
          <video
            autoPlay
            muted
            aria-label="Video player"
            className="h-full w-full object-cover"
            loop
          >
            <source
              src={hero?.heroVideo || "/videos/hero_video.mp4"}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="relative p-12">
          <div className="text-white flex sm:flex-row flex-col sm:items-end">
            <h1 className="text-hero font-coolvetica uppercase mr-12 leading-none">
              {hero?.heading || "Fitness"}
            </h1>
            <div className="">
              <p className="mb-6 sm:w-1/2">
                {hero?.tagline ||
                  "Train like an athlete. Unlock your full potential with personalized fitness programs designed to enhance your tennis skills and maintain peak performance."}
              </p>
              <Button className="w-fit">
                {hero?.cta || "Explore Academy"}
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="sticky top-0 min-h-[100vh] -mt-[200vh] flex items-center justify-center">
        <div className="max-w-[60rem] text-center mx-auto">
          <h2 className="sm:text-[7rem] text-title uppercase font-coolvetica font-bold">
            <span className="text-highlight-green">&quot;</span>
            {highlight?.heading}
            <span className="text-highlight">{highlight?.tagline}</span>
            <span className="text-highlight-green">&quot;</span>
          </h2>
        </div>
      </div>
    </Section>
  );
};

export default Hero;
