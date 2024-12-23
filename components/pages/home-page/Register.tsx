import React from "react";

const Register = () => {
  return (
    <section className="w-screen relative z-20 py-32 bg-black">
      <div className="container flex md:flex-row flex-col  justify-between md:items-center">
        <h2 className="text-white xl:w-2/4 font-coolvetica text-section uppercase">
          let’s experience Tennis together
        </h2>
        <div className="flex flex-col gap-3">
          <p className="text-white/60">Stay up to date</p>
          <div className="flex">
            <input
              className="rounded-full w-[300px] px-6 p-3 border-highlight-green border-2 bg-transparent placeholder:text-white/60"
              placeholder="Your email"
            ></input>
            <button className="ml-3 px-6 py-3 uppercase bg-highlight-green rounded-full">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
