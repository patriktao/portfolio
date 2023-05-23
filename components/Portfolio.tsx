import React from "react";
import Image from "next/image";
import personalWebsite from "../images/personalWebsite.png";
import memberflow from "../images/memberflow.png";
import ecofinder3 from "../images/ecofinder3.png";
import acclab from "../images/acclab.png";
import Link from "next/link";
import { FaFigma, FaGithub, FaLeaf } from "react-icons/fa";
import Icons from "./icons/Icons";
import PortfolioItem from "./PortfolioItem";
import illustration2 from "../images/illustration2.png";
import voicy from "../images/voicy.png";
import { Fade } from "react-awesome-reveal";

type Props = {};

const Portfolio = (props: Props) => {
  return (
    <section
      id="portfolio"
      className="flex flex-col w-full md:items-center content-center"
    >
      <Fade triggerOnce>
        <p className="text-base text-lg font-medium leading-7 text-gray-700 dark:text-white mb-4">
          I have passion and curiosity for solutions that can make a sustainable
          difference.
        </p>
        <h1 className="font-bold text-5xl md:mb-24 mb-8 md:text-7xl text-left lg:text-center bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent">
          Featured Projects
        </h1>
      </Fade>
      <div
        title="wrapper"
        className="flex flex-wrap md:flex-nowrap md:flex-col lg:max-w-6xl gap-y-24"
      >
        <Fade duration={2000} triggerOnce>
          <PortfolioItem
            date="May 2023"
            header={<>Personal Website</>}
            subheader={`Designed and built my own fully-responsible website using Next.js,
              Typescript, and Tailwind CSS. Supports both dark and light mode,
              which aligns with your system's default setting.`}
            headerIcon={
              <Link
                href="https://github.com/patriktao/portfolio"
                target="_blank"
                className="rounded-full text-2xl shadow-none dark:shadow-lg shadow-gray-300 p-[5px] cursor-pointer hover:scale-110 ease-in duration-100 bg-gray-800 dark:bg-white hover:bg-gradient-to-r hover:from-green-400 hover:to-[--color-theme] shadow-lg"
              >
                <FaGithub className="text-white dark:text-black" />
              </Link>
            }
            icons={
              <div className="flex flex-row gap-x-4 h-8">
                <Icons.NextIcon />
                <Icons.TailwindIcon />
                <Icons.TsIcon />
              </div>
            }
            image={
              <Image
                src={personalWebsite}
                alt="personal-website"
                className="grid-span-1 hidden sm:block"
              />
            }
            direction="left"
          />
        </Fade>

        <Fade duration={2000} triggerOnce>
          <PortfolioItem
            date="East Asia Student Association, Aug 2022 - Present"
            header={<>Memberflow</>}
            headerIcon={
              <Link
                href="https://github.com/patriktao/Next-MemberFlow/tree/development"
                target="_blank"
                className="rounded-full text-2xl shadow-none dark:shadow-lg shadow-gray-300 p-[5px] cursor-pointer hover:scale-110 ease-in duration-100 bg-gray-800 dark:bg-white hover:bg-gradient-to-r hover:from-teal-500 hover:to-teal-300 shadow-lg"
              >
                <FaGithub className="text-white dark:text-black" />
              </Link>
            }
            subheader={`This cross-platform web- and mobile application addresses the
          current challenges of tracking memberships and member requests. We
          provide an efficient solution for buying, renewing, and cancelling
          digital student membership cards. We integrate payment methods
          such as Swipe and Swish.`}
            icons={
              <div className="flex flex-row gap-x-4 h-8">
                <Icons.NextIcon />
                <Icons.ReactIcon />
                <Icons.TsIcon />
                <Icons.FirebaseIcon />
                <Icons.StyledIcon />
              </div>
            }
            image={
              <Image
                src={memberflow}
                alt="memberflow"
                className="grid-span-1 hidden sm:block"
              />
            }
            direction="right"
          />
        </Fade>

        <Fade duration={2000} triggerOnce>
          <PortfolioItem
            date="Tetra Pak, Jun 2021 - May 2022"
            header={<>Accelerator Lab</>}
            subheader={` This app aims to enhance prototyping processes at Tetra Pak Food & Beverage labs and to keep track and visualize formulation and lab data catered for enterprise customers. The development included early system design sketches, technical architectures, prototypes, minimal viable product, software development, end-user testing, and deployment.`}
            icons={
              <div className="flex flex-row gap-x-4 h-8">
                <Icons.FigmaIcon />
                <Icons.ReactIcon />
                <Icons.SassIcon />
                <Icons.ExpressIcon />
                <Icons.NodeIcon />
                <Icons.PostgreIcon />
                <Icons.S3Icon />
                <Icons.DockerIcon />
                <Icons.HerokuIcon />
              </div>
            }
            image={
              <Image
                src={acclab}
                className="grid-span-1 hidden sm:block"
                alt={"acclab"}
              />
            }
            direction="left"
          />
        </Fade>

        <Fade duration={2000} triggerOnce>
          <PortfolioItem
            date="Oct 2021 - Jan 2021"
            header={<div>Voicy</div>}
            subheader={`In 8 weeks, we developed a product to battle the increased mental illnesses arising from lack of human social interaction during COVID-19. Many recent studies have highlighted the advantages that voice messages have over text messages. Consequently, we prototyped and developed a business model for Voicy, an mobile app dedicated to create meaningful exchanges through voice communication among friends. 
        `}
            icons={
              <div className="flex flex-row gap-x-4 h-8">
                <Icons.FigmaIcon />
              </div>
            }
            image={
              <Image
                src={voicy}
                alt="voicy"
                className="shadow-2xl rounded-2xl hidden sm:block"
              />
            }
            direction="right"
          />
        </Fade>

        <Fade duration={2000} triggerOnce>
          <PortfolioItem
            date="Apr 2021 - Nov 2021"
            header={<>ARKAD Digital App</>}
            subheader={`Collaborated with other students to develop a web application for the largest annual career fair for engineering students in Scandinavia, ARKAD. This app aimed to digitilize video and chat interactions between students and companies during COVID-19.`}
            icons={
              <div className="flex flex-row gap-x-4 h-8">
                <Icons.JSIcon />
                <Icons.ReactIcon />
                <Icons.SassIcon />
                <Icons.ReduxIcon />
                <Icons.PostgreIcon />
              </div>
            }
            direction="left"
            image={
              <Image
                src={illustration2}
                alt="arkad"
                className="rounded-2xl hidden sm:block"
              />
            }
          />
        </Fade>

        <Fade duration={2000} triggerOnce>
          <PortfolioItem
            date="Oct 2020 - Jan 2021"
            header={
              <div className="flex">
                EcoFinder
                <FaLeaf className="min-h-[1rem]" />
              </div>
            }
            headerIcon={
              <Link
                href="https://www.figma.com/proto/eFKz2QPZf7d0aSfBHcGGBV/EcoFinder?node-id=28-1874&scaling=scale-down&page-id=0%3A1&starting-point-node-id=28%3A1874"
                target="_blank"
                className="rounded-full text-2xl shadow-none dark:shadow-lg shadow-gray-300 p-[5px] cursor-pointer hover:scale-110 ease-in duration-100 bg-gray-800 dark:bg-white hover:bg-gradient-to-r hover:from-red-500 hover:to-red-300 shadow-lg"
              >
                <FaFigma className="text-white dark:text-black hidden sm:block" />
              </Link>
            }
            subheader={`This app was designed to help people buy the most environmentally friendly option in grocery stores in Sweden. We collect data from food listed on Swedish grocery stores and compare their eco-friendliness based on various metrics such as travel distance, organic, KRAV, EU Ecolabel, Fairtrade, and more. Gain bonus-points by buying the most environmental alternative and use them to unlock discounts.`}
            icons={
              <div className="flex flex-row gap-x-4 h-8">
                <Icons.FigmaIcon />
              </div>
            }
            image={
              <Image
                src={ecofinder3}
                alt="ecofinder"
                className="hidden sm:block rounded-2xl shadow-2xl"
              />
            }
            direction="right"
          />
        </Fade>
      </div>
    </section>
  );
};

export default Portfolio;
