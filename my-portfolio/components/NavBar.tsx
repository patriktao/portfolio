import Link from "next/link";
import React, { useEffect, useState } from "react";
import getConfig from "next/config";
import { FaDownload } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
import useScrollspy from "@/hooks/useScrollspy";
import { Fade } from "react-awesome-reveal";

type Props = {};

interface NavItem {
  name: string;
  className: string;
}

const NavItem = ({ name, className }: NavItem) => {
  return (
    <li key={`menu-item-${name}`}>
      <a href={`#${name.toLowerCase()}`} className={className}>
        {name}
      </a>
    </li>
  );
};

/* @capitalize the ids */
function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const menuItemClass = `block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:hover:bg-gradient-to-r from-green-400 to-[--color-theme] md:hover:bg-clip-text md:hover:text-transparent`;

const selectedMenuItemClass = `block py-2 pl-3 pr-4 md:border-0 md:p-0 bg-gradient-to-r from-green-300 to-[--color-theme] bg-clip-text text-transparent `;

const NavBar = (props: Props) => {
  const { publicRuntimeConfig } = getConfig();
  const pdfPath = publicRuntimeConfig.PDF_PATH;

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
    <div className="sticky top-0 px-6 pt-4 md:pt-14 nav-font z-40">
      <Fade delay={500} triggerOnce>
        <nav className="bg-transparent border-gray-200 dark:bg-transparent">
          <div className="max-w-screen-xl flex flex-wrap items-center mx-auto gap-6 justify-between">
            <a href="#home" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white text-gray-700">
                Patrik Tao
              </span>
            </a>
            <div className="hidden w-full lg:block lg:w-auto">
              <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-800 md:dark:bg-transparent dark:border-gray-700">
                {ids.map((id) => (
                  <NavItem
                    name={capitalize(id)}
                    key={`menu-item-${id}`}
                    className={
                      id === activeId ? selectedMenuItemClass : menuItemClass
                    }
                  />
                ))}
              </ul>
            </div>
            <div className="flex md:gap-4 ">
              <Link
                href={pdfPath}
                target="_blank"
                className="text-white font-bold py-1 px-3 rounded flex items-center gap-2 bg-gradient-to-r to-[--color-theme] from-green-300 cursor-pointer hover:scale-95 hover:opacity-80 ease-out duration-100"
              >
                <FaDownload />
                CV
              </Link>
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
          </div>
        </nav>
      </Fade>
    </div>
  );
};

export default NavBar;
