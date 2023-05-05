import Link from "next/link";
import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import profile from "../images/profile.png";
import Image from "next/image";
import getConfig from "next/config";

type Props = {};

const Header = (props: Props) => {
  const { publicRuntimeConfig } = getConfig();

  const pdfPath = publicRuntimeConfig.PDF_PATH;

  return (
    <div id="home" className="w-full h-screen">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div className="grid mx-auto justify-items-center">
          <p className="uppercase text-sm tracking-widest text-[--color-theme] bg-gradient-to-r from-green-300 to-[--color-theme] bg-clip-text text-transparent">
            Let&#39;s build something together
          </p>
          <div className="font-extrabold text-6xl text-gray-700 dark:text-white">
            <h1 className="py-4 text-center">
              Hi, I&#39;m <span className="bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent">Patrik</span>{" "}
              From Sweden
            </h1>
          </div>
          <p className="py-4 text-lg text-black sm:max-w-[70%] dark:text-gray-300 text-center">
            I’m focused on building user-friendly front-end applications and
            integrating back-end technologies. I am a fourth year Computer
            Science student at Lund University 📍
          </p>
          <div className="flex items-center justify-between max-w-[330px] py-4 text-2xl gap-8">
            <a
              href="https://www.linkedin.com/in/patriktao/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:text-black">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/patriktao"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:text-black">
                <FaGithub />
              </div>
            </a>
            <Link
              href="#"
              onClick={(e) => {
                window.location.href = "mailto:patriktao@gmail.com";
                e.preventDefault();
              }}
            >
              <div className="rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:text-black">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href={pdfPath} target="_blank">
              <div className="rounded-full shadow-lg shadow-gray-300 p-4 cursor-pointer hover:scale-110 ease-in duration-300 dark:bg-white dark:text-black">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>

        <div>
          <Image
            data-tooltip-target="tooltip-default"
            src={profile}
            alt="profile"
            className="rounded-lg object-scale-down h-46 w-96"
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
    </div>
  );
};

export default Header;
