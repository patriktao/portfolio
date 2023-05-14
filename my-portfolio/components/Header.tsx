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

const ClickableIcon = ({ children, className }: Icon) => {
  return (
    <div className="rounded-full text-2xl shadow-none dark:shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-110 ease-in duration-300 bg-gray-800 dark:bg-white hover:bg-gradient-to-r hover:from-green-400 hover:to-[--color-theme]">
      {children}
    </div>
  );
};

const Header = (props: Props) => {
  const { publicRuntimeConfig } = getConfig();

  const pdfPath = publicRuntimeConfig.PDF_PATH;

  return (
    <section id="home" className="h-screen md:m-0">
      <div className="max-w-[1240px] mx-auto p-2 flex flex-wrap md:flex-nowrap items-center justify-center lg:mt-0 gap-8 lg:gap-0">
        <div>
          <Fade delay={1000} cascade damping={0.2} duration={3000} triggerOnce>
            <p className="uppercase text-sm tracking-widest mb-4 font-semibold">
              Let&#39;s build something{" "}
              <span className="bg-gradient-to-r from-green-300 to-[--color-theme] bg-clip-text text-transparent">
                together.
              </span>{" "}
            </p>

            <p className="text-left font-extrabold text-7xl md:text-8xl text-gray-800 dark:text-white mb-3">
              Hi, I&#39;m{" "}
              <span className="bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent">
                Patrik.
              </span>
            </p>

            <p className="text-left font-extrabold text-7xl md:text-8xl text-gray-800 dark:text-white mb-3">
              Nice to Meet You.
            </p>

            <p className="text-lg font-semibold text-gray-800 sm:max-w-[75%] lg:max-w-[65%] dark:text-gray-300 text-left">
              I’m focused on building user-friendly front-end applications and
              scalable back-end software. I am a fourth year Computer Science
              student at Lund University in Sweden.
            </p>

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
            className="rounded-lg lg:w-[32rem] sm:w-[20rem] md:w-[52rem] h-auto w-[18rem] hover:scale-105 duration-100"
          />
        </Fade>
      </div>
    </section>
  );
};

export default Header;
