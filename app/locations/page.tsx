import Button from "@/components/elements/button";
import Container from "@/components/layouts/container";
import Section from "@/components/layouts/section";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <React.Fragment>
      <Section>
        <Container>
          <div className="mb-12">
            <h1 className="text-hero mb-3 font-coolvetica uppercase leading-none">
              Our Locations
            </h1>
            <p className="mb-5 font-satoshi text-label">
              <b>Discover Your Perfect Court</b>– Ready to elevate your tennis
              game? Experience world-class coaching, state-of-the-art
              facilities, and a vibrant tennis community. Enroll now and be part
              of a legacy of excellence.
            </p>
            <Button>Start Today</Button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative h-[300px] rounded-3xl overflow-hidden flex-col flex items-start justify-end">
              <Image
                src="/images/aboutus.jpg"
                alt=""
                fill
                className="object-cover object-top"
              />
              <div className="relative p-6 text-white">
                <h2 className="text-sub-title font-bold font-coolvetica">
                  Grandview Park Tennis Center
                </h2>
                <p>123 Maplewood Drive, Riverton</p>
              </div>
            </div>
            <div className="relative h-[300px] rounded-3xl overflow-hidden flex-col flex items-start justify-end">
              <Image
                src="/images/aboutus.jpg"
                alt=""
                fill
                className="object-cover object-top"
              />
              <div className="relative p-6 text-white">
                <h2 className="text-sub-title font-bold font-coolvetica">
                  Grandview Park Tennis Center
                </h2>
                <p>123 Maplewood Drive, Riverton</p>
              </div>
            </div>
            <div className="relative h-[300px] rounded-3xl overflow-hidden flex-col flex items-start justify-end">
              <Image
                src="/images/aboutus.jpg"
                alt=""
                fill
                className="object-cover object-top"
              />
              <div className="relative p-6 text-white">
                <h2 className="text-sub-title font-bold font-coolvetica">
                  Grandview Park Tennis Center
                </h2>
                <p>123 Maplewood Drive, Riverton</p>
              </div>
            </div>
            <div className="relative h-[300px] rounded-3xl overflow-hidden flex-col flex items-start justify-end">
              <Image
                src="/images/aboutus.jpg"
                alt=""
                fill
                className="object-cover object-top"
              />
              <div className="relative p-6 text-white">
                <h2 className="text-sub-title font-bold font-coolvetica">
                  Grandview Park Tennis Center
                </h2>
                <p>123 Maplewood Drive, Riverton</p>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </React.Fragment>
  );
};

export default page;
