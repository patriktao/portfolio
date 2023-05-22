import React from "react";

interface Props {
  date?: string;
  header?: JSX.Element;
  headerIcon?: JSX.Element;
  subheader?: string;
  icons?: JSX.Element;
  image?: JSX.Element;
  direction?: "left" | "right";
}

const PortfolioItem = ({
  date,
  header,
  subheader,
  icons,
  image,
  headerIcon,
  direction,
}: Props) => {
  const content = (
    <div className="grid-span-1">
      <p className="mb-1 text-neutral-500 dark:text-neutral-300">{date}</p>
      <div className="flex items-center mb-4 gap-x-2">
        <h2 className="text-3xl font-bold dark:text-white text-gray-700">
          {header}
        </h2>
        {headerIcon}
      </div>
      <p className="text-lg mb-10 dark:text-gray-300 font-normal text-gray-800">{subheader}</p>
      {icons}
    </div>
  );

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-x-24 items-center">
      {direction === "left" ? (
        <>
          {image}
          {content}
        </>
      ) : (
        <>
          {content}
          {image}
        </>
      )}
    </div>
  );
};

export default PortfolioItem;
