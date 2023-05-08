import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGithub, FaGithubSquare } from "react-icons/fa";

interface Props {
  date?: String;
  title?: String;
  icon?: JSX.Element;
  text?: String;
  images?: JSX.Element;
}

const PortfolioItem = ({ date, title, icon, link, text, images }: Props) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 bg-[--color-theme] rounded-full mt-1.5 -left-1.5 border border-[--color-theme] dark:bg-[--color-theme] dark:border-[--color-theme]"></div>
      <time className="text-sm font-normal leading-none text-[--color-hover] dark:text-[--color-theme]">
        {date}
      </time>
      <div className="flex mt-1 mb-1.5">
        <div className="text-3xl pr-2">{icon}</div>
        <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
          {title}
        </h3>
      </div>
      <div>
        <p className="mb-3 text-base font-normal text-gray-500 dark:text-gray-400">
          {text}
        </p>
        {images}
      </div>
    </li>
  );
};

export default PortfolioItem;
