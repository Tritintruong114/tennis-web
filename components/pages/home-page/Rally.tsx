"use client";
import Image from "next/image";
import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

import { useGSAP } from "@gsap/react";
import Button from "@/components/elements/button";
import Section from "@/components/layouts/section";
import Container from "@/components/layouts/container";

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
    <Section className="py-24 border-b">
      <Container className=" flex flex-col gap-6 justify-center items-center">
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
        <Button color="secondary" fullWidth>
          Join the camp
        </Button>
      </Container>
    </Section>
  );
};

export default Rally;
