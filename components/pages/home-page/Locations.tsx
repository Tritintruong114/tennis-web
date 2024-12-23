import Image from "next/image";
import React from "react";
import { locations } from "@/data/mock.json";

const Locations = () => {
  return (
    <section className="py-32 relative">
      <Image
        src="/images/locations.jpg"
        alt=""
        fill
        className="object-cover blur object-top"
      />
      <div className="container relative">
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="flex flex-col gap-3">
            <h2 className="text-section font-coolvetica text-white">
              Our Locations
            </h2>
            <p className="text-white font-satoshi">
              Ready to take your tennis game to the next level? Experience
              world-class coaching, state-of-the-art facilities, and a vibrant
              tennis community. Enroll today and become part of a legacy of
              excellence.
            </p>
            <button className="ml-3 w-fit px-6 py-3 uppercase bg-highlight-green rounded-full">
              Explore Academy
            </button>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {locations.map((item, index) => {
              return (
                <div className="flex flex-col gap-3 text-white" key={index}>
                  <div className="relative sm:h-[120px] h-[150px] shadow-2xl rounded-3xl overflow-hidden">
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      className="object-cover"
                    />
                  </div>
                  <h3 className="text-sub-title font-coolvetica font-bold tracking-wide">
                    {item.name}
                  </h3>
                  <p>{item.address}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      ;
    </section>
  );
};

export default Locations;
