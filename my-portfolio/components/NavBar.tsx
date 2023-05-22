import React, { useContext, useEffect, useState } from "react";
import getConfig from "next/config";
import useScrollspy from "@/hooks/useScrollspy";
import { Fade } from "react-awesome-reveal";
import { replaceState } from "history-throttled";
import { ThemeContext } from "@/contexts/ThemeContext";
import {
  BsMoon,
  BsMoonFill,
  BsMoonStarsFill,
  BsStars,
  BsSunFill,
  BsSunriseFill,
} from "react-icons/bs";

const NavBar = () => {
  const ids = [
    "home",
    "about",
    "skills",
    "experience",
    "extracurricular",
    "portfolio",
  ];

  const { getTheme, setTheme } = useContext(ThemeContext);
  const { publicRuntimeConfig } = getConfig();
  const pdfPath = publicRuntimeConfig.PDF_PATH;

  const activeId = useScrollspy(ids, 300);

  if (typeof window !== "undefined") {
    replaceState("Updated", activeId, `#${activeId}`);
  }

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
    /* 
    const respectSystemTheme = () => {
      // Whenever the user explicitly chooses to respect the OS preference
      localStorage.removeItem("theme");
    }; */
  }, [setTheme]);

  const themeSwitch = () => {
    if (document.documentElement.classList.contains("dark")) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
      setTheme("light");
      return;
    }
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    setTheme("dark");
  };

  return (
    <div className="fixed top-0 px-2 pt-4 md:pt-14 nav-font z-40 w-full">
      <Fade delay={500} triggerOnce>
        <nav className="bg-transparent border-gray-200 dark:bg-transparent">
          <div className="max-w-screen flex justify-between items-center">
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

            <label className="relative flex items-center cursor-pointer hidden md:block mr-[6%]">
              <input
                type="checkbox"
                value=""
                className="sr-only peer"
                checked={getTheme() === "light" ? false : true}
                onChange={themeSwitch}
              />
              <div className="w-[64px] h-[33px] bg-teal-100 rounded-full peer peer-focus:ring-4 peer-focus:ring-teal-300 dark:peer-focus:ring-gray-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-teal-400 after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-teal-400  after:border-teal-400 after:border after:rounded-full after:h-7 after:w-7 after:transition-all dark:border-gray-600 peer-checked:bg-teal-900 z-10">
                <div className="grid grid-cols-2 h-8">
                  <BsMoonStarsFill
                    className="relative left-[38px] top-[8px] z-20 col-span-1"
                    visibility={getTheme() === "light" ? "hidden" : "block"}
                  />
                  <BsSunFill
                    className="col-span-1 relative right-[22px] top-[8px] z-20"
                    visibility={getTheme() === "light" ? "block" : "hidden"}
                  />
                </div>
              </div>
              {/*               <span className="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {getTheme() === "light" ? "Light Mode" : "Dark Mode"}
              </span> */}
            </label>
          </div>
        </nav>
      </Fade>
    </div>
  );
};

export default NavBar;
