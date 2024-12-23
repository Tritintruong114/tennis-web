"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useGSAP } from "@gsap/react";

const Rally = () => {
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      scrollTrigger: {
        scroller: "body",
        trigger: imageWrapRef.current,
        scrub: true,
        start: "-200% top",
        end: "-100% top",
        toggleActions: "play reverse play reverse",
      },
      scale: 1,
      borderRadius: 30,
    });
  }, []);
  return (
    <section className="py-24 border-b">
      <div className="container flex flex-col gap-6 justify-center items-center">
        <h2 className="font-coolvetica leading-none z-20 text-hero text-center">
          Ready to
          <br />
          Rally?
        </h2>
        <div
          className="sm:h-[600px] h-[450px] -mt-16 relative w-full"
          ref={imageWrapRef}
        >
          <Image
            ref={imageRef}
            src="/images/locations.jpg"
            alt="Rally images"
            fill
            className="w-full h-full scale-150"
          />
        </div>
        <button className="uppercase font-satoshi hover:bg-gray-100 duration-300 border w-full py-3 rounded-full">
          Join a camp
        </button>
      </div>
    </section>
  );
};

export default Rally;
