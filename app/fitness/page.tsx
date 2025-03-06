import Section from "@/components/layouts/section";
import Container from "@/components/layouts/container";
import Image from "next/image";
import Hero from "@/components/pages/fitness-page/Hero";
import React from "react";
import { getFitnessPage } from "@/sanity/queries/fitness";
type FacilitiType = {
  image?: string;
  heading?: string;
  tagline?: string;
};
const FitnessPage = async () => {
  const { hero, sectionHighlight, facilities } = await getFitnessPage();

  return (
    <React.Fragment>
      <Hero hero={hero} highlight={sectionHighlight} />
      <Section className="">
        <Container className="h-full w-full relative">
          <div>
            <h2 className="font-coolvetica relative z-10 uppercase font-bold text-hero leading-none text-center">
              {facilities?.heading}
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 mt-12 gap-12">
            {facilities.ourFacilities.map(
              (faciliti: FacilitiType, index: number) => {
                return (
                  <div key={index}>
                    <div className="relative hover:scale-105 drop-shadow duration-300 aspect-square rounded-3xl overflow-hidden flex items-end">
                      <Image
                        src={faciliti?.image || ""}
                        alt=""
                        fill
                        className="object-cover object-top"
                      />
                      <div className="relative p-6 bg-white w-full">
                        <h3 className="font-coolvetica text-title">
                          {faciliti.heading}
                        </h3>
                        <span className="bg-highlight-green rounded-full px-2 py-1">
                          {faciliti.tagline}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default FitnessPage;
