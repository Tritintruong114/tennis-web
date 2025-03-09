import Button from "@/components/elements/button";
import Container from "@/components/layouts/container";
import Section from "@/components/layouts/section";
import Coaches from "@/components/pages/home-page/Coaches";
import { getAboutUsPage } from "@/sanity/queries/about-us";
import Image from "next/image";
import React from "react";

type HistoryType = {
  heading: string;
  tagline: string;
};
const AboutUsPage = async () => {
  const { hero, history } = await getAboutUsPage();
  return (
    <React.Fragment>
      <Section className="">
        <Container>
          <div className="text-center">
            <h1 className="text-hero font-coolvetica uppercase relative">
              {hero?.heading}
            </h1>
            <div className="-mt-20">
              <Image
                src={hero?.heroImage || "/images/locations.jpg"}
                alt="Rally images"
                width={450}
                height={450}
                className="w-full h-full rounded-3xl"
              />
            </div>
            <div className="text-center w-full flex-col flex items-center mt-12">
              <p className="mb-6 sm:w-3/4">{hero?.tagline}</p>
              <Button>{hero?.cta}</Button>
            </div>
          </div>
        </Container>
      </Section>
      <Section className="relative">
        <Image
          src="/images/aboutus.jpg"
          alt=""
          fill
          className="object-cover object-top"
        />
        <Container className="relative">
          <div className="grid sm:grid-cols-2 text-white grid-cols-1">
            <div>
              <h2 className="text-section font-coolvetica leading-none">
                {history?.heading}
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <p>{history?.tagline}</p>
              <div>
                <p className="pb-3 border-b-highlight-green border-b text-white/60 font-satoshi uppercase">
                  Our history
                </p>
                <ul>
                  {history?.ourHistory.map(
                    (history: HistoryType, index: number) => {
                      return (
                        <li key={index} className="flex gap-6 my-3">
                          <span className="font-bold mx-0 font-coolvetica text-sub-title">
                            {history?.heading}
                          </span>
                          <p className="text-base font-satoshi text-white/80">
                            {history?.tagline}
                          </p>
                        </li>
                      );
                    }
                  )}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Coaches />
    </React.Fragment>
  );
};

export default AboutUsPage;
