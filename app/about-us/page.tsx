import Button from "@/components/elements/button";
import Container from "@/components/layouts/container";
import Section from "@/components/layouts/section";
import Coaches from "@/components/pages/home-page/Coaches";
import Rally from "@/components/pages/home-page/Rally";
import Image from "next/image";
import React from "react";

const AboutUsPage = () => {
  return (
    <React.Fragment>
      <Section className="">
        <Container>
          <div className="text-center">
            <h1 className="text-hero font-coolvetica uppercase relative">
              About us
            </h1>
            <div className="-mt-20">
              <Image
                src="/images/locations.jpg"
                alt="Rally images"
                width={450}
                height={450}
                className="w-full h-full rounded-3xl"
              />
            </div>
            <div className="text-center w-full flex-col flex items-center mt-12">
              <p className="mb-6 sm:w-3/4">
                Discover world-class tennis coaching, cutting-edge fitness
                training, and a supportive community dedicated to helping you
                succeed. Our expert team, top-tier facilities, and proven
                programs are designed to enhance your game at every level.
              </p>
              <Button>Join a camp</Button>
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
                A Legacy of Excellence academy
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              <p>
                Building champions since 2010, Our academy has been the bedrock
                of elite tennis training and fitness, empowering players to
                reach their peak physical potential.
              </p>
              <div>
                <p className="pb-3 border-b-highlight-green border-b text-white/60 font-satoshi uppercase">
                  Our history
                </p>
                <ul>
                  <li className="flex gap-6 my-3">
                    <span className="font-bold mx-0 font-coolvetica text-sub-title">
                      2010
                    </span>
                    <p className="text-base font-satoshi text-white/80">
                      Foundation of Academy in San Francisco
                    </p>
                  </li>
                  <li className="flex gap-6 my-3">
                    <span className="font-bold mx-0 font-coolvetica text-sub-title">
                      2010
                    </span>
                    <p className="text-base font-satoshi text-white/80">
                      Foundation of Academy in San Francisco
                    </p>
                  </li>
                  <li className="flex gap-6 my-3">
                    <span className="font-bold mx-0 font-coolvetica text-sub-title">
                      2010
                    </span>
                    <p className="text-base font-satoshi text-white/80">
                      Foundation of Academy in San Francisco
                    </p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Coaches />
      <Rally />
    </React.Fragment>
  );
};

export default AboutUsPage;
