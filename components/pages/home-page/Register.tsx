import NewLetter from "@/components/elements/newletter";
import Container from "@/components/layouts/container";
import Section from "@/components/layouts/section";
import { getHomepage } from "@/sanity/queries/homepage";
import React from "react";

const Register = async () => {
  const { register } = await getHomepage();

  return (
    <Section className="w-screen relative z-20 py-32 bg-black">
      <Container className=" flex md:flex-row flex-col  justify-between md:items-center">
        <h2 className="text-white xl:w-2/4 font-coolvetica text-section uppercase">
          {register?.heading || ""}
        </h2>
        <div className="flex flex-col gap-3">
          <p className="text-white/60">{register?.tagline || "Stay up date"}</p>
          <NewLetter />
        </div>
      </Container>
    </Section>
  );
};

export default Register;
