import Image from "next/image";
import React from "react";
import Section from "@/components/layouts/section";
import Container from "@/components/layouts/container";
import Button from "@/components/elements/button";
import { getHomepage } from "@/sanity/queries/homepage";

type Coach = {
  heading?: string;
  excerpt?: string;
  link?: string | null;
  image?: string;
  tagline?: string;
};

const Coaches = async () => {
  const { coaches } = await getHomepage();

  return (
    <Section>
      <Container>
        <div className="flex flex-col xl:flex-row mb-12 justify-between items-center">
          <h2 className="text-section font-coolvetica">
            {coaches.heading || "Meet the Coaches Behind elysian"}
          </h2>
          <Button>{coaches.cta || "Explore Academy"}</Button>
        </div>
        <div className="grid sm:grid-cols-2 gap-24">
          {coaches.ourCoaches.map((coach: Coach, index: number) => {
            return (
              <div className="" key={index}>
                <div className="relative h-[450px] shadow-2xl mb-12 rounded-3xl overflow-hidden">
                  <Image
                    src={
                      coach.image ||
                      "https://cdn.sanity.io/images/1u2mp0fk/production/553d100df76ca4d4e4ae6e110045467a79ca9ae1-736x1472.jpg"
                    }
                    alt=""
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div className="flex flex-col">
                  <p>{coach.tagline}</p>
                  <h3 className="text-features font-coolvetica">
                    {coach.heading}
                  </h3>
                  <p className="font-satoshi font-light">{coach.excerpt}</p>
                  <button className="px-6 py-3 mt-3 w-fit uppercase bg-highlight-green rounded-full">
                    Subscribe
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
};

export default Coaches;
