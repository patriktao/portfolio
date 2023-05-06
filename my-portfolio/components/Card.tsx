import React from "react";
import { BsCodeSlash } from "react-icons/bs";

interface Props {
  header: String;
  icon?: JSX.Element;
  text?: JSX.Element;
}

const Card = (props: Props) => {
  return (
    <div className="min-w-full md:min-w-0 md:px-6 bg-transparent">
      <svg
        className="w-10 h-10 mb-2 text-gray-500 dark:text-gray-400"
        aria-hidden="true"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        {props.icon}
      </svg>
      <h5 className="mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
        {props.header}
      </h5>
      <div className="mb-3 font-normal text-gray-500 dark:text-gray-400">
        {props.text}
      </div>
    </div>
  );
};

export default Card;
