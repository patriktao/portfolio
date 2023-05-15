import React, { useEffect } from "react";
import { BsCodeSlash } from "react-icons/bs";

interface Props {
  header?: String;
  icon?: JSX.Element;
  text?: JSX.Element;
}

const Card = (props: Props) => {
  const handleOnMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { currentTarget: target } = e;

    const rect = target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
  };

  useEffect(() => {
    const attachMouseMoveEvent = () => {
      const cards = document.querySelectorAll<HTMLDivElement>(".card");
      cards.forEach((card) => {
        card.addEventListener("mousemove", handleOnMouseMove);
      });
    };

    attachMouseMoveEvent();
    return () => {
      const cards = document.querySelectorAll<HTMLDivElement>(".card");
      cards.forEach((card) => {
        card.removeEventListener("mousemove", handleOnMouseMove);
      });
    };
  }, []);

  return <div className="card"></div>;
};

export default Card;
