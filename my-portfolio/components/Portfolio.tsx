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

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <div
      id="portfolio"
      className="w-full min-h-screen snap-start py-12 overflow-x-hidden items-center"
    >
      <h1 className="font-bold text-5xl md:text-6xl  text-left lg:text-center mb-12 bg-gradient-to-r from-[--color-theme] to-green-400 bg-clip-text text-transparent">
        My Portfolio
      </h1>
      <ol className="relative border-l border-[--color-theme] flex flex-col ">
        <PortfolioItem
          date="May 2022 - Current"
          title="My Portfolio"
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
          title="memberflow."
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
          title="Logistics Management System"
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
            <div className="flex gap-4 md:flex-wrap">
              <ProjectImage src={acclab_login} title="acclab_login" />
              <ProjectImage src={acclab_dash} title="acclab_dash" />
              <ProjectImage src={acclab_inventory} title="acclab_inventory" />
            </div>
          }
        ></PortfolioItem>
      </ol>
    </div>
  );
};

export default Portfolio;
