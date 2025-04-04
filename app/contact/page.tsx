import Form from "@/components/elements/form";
import Container from "@/components/layouts/container";
import Section from "@/components/layouts/section";
import { geContactPage } from "@/sanity/queries/contact";
import Image from "next/image";
import Link from "next/link";
import React from "react";

type SocialType = {
  heading?: string;
  cta?: string;
};
const page = async () => {
  const { hero, socials } = await geContactPage();

  return (
    <Section className="sm:py-0 overflow-hidden">
      <Container>
        <div className="grid sm:grid-cols-2 w-full items-center justify-between">
          <div className="">
            <div className="mb-12">
              <h1 className="uppercase text-hero font-coolvetica">
                {hero?.heading}
              </h1>
              <p>{hero?.tagline}</p>
              <div className="flex gap-6 mt-6">
                {socials?.ourSocials.map(
                  (social: SocialType, index: number) => {
                    return (
                      <Link
                        key={index}
                        href={social.cta || "/"}
                        className="underline"
                      >
                        {social?.heading}
                      </Link>
                    );
                  }
                )}
              </div>
            </div>
            <Form />
          </div>
          <div className="hidden sm:block relative h-full -mr-24">
            <Image
              src={hero.heroImage || "/images/aboutus.jpg"}
              alt=""
              fill
              className="object-cover pl-12 h-full w-full object-top"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default page;
