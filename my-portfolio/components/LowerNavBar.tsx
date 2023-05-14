import useScrollspy from "@/hooks/useScrollspy";
import getConfig from "next/config";
import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";

type Props = {};

const ids = [
  "home",
  "about",
  "skills",
  "experience",
  "extracurricular",
  "portfolio",
];

const NavItem = ({ name, className }: { name: string; className?: string }) => {
  return (
    <li key={`menu-item-${name}`}>
      <a href={`#${name.toLowerCase()}`} className={className}>
        {name}
      </a>
    </li>
  );
};

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const menuItemClass = `font-medium block py-2 pl-3 pr-4 text-gray-700 rounded md:hover:bg-transparent md:border-0 md:p-0 dark:text-white md:hover:bg-gradient-to-r from-green-400 to-[--color-theme] md:hover:bg-clip-text md:hover:text-transparent hover:scale-110 ease-out duration-100`;

const selectedMenuItemClass = `font-medium block py-2 pl-3 pr-4 md:border-0 md:p-0 bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent `;

const LowerNavBar = (props: Props) => {
  const activeId = useScrollspy(ids, 300);
  const { publicRuntimeConfig } = getConfig();
  const pdfPath = publicRuntimeConfig.PDF_PATH;

  if (typeof window !== "undefined") {
    window.history.pushState("Updated", activeId, `#${activeId}`);
  }

  return (
    <div className="fixed bottom-0 right-0 h-screen w-1/4 mr-[6%] mb-[6%] md:p-0 mt-4 justify-end items-end flex-col hidden md:flex">
      <ul className="text-xl">
        {ids.map((id) => (
          <NavItem
            name={capitalize(id)}
            key={`menu-item-${id}`}
            className={id === activeId ? selectedMenuItemClass : menuItemClass}
          />
        ))}
        <li>
          <a href={pdfPath} target="_blank" className={menuItemClass}>
              <p>&#62; Get Resume</p>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default LowerNavBar;
