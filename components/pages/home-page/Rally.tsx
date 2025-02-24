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

type RallyType = {
  heading?: string;
  image?: string;
  cta?: string;
};
const Rally = ({ rally }: { rally: RallyType }) => {
  const imageWrapRef = useRef(null);
  const imageRef = useRef(null);

  useGSAP(() => {
    gsap.to(imageRef.current, {
      scrollTrigger: {
        scroller: "body",
        trigger: imageWrapRef.current,
        scrub: true,
        start: "0 top",
        end: "200% top",
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
          {rally.heading || "Ready to Rally?"}
        </h2>
        <div
          className="sm:h-[600px] h-[450px] -mt-16 relative w-full"
          ref={imageWrapRef}
        >
          <Image
            ref={imageRef}
            src={rally.image || "/images/locations.jpg"}
            alt="Rally images"
            fill
            className="w-full object-cover h-full scale-150"
          />
        </div>
        <Button color="secondary" fullWidth>
          {rally.cta || "Contact for more"}
        </Button>
      </Container>
    </Section>
  );
};

export default Rally;
