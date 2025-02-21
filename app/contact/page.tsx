import Form from "@/components/elements/form";
import Container from "@/components/layouts/container";
import Section from "@/components/layouts/section";
import Image from "next/image";
import Link from "next/link";

import React from "react";

const page = () => {
  return (
    <Section className="sm:py-0 overflow-hidden">
      <Container>
        <div className="grid sm:grid-cols-2 w-full">
          <div className="">
            <div className="mb-12">
              <h1 className="uppercase text-hero font-coolvetica">Contact</h1>
              <p>
                Whether you want to book a court, join a class, or inquire about
                personalized coaching, fill out the form and we’ll get back to
                you as soon as possible.
              </p>
              <div className="flex gap-6 mt-6">
                <Link href="/" className="underline">
                  Instagram
                </Link>
                <Link href="/" className="underline">
                  Instagram
                </Link>
                <Link href="/" className="underline">
                  Instagram
                </Link>
              </div>
            </div>
            <Form />
          </div>
          <div className="hidden sm:block relative h-full -mr-24">
            <Image
              src="/images/aboutus.jpg"
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
