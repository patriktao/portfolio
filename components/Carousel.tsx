import Image from "next/image";
import React from "react";

import acclab_dash from "../images/acclab_dash.png";
import acclab_inventory from "../images/acclab_inventory.png";
import acclab_login from "../images/acclab_login.png";
import MacBook from "./MacBook/MacBook";

const images = [acclab_dash, acclab_inventory, acclab_login];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return <MacBook image={<Image src={acclab_dash} alt="..." />} />;
};

export default Carousel;
