import React from "react";
import PortfolioItem from "./PortfolioItem";
import portfolio from "../images/portfolio.png";
import memberflow from "../images/memberflow.png";
import acclab_login from "../images/acclab_login.png";
import acclab_dash from "../images/acclab_dash.png";
import acclab_inventory from "../images/acclab_inventory.png";
import ProjectImage from "./ProjectImage";
import { FaGithubSquare } from "react-icons/fa";
import { BsCodeSquare, BsDatabaseFill } from "react-icons/bs";
import Link from "next/link";
import { Fade } from "react-awesome-reveal";
import ImageSlide2 from "./ImageSlide/ImageSlide2";
import Card from "./Card";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <section
      id="portfolio"
      className="flex h-screen items-center overflow-hidden p-0 m-0 justify-center flex-col"
    >
        <h1 className="font-bold text-5xl md:text-7xl  text-left lg:text-center mb-12 bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent">
          Portfolio
        </h1>
        <ol id="cards">
          <Card />
        </ol>
      {/* <Fade delay={250} duration={2000} triggerOnce>
      </Fade> */}
    </section>
  );
};

const old = (
  <ol className="relative border-l border-neutral-300 dark:border-neutral-500 flex flex-col ">
    <PortfolioItem
      date="May 2022 - Current"
      title="Portfolio"
      icon={
        <Link href="https://github.com/patriktao/portfolio" target="_blank">
          <FaGithubSquare />
        </Link>
      }
      text={
        "Designed and built my own portfolio website using Next.Js, Typescript, and Tailwind CSS"
      }
      images={<ProjectImage src={portfolio} title="portfolio" />}
    />
    <PortfolioItem
      date="Aug 2022 - Current"
      title="Memberflow"
      subtitle="East Asia Student Association"
      icon={
        <Link
          href="https://github.com/patriktao/Next-MemberFlow/tree/development"
          target="_blank"
        >
          <FaGithubSquare />
        </Link>
      }
      text={
        " Developing cross-platform mobile and web applications to address current challenges for student organizations, providing a digital solution for student membership cards and streamlining membership management."
      }
      images={<ProjectImage src={memberflow} title="portfolio" />}
    />
    <PortfolioItem
      date="Aug 2021 - May 2022"
      title="Logistics Management Application"
      subtitle="Tetra Pak"
      icon={
        <div className="flex gap-0.5">
          <Link
            href="https://github.com/patriktao/acclab-frontend"
            target="_blank"
          >
            <BsCodeSquare />
          </Link>
          <Link
            href="https://github.com/patriktao/acclab-backend"
            target="_blank"
          >
            <BsDatabaseFill />
          </Link>
        </div>
      }
      text={`Developed a logistics management system to automate and enhance
  data storage, accessibility, visualization, and modification of
  recipes for food & beverage prototypes, used internally by food
  technologists.`}
      images={
        <ImageSlide2 />
        /* <div
      id="image-track"
      data-mouse-down-at="0"
      data-prev-percentage="0"
    >
      <Image
        className="image"
        alt="login"
        src={acclab_login}
        draggable="false"
      />
      <Image
        className="image"
        alt="dash"
        src={acclab_dash}
        draggable="false"
      />
      <Image
        className="image"
        alt="inv"
        src={acclab_inventory}
        draggable="false"
      />
    </div> */
      }
    ></PortfolioItem>
  </ol>
);

export default Portfolio;
