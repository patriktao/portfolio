import Link from "next/link";
import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGithub, FaGithubSquare } from "react-icons/fa";

interface Props {
  date?: String;
  title?: String;
  subtitle?: String;
  icon?: JSX.Element;
  text?: String;
  images?: JSX.Element;
}

const PortfolioItem = ({
  date,
  title,
  icon,
  subtitle,
  text,
  images,
}: Props) => {
  return (
    <li className="mb-10 ml-4">
      <div className="absolute w-3 h-3 rounded-full mt-1.5 -left-1.5 border border-neutral-300 dark:border-neutral-500 bg-neutral-300 dark:bg-neutral-500" />
      <time className="text-sm font-normal leading-none text-[--color-hover] dark:text-[--color-theme]">
        {date}
      </time>
      <div className="mt-1 mb-1.5">
        <div className="flex gap-2">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white">
            {title}
          </h3>
          <div className="text-3xl">{icon}</div>
        </div>
        <p className="mb-1 text-base font-normal text-gray-500 dark:text-gray-400">
          {subtitle}
        </p>
      </div>
      <div>
        <p className="mb-3 text-neutral-500 dark:text-neutral-300">{text}</p>
        {images}
      </div>
    </li>
  );
};

export default PortfolioItem;
