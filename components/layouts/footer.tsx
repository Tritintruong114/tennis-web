import Link from "next/link";
import React from "react";
import { footer } from "@/data/mock.json";
import cx from "classnames";
import Section from "./section";
import Button from "../elements/button";
import Input from "../elements/input";
import NewLetter from "../elements/newletter";

const Footer = () => {
  return (
    <Section>
      <div className="container">
        <div className="flex justify-between w-full sm:flex-row flex-col">
          <div>
            <h3 className="text-sub-title font-coolvetica uppercase mb-3">
              elysian Tennis Camps
            </h3>
            <p className="font-satoshi text-label w-3/4">
              From coast to coast: Uncover our 4 tennis camp locations.
            </p>
          </div>
          <div>
            <ul
              className={cx(
                "flex top-0 gap-6 right-0  bg-white duration-150 w-full"
              )}
            >
              {footer.menuItems.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center group py-6 justify-center tracking-tighter relative text-sub-title"
                >
                  <Link
                    className="font-coolvetica uppercase tracking-wider"
                    href={item.url}
                  >
                    {item.label}
                  </Link>
                  <div className="bg-highlight-green h-[.1rem] left-0 absolute group-hover:w-full w-0 duration-300 p-0"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex justify-between w-full sm:flex-row flex-col">
          <div>
            <h3 className="text-section font-coolvetica uppercase mb-3">
              elysian Tennis Camps
            </h3>
            <p className="font-satoshi text-label w-3/4">
              From coast to coast: Uncover our 4 tennis camp locations.
            </p>
          </div>
          <NewLetter />
        </div>
        <div className="pt-6 border-t mt-6">
          <p>© 2024 Elysian Tennis. All rights reserved.</p>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
