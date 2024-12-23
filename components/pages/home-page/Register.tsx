import Button from "@/components/elements/button";
import Input from "@/components/elements/input";
import Container from "@/components/layouts/container";
import Section from "@/components/layouts/section";
import React from "react";

const Register = () => {
  return (
    <Section className="w-screen relative z-20 py-32 bg-black">
      <Container className=" flex md:flex-row flex-col  justify-between md:items-center">
        <h2 className="text-white xl:w-2/4 font-coolvetica text-section uppercase">
          let’s experience Tennis together
        </h2>
        <div className="flex flex-col gap-3">
          <p className="text-white/60">Stay up to date</p>
          <div className="flex gap-3">
            <Input placeholder="Register here!" />
            <Button>Subscribe</Button>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Register;
