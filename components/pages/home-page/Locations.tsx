import Image from "next/image";
import React from "react";
// import { locations } from "@/data/mock.json";
import Button from "@/components/elements/button";
import Section from "@/components/layouts/section";
import Container from "@/components/layouts/container";
import { getHomepage } from "@/sanity/queries/homepage";
type Location = {
  link: string | null;
  image: string;
  tagline: string;
  heading: string;
  excerpt: string | null;
};
const Locations = async () => {
  const { locations } = await getHomepage();

  return (
    <Section className="relative">
      <Image
        src="/images/locations.jpg"
        alt=""
        fill
        className="object-cover blur object-top"
      />
      <Container className="relative">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-section font-coolvetica text-white">
              {locations.heading || "Our Locations"}
            </h2>
            <p className="text-white font-satoshi">
              {locations.tagline ||
                "Ready to take your tennis game to the next level? Experience world-class coaching, state-of-the-art facilities, and a vibrant tennis community. Enroll today and become part of a legacy of excellence."}
            </p>
            <Button className="w-fit">
              {" "}
              {locations.cta || "Our Locations"}
            </Button>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {locations?.ourLocations.map(
              (location: Location, index: number) => {
                return (
                  <div className="flex flex-col gap-3 text-white" key={index}>
                    <div className="relative sm:h-[120px] h-[150px] shadow-2xl rounded-3xl overflow-hidden">
                      <Image
                        src={location.image}
                        alt=""
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-sub-title font-coolvetica font-bold tracking-wide">
                      {location.heading}
                    </h3>
                    <p>{location.tagline}</p>
                  </div>
                );
              }
            )}
          </div>
        </div>
      </Container>
      ;
    </Section>
  );
};

export default Locations;
