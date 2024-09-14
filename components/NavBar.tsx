import React, { useContext, useEffect, useState } from "react";
import getConfig from "next/config";
import useScrollspy from "@/hooks/useScrollspy";
import { Fade } from "react-awesome-reveal";
import { replaceState } from "history-throttled";
import { ThemeContext } from "@/contexts/ThemeContext";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const ids = [
  "home",
  "about",
  "skills",
  "experience",
  "extracurricular",
  "portfolio",
];

const menuItemClass = `block text-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:hover:bg-gradient-to-r from-green-400 to-[--color-theme] md:hover:bg-clip-text md:hover:text-transparent hover:scale-110 ease-out duration-100`;
const selectedMenuItemClass = `block md:border-0 md:p-0 bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent`;

const NavItem = ({ name, className }: { name: string; className?: string }) => (
  <li>
    <a href={`#${name.toLowerCase()}`} className={className}>
      {name}
    </a>
  </li>
);

const capitalize = (str: string) => str.charAt(0).toUpperCase() + str.slice(1);

const NavBar = () => {
  const { getTheme, setTheme } = useContext(ThemeContext);
  const { publicRuntimeConfig } = getConfig();
  const pdfPath = publicRuntimeConfig.PDF_PATH;

  const activeId = useScrollspy(ids, 300);

  useEffect(() => {
    const currentTheme =
      localStorage.theme ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light");
    document.documentElement.classList.toggle("dark", currentTheme === "dark");
    setTheme(currentTheme);
  }, [setTheme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      replaceState("Updated", activeId, `#${activeId}`);
    }
  }, [activeId]);

  const themeSwitch = () => {
    const newTheme = document.documentElement.classList.contains("dark")
      ? "light"
      : "dark";
    document.documentElement.classList.toggle("dark", newTheme === "dark");
    localStorage.setItem("theme", newTheme);
    setTheme(newTheme);
  };

  return (
    <nav className="fixed top-2 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 backdrop-blur-[12px] bg-white/50 dark:bg-gray-700/50 rounded-3xl shadow-sm border border-gray-100/20">
        <div className="flex w-full justify-between items-center h-14">
          <a href="#home">
            <span className="text-xl font-semibold whitespace-nowrap dark:text-white text-gray-700 hover:bg-gradient-to-r hover:from-green-400 hover:to-[--color-theme] hover:bg-clip-text hover:text-transparent hover:scale-110 ease-out duration-100">
              Patrik Tao
            </span>
          </a>

          <div className="hidden lg:flex">
            <ul className="flex flex-row space-x-6 text-md items-center">
              {ids.map((id) => (
                <NavItem
                  name={capitalize(id)}
                  key={id}
                  className={
                    id === activeId ? selectedMenuItemClass : menuItemClass
                  }
                />
              ))}
              <li>
                <a href={pdfPath} target="_blank" rel="noopener noreferrer">
                  <button className="text-md bg-gradient-to-r hover:scale-95 ease-out duration-100 from-green-400 to-[--color-theme] py-1 px-3 rounded-xl inline-flex items-center">
                    <svg
                      className="fill-current w-3 h-3 mr-2"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path d="M13 8V2H7v6H2l8 8 8-8h-5zM0 18h20v2H0v-2z" />
                    </svg>
                    <span>Resume</span>
                  </button>
                </a>
              </li>
            </ul>
          </div>
          <div className="flex gap-4">
            <a
              href={pdfPath}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center lg:hidden text-black hover:underline dark:text-white"
            >
              Get Resume
            </a>

            {/* Theme switcher, hidden on mobile */}
            <label className="relative flex items-center cursor-pointer ">
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
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
