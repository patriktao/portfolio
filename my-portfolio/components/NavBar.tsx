import React, { useEffect, useState } from "react";
import getConfig from "next/config";
import { AiOutlineMenu } from "react-icons/ai";
import useScrollspy from "@/hooks/useScrollspy";
import { Fade } from "react-awesome-reveal";

const NavBar = () => {
  const ids = [
    "home",
    "about",
    "skills",
    "experience",
    "extracurricular",
    "portfolio",
  ];

  const activeId = useScrollspy(ids, 300);

  if (typeof window !== "undefined") {
    window.history.replaceState("Updated", activeId, `#${activeId}`);
  }

  return (
    <div className="fixed top-0 px-2 pt-4 md:pt-14 nav-font z-40">
      <Fade delay={500} triggerOnce>
        <nav className="bg-transparent border-gray-200 dark:bg-transparent">
          <div className="max-w-screen-xl flex justify-between mx-auto">
            <span className="lg:pl-12 self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-gray-700">
              Patrik Tao
            </span>
            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 ml-3 text-lg text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <AiOutlineMenu />
            </button>
          </div>
        </nav>
      </Fade>
    </div>
  );
};

export default NavBar;
