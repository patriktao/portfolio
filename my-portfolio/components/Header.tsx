import Link from "next/link";
import React, { ReactNode } from "react";
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

const ClickableIcon = ({ children, className }: Icon) => {
  return (
    <div className="rounded-full shadow-none dark:shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300 bg-gray-900 dark:bg-white">
      {children}
    </div>
  );
};

const Header = (props: Props) => {
  const { publicRuntimeConfig } = getConfig();

  const pdfPath = publicRuntimeConfig.PDF_PATH;

  return (
    <section id="home" className="h-screen md:m-0">
      <Fade delay={1000} duration={2000} triggerOnce>
        <div className="max-w-[1240px] mx-auto p-2 flex flex-wrap md:flex-nowrap items-center justify-center mt-4 lg:mt-0 gap-8 lg:gap-0">
          <div id="header-text" className="grid mx-auto justify-items-center">
            <p className="uppercase text-sm tracking-widest">
              Let&#39;s{" "}
              <span className="bg-gradient-to-r from-green-300 to-[--color-theme] bg-clip-text text-transparent">
                build
              </span>{" "}
              something together.
            </p>
            <div className="font-extrabold text-5xl md:text-7xl text-gray-700 dark:text-white px-6">
              <h1 className="py-4 text-center">
                Hi, I&#39;m{" "}
                <span className="bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent">
                  Patrik.
                </span>
                <br />
                Nice to Meet You.
              </h1>
            </div>
            <p className="text-lg text-gray-700 sm:max-w-[70%] dark:text-gray-300 text-center">
              I’m focused on building user-friendly front-end applications and
              scalable back-end software. I am a fourth year Computer Science
              student at Lund University in Sweden 📍
            </p>
            <div className="flex items-center justify-between max-w-[330px] py-8 text-2xl gap-8">
              <a
                href="https://www.linkedin.com/in/patriktao/"
                target="_blank"
                rel="noreferrer"
              >
                <ClickableIcon>
                  <FaLinkedinIn className="text-white dark:text-black" />
                </ClickableIcon>
              </a>
              <a
                href="https://github.com/patriktao"
                target="_blank"
                rel="noreferrer"
              >
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
          </div>
          <div id="header-img">
            <Image
              data-tooltip-target="tooltip-default"
              src={profile}
              alt="profile"
              className="rounded-lg object-scale-down lg:h-46 lg:w-96 w-60"
            />
            <div
              id="tooltip-default"
              role="tooltip"
              className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
            >
              Tooltip content
              <div className="tooltip-arrow" data-popper-arrow></div>
            </div>
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Header;
