"use client";
import Button from "@/components/elements/button";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import Section from "@/components/layouts/section";
import React, { useLayoutEffect } from "react";
import Container from "@/components/layouts/container";
import Image from "next/image";

const FitnessPage = () => {
  useLayoutEffect(() => {
    // Animate the text-highlight class for the "competitive edge" span
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
    <React.Fragment>
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
              <source src="/videos/hero_video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="relative p-12">
            <div className="text-white flex sm:flex-row flex-col sm:items-end">
              <h1 className="text-hero font-coolvetica uppercase mr-12 leading-none">
                Fitness
              </h1>
              <div className="">
                <p className="mb-6 sm:w-1/2">
                  Train like an athlete. Unlock your full potential with
                  personalized fitness programs designed to enhance your tennis
                  skills and maintain peak performance.
                </p>
                <Button className="w-fit">Explore Academy</Button>
              </div>
            </div>
          </div>
        </div>
        <div className="sticky top-0 min-h-[100vh] -mt-[200vh] flex items-center justify-center">
          <div className="max-w-[60rem] text-center mx-auto">
            <h2 className="sm:text-[7rem] text-title uppercase font-coolvetica font-bold">
              <span className="text-highlight-green">&quot;</span>it&#39;s
              strength and agility that give every athlete a
              <span className="text-highlight"> competitive edge.</span>
              <span className="text-highlight-green">&quot;</span>
            </h2>
          </div>
        </div>
      </Section>
      <Section className="">
        <Container className="h-full w-full relative">
          <div>
            <h2 className="font-coolvetica relative z-10 uppercase font-bold text-hero leading-none text-center">
              our fitness facilities
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 mt-12 gap-12">
            <div>
              <div className="relative hover:scale-105 drop-shadow duration-300 aspect-square rounded-3xl overflow-hidden flex items-end">
                <Image
                  src="/images/aboutus.jpg"
                  alt=""
                  fill
                  className="object-cover object-top"
                />
                <div className="relative p-6 bg-white w-full">
                  <h3 className="font-coolvetica text-title">Our Facilities</h3>
                  <span className="bg-highlight-green rounded-full px-2 py-1">
                    Our Facilities is the best
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="relative hover:scale-105 drop-shadow duration-300 aspect-square rounded-3xl overflow-hidden flex items-end">
                <Image
                  src="/images/aboutus.jpg"
                  alt=""
                  fill
                  className="object-cover object-top"
                />
                <div className="relative p-6 bg-white w-full">
                  <h3 className="font-coolvetica text-title">Our Facilities</h3>
                  <span className="bg-highlight-green rounded-full px-2 py-1">
                    Our Facilities is the best
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="relative hover:scale-105 drop-shadow duration-300 aspect-square rounded-3xl overflow-hidden flex items-end">
                <Image
                  src="/images/aboutus.jpg"
                  alt=""
                  fill
                  className="object-cover object-top"
                />
                <div className="relative p-6 bg-white w-full">
                  <h3 className="font-coolvetica text-title">Our Facilities</h3>
                  <span className="bg-highlight-green rounded-full px-2 py-1">
                    Our Facilities is the best
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="relative hover:scale-105 drop-shadow duration-300 aspect-square rounded-3xl overflow-hidden flex items-end">
                <Image
                  src="/images/aboutus.jpg"
                  alt=""
                  fill
                  className="object-cover object-top"
                />
                <div className="relative p-6 bg-white w-full">
                  <h3 className="font-coolvetica text-title">Our Facilities</h3>
                  <span className="bg-highlight-green rounded-full px-2 py-1">
                    Our Facilities is the best
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="relative hover:scale-105 drop-shadow duration-300 aspect-square rounded-3xl overflow-hidden flex items-end">
                <Image
                  src="/images/aboutus.jpg"
                  alt=""
                  fill
                  className="object-cover object-top"
                />
                <div className="relative p-6 bg-white w-full">
                  <h3 className="font-coolvetica text-title">Our Facilities</h3>
                  <span className="bg-highlight-green rounded-full px-2 py-1">
                    Our Facilities is the best
                  </span>
                </div>
              </div>
            </div>
            <div>
              <div className="relative hover:scale-105 drop-shadow duration-300 aspect-square rounded-3xl overflow-hidden flex items-end">
                <Image
                  src="/images/aboutus.jpg"
                  alt=""
                  fill
                  className="object-cover object-top"
                />
                <div className="relative p-6 bg-white w-full">
                  <h3 className="font-coolvetica text-title">Our Facilities</h3>
                  <span className="bg-highlight-green rounded-full px-2 py-1">
                    Our Facilities is the best
                  </span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default FitnessPage;
