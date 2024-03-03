import Link from "next/link";
import { BsEnvelope, BsFillPersonLinesFill } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaGithub,
  FaDownload,
  FaMailBulk,
  FaMailchimp,
  FaEnvelope,
  FaEnvelopeSquare,
} from "react-icons/fa";
import image2 from "../images/image2.png";
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

const ClickableIcon = ({ children }: Icon) => {
  return (
    <div className="rounded-full text-2xl shadow-none dark:shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-110 ease-in duration-100 bg-gray-800 dark:bg-white hover:bg-gradient-to-r hover:from-green-400 hover:to-[--color-theme] shadow-lg">
      {children}
    </div>
  );
};

const icons = (
  <div className="flex gap-8 max-w-[330px] py-6">
    <a
      href="#"
      onClick={(e) => {
        window.location.href = "mailto:patriktao@gmail.com";
        e.preventDefault();
      }}
      target="_blank"
      rel="noreferrer"
    >
      <ClickableIcon>
        <FaEnvelope className="text-white dark:text-black" />
      </ClickableIcon>
    </a>
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
  </div>
);

const InfoSection = (
  <Fade delay={1000} cascade damping={0.1} duration={1500} triggerOnce>
    <p className="text-left font-bold text-6xl md:text-7xl text-gray-800 dark:text-white mb-3">
      {"> "}Hi, I am{" "}
      <span className="bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent">
        Patrik.
      </span>
    </p>
    <p className="font-regular text-lg text-gray-800 sm:max-w-[80%] dark:text-gray-300 text-left">
      My expertise lies in steering software products towards success while
      leveraging new technologies to tackle real customer challenges.
    </p>

    <p className="uppercase text-sm tracking-widest mt-4 font-regular text-black dark:text-white">
      Final Year MSc. Computer Science & Engineering.
      <br />
      Specialization in <u>Software Engineering</u>.
      <br />
      Lund University, Sweden (QS Rank 85).
    </p>
    {icons}
  </Fade>
);

const ImageSection = (
  <Fade delay={1500} duration={1000} triggerOnce>
    <Image
      data-tooltip-target="tooltip-default"
      src={image2}
      alt="profile"
      className="rounded-lg hover:scale-105 duration-100 ease-in "
    />
  </Fade>
);

const Home = (props: Props) => {
  return (
    <section
      id="home"
      title="home-section"
      className="grid h-min-screen lg:h-screen m-0 pt-24 lg:pt-0 pb-0 justify-center"
    >
      <div
        title="container"
        className="max-w-5xl flex flex-wrap flex-col md:grid md:grid-cols-6 lg:grid-cols-12 items-center gap-y-8 gap-x-4"
      >
        <div title="info-section" className="md:col-span-4 lg:col-span-8">
          {InfoSection}
        </div>
        <div
          title="image-section"
          className="md:col-span-2 lg:col-span-4 lg:w-[100%] md:w-[75%] sm:w-[55%]"
        >
          {ImageSection}
        </div>
      </div>
    </section>
  );
};

export default Home;
