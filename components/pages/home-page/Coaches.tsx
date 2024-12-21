import Image from "next/image";
import React from "react";

const Coaches = () => {
  return (
    <section className="py-24">
      <div className="container">
        <div className="flex flex-col xl:flex-row mb-12 justify-between items-center">
          <h2 className="text-features font-coolvetica">
            Meet the Coaches Behind elysian
          </h2>
          <button className="ml-3 px-6 py-3 uppercase bg-highlight-green rounded-full">
            Explore Academy
          </button>
        </div>
        <div className="grid sm:grid-cols-2 gap-24">
          <div className="">
            <div className="relative h-[450px] shadow-2xl mb-12 rounded-3xl overflow-hidden">
              <Image
                src="/images/coaches.jpeg"
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col gap-3">
              <p>Los Angeles, CA</p>
              <h3 className="text-title font-coolvetica">Bruno Truong</h3>
              <p className="font-satoshi font-light">
                With 18 years of coaching under her belt, Sarah is known for her
                ability to develop young talent, guiding players to reach their
                full potential on the court.
              </p>
              <button className="px-6 py-3 w-fit uppercase bg-highlight-green rounded-full">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Coaches;
