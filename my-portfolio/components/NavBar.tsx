import React, { useEffect, useState } from "react";
import getConfig from "next/config";
import { AiOutlineMenu } from "react-icons/ai";
import useScrollspy from "@/hooks/useScrollspy";
import { Fade } from "react-awesome-reveal";
import Link from "next/link";
import { pushState, replaceState } from "history-throttled";

const NavBar = () => {
  const ids = [
    "home",
    "about",
    "skills",
    "experience",
    "extracurricular",
    "portfolio",
  ];

  const { publicRuntimeConfig } = getConfig();
  const pdfPath = publicRuntimeConfig.PDF_PATH;

  const activeId = useScrollspy(ids, 300);

  if (typeof window !== "undefined") {
    replaceState("Updated", activeId, `#${activeId}`);
  }

  return (
    <div className="fixed top-0 px-2 pt-4 md:pt-14 nav-font z-40 w-full">
      <Fade delay={500} triggerOnce>
        <nav className="bg-transparent border-gray-200 dark:bg-transparent">
          <div className="max-w-screen-xl flex justify-between items-center">
            <a href={"#home"}>
              <span className="lg:pl-10 text-2xl font-semibold whitespace-nowrap dark:text-white text-gray-700 hover:bg-gradient-to-r hover:from-green-400 hover:to-[--color-theme] hover:bg-clip-text hover:text-transparent">
                &#62; Patrik Tao
              </span>
            </a>
            <a
              href={pdfPath}
              target="_blank"
              className={
                "md:hidden rounded-full px-2 py-2 bg-gradient-to-r from-green-400 to-[--color-theme] bg-gradient-to-r from-green-400 to-[--color-theme] hover:scale-90 ease-out duration-100 hover:opacity-90 text-white shadow-md mr-14"
              }
            >
              Get Resume
            </a>
          </div>
        </nav>
      </Fade>
    </div>
  );
};

export default NavBar;
