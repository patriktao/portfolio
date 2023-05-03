import React from "react";

type Props = {
  date?: String;
  title?: String;
  text?: String;
};

const Timepoint = ({ date, title, text }: Props) => {
  return (
    <li>
      <div className="flex-start flex items-center pt-2 md:block md:pt-0">
        <div className="-ml-[5px] mr-3 h-[9px] w-[9px] rounded-full bg-neutral-300 dark:bg-neutral-500 md:-mt-[5px] md:ml-0 md:mr-0"></div>
        <p className="mt-2 text-sm text-neutral-500 dark:text-neutral-300">
          {date}
        </p>
      </div>
      <div className="ml-4 mt-2 pb-5 md:ml-0">
        <h4 className="mb-1.5 text-xl font-semibold">{title}</h4>
        <p className="mb-3 text-neutral-500 dark:text-neutral-300">{text}</p>
      </div>
    </li>
  );
};

export default Timepoint;
