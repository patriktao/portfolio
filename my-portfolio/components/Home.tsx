import Link from "next/link";
import React, { ReactNode, useEffect } from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";
import profile from "../images/profile.png";
import Image from "next/image";
import getConfig from "next/config";
import { Fade } from "react-awesome-reveal";

type Props = {};

interface Icon {
  children: any;
  className?: string;
}

const { publicRuntimeConfig } = getConfig();

const pdfPath = publicRuntimeConfig.PDF_PATH;

const ClickableIcon = ({ children, className }: Icon) => {
  return (
    <div className="rounded-full text-2xl shadow-none dark:shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-110 ease-in duration-100 bg-gray-800 dark:bg-white hover:bg-gradient-to-r hover:from-green-400 hover:to-[--color-theme] shadow-lg">
      {children}
    </div>
  );
};

const icons = (
  <div className="flex gap-8 max-w-[330px] py-6">
    <a
      href="https://www.linkedin.com/in/patriktao/"
      target="_blank"
      rel="noreferrer"
    >
      <ClickableIcon>
        <FaLinkedinIn className="text-white dark:text-black" />
      </ClickableIcon>
    </a>
    <a href="https://github.com/patriktao" target="_blank" rel="noreferrer">
      <ClickableIcon>
        <FaGithub className="text-white dark:text-black" />
      </ClickableIcon>
    </a>
    <Link
      href="#"
      onClick={(e) => {
        window.location.href = "mailto:patriktao@gmail.com";
        e.preventDefault();
      }}
    >
      <ClickableIcon>
        <AiOutlineMail className="text-white dark:text-black" />
      </ClickableIcon>
    </Link>
    <Link href={pdfPath} target="_blank">
      <ClickableIcon>
        <BsFillPersonLinesFill className="text-white dark:text-black" />
      </ClickableIcon>
    </Link>
  </div>
);

const GetInTouchButton = (
  <Link
    href="#"
    onClick={(e) => {
      window.location.href = "mailto:patriktao@gmail.com";
      e.preventDefault();
    }}
  >
    <button className="mt-4 rounded-full px-4 py-2 bg-gradient-to-r from-green-400 to-[--color-theme] bg-gradient-to-r from-green-400 to-[--color-theme] hover:scale-90 ease-out duration-100 hover:opacity-90 text-white shadow-md">
      Get in Touch
    </button>
  </Link>
);

const InfoSection = (
  <Fade delay={1000} cascade damping={0.1} duration={1500} triggerOnce>
    <p className="uppercase text-sm tracking-widest mb-4 font-regular">
      Let&#39;s build something{" "}
      <span className="bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent">
        together.
      </span>{" "}
    </p>
    <p className="text-left font-bold text-6xl md:text-7xl text-gray-800 dark:text-white mb-3">
      Hi. I&#39;m{" "}
      <span className="bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent">
        Patrik.
      </span>
    </p>
    <p className="text-left font-bold text-6xl text-gray-800 dark:text-white mb-3">
      Nice to meet you.
    </p>
    <p className="font-regular text-lg text-gray-800 sm:max-w-[75%] dark:text-gray-300 text-left">
      I’m focused on building user-friendly front-end applications and scalable
      back-end software. I am a fourth year Computer Science student at Lund
      University in Sweden.
    </p>

    {GetInTouchButton}
    {icons}
  </Fade>
);

const ImageSection = (
  <Fade delay={1500} duration={1000} triggerOnce>
    <Image
      data-tooltip-target="tooltip-default"
      src={profile}
      alt="profile"
      className="rounded-lg hover:scale-105 duration-200 ease-in shadow-xl"
    />
  </Fade>
);

const Home = (props: Props) => {
  return (
    <section
      id="home"
      title="home-section"
      className="grid h-screen mb-32 mt-[5rem] md:mt-0"
    >
      <div
        title="container"
        className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-10 max-w-5xl items-center gap-y-8 gap-x-4"
      >
        <div title="info-section" className="md:col-span-4 lg:col-span-7">
          {InfoSection}
        </div>
        <div
          title="image-section"
          className="md:col-span-2 lg:col-span-3 lg:w-[100%] sm:w-[55%]"
        >
          {ImageSection}
        </div>
      </div>
    </section>
  );
};

export default Home;