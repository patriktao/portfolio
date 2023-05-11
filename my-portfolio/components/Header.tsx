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
    <div className="rounded-full text-2xl shadow-none dark:shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-gray-900 dark:bg-white">
      {children}
    </div>
  );
};

const Header = (props: Props) => {
  const { publicRuntimeConfig } = getConfig();

  const pdfPath = publicRuntimeConfig.PDF_PATH;

  return (
    <section id="home" className="h-screen md:m-0">
      <div className="max-w-[1240px] mx-auto p-2 flex flex-wrap md:flex-nowrap items-center justify-center mt-4 lg:mt-0 gap-8 lg:gap-0">
        <div id="header-text" className="grid mx-auto justify-items-center">
          <Fade delay={1000} cascade damping={0.1} duration={3000} triggerOnce>
            <div className="uppercase text-sm tracking-widest mb-4">
              Let&#39;s{" "}
              <span className="bg-gradient-to-r from-green-300 to-[--color-theme] bg-clip-text text-transparent">
                build
              </span>{" "}
              something together.
            </div>
            <div className="text-center font-extrabold text-5xl md:text-7xl text-gray-700 dark:text-white px-6 mb-3">
              <span>
                Hi, I&#39;m{" "}
                <span className="bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent">
                  Patrik.
                </span>
              </span>
              <p>Nice to Meet You.</p>
            </div>
            <div className="grid justify-items-center">
              <p className="text-lg text-gray-700 sm:max-w-[70%] dark:text-gray-300 text-center">
                I’m focused on building user-friendly front-end applications and
                scalable back-end software. I am a fourth year Computer Science
                student at Lund University in Sweden 📍
              </p>
            </div>
            <div className="flex items-center justify-between max-w-[330px] py-8 gap-8">
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
          </Fade>
        </div>
        <Fade delay={2000} duration={2000} triggerOnce>
          <Image
            data-tooltip-target="tooltip-default"
            src={profile}
            alt="profile"
            className="rounded-lg lg:h-46 lg:w-96 w-60 hover:scale-105 ease-out duration-100"
          />
        </Fade>
      </div>
    </section>
  );
};

export default Header;
