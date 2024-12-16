import React from "react";
import { header } from "@/data/header.json";
import Link from "next/link";
const Header = () => {
  return (
    <nav className="w-screen flex items-center justify-center py-6 border-b">
      <ul className="flex w-full justify-between max-w-3xl items-center">
        {header.menuItems.map((item, index) => (
          <li
            key={index}
            className="flex items-center group justify-center tracking-tighter relative"
          >
            <Link className="font-coolvetica" href={item.url}>
              {item.label}
            </Link>
            <div className="bg-[#ceff65] h-[.1rem] left-0 absolute group-hover:w-full w-0 duration-300 p-0"></div>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
