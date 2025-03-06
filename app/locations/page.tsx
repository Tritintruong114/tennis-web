import Button from "@/components/elements/button";
import Container from "@/components/layouts/container";
import Section from "@/components/layouts/section";
import { Location } from "@/components/pages/home-page/Locations";
import { getHomepage } from "@/sanity/queries/homepage";
import Image from "next/image";
import React from "react";

const page = async () => {
  const { locations } = await getHomepage();

  return (
    <React.Fragment>
      <Section>
        <Container>
          <div className="mb-12">
            <h1 className="text-hero mb-3 font-coolvetica uppercase leading-none">
              {locations.heading || "Our Locations"}
            </h1>
            <p className="mb-5 font-satoshi text-label">{locations.tagline}</p>
            <Button>{locations.cta}</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {locations.ourLocations.map((location: Location, index: number) => {
              return (
                <div
                  key={index}
                  className="relative h-[300px] rounded-3xl overflow-hidden flex-col flex items-start justify-end"
                >
                  {" "}
                  <Image
                    src={location.image}
                    alt=""
                    fill
                    className="object-cover object-top"
                  />
                  <div className="relative p-6 text-white">
                    <h2 className="text-sub-title font-bold font-coolvetica">
                      {location.heading}
                    </h2>
                    <p>{location.tagline}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default page;
