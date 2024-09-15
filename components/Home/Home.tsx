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
import image4 from "../../images/image2.png";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

type Props = {};

interface Icon {
  children: any;
  className?: string;
}

const ClickableIcon = ({ children }: Icon) => {
  return (
    <div className="rounded-full text-2xl shadow-none dark:shadow-lg shadow-gray-300 p-3 cursor-pointer hover:scale-110 ease-in duration-100 bg-gray-800 dark:bg-white hover:bg-gradient-to-r hover:from-green-400 hover:to-[--color-theme] shadow-lg">
      {children}
    </div>
  );
};

const InfoSection = (
  <Fade
    delay={1000}
    cascade
    damping={0.1}
    duration={1500}
    triggerOnce
    className="flex justify-left 2xl:justify-center max-w-xl text-left 2xl:text-center"
  >
    {/* Header */}
    <p className="font-bold text-6xl md:text-7xl text-gray-800 dark:text-white mb-3">
      Hi, I am{" "}
      <span className="bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent">
        Patrik.
      </span>
    </p>

    {/* Main Text */}
    <p className="font-regular text-lg text-gray-800 dark:text-gray-300">
      My expertise lies in leading software projects to success by leveraging
      cutting-edge technologies to solve complex customer challenges. I
      specialize in technical project management, software development, and
      product management, ensuring innovation and efficiency in every project I
      undertake.
    </p>

    {/* List */}
    <div className="uppercase text-sm tracking-widest mt-4 font-regular text-black dark:text-white">
      <p className="my-1">
        {" "}
        {"> "}Final Year MSc. Computer Science & Engineering.
      </p>
      <p className="my-1">
        {"> "}Specialization in <u>Software Engineering</u>.
      </p>
      <p className="my-1">{"> "}Lund University, Sweden (QS Rank 75).</p>
    </div>
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
  </Fade>
);

const ImageSection = (
  <Fade delay={1500} duration={1000} triggerOnce>
    <Image
      data-tooltip-target="tooltip-default"
      src={image4}
      alt="profile"
      className="max-w-[280px] xl:max-w-[320px]"
    />
  </Fade>
);

const Home = (props: Props) => {
  return (
    <section
      id="home"
      title="home-section"
      className="grid h-screen m-0 pt-24 lg:pt-0 pb-0 justify-center"
    >
      <div
        title="container"
        className="flex flex-col md:flex-row 2xl:flex-col-reverse max-w-5xl items-center justify-center"
      >
        <div title="info-section" className="md:col-span-4 lg:col-span-8">
          {InfoSection}
        </div>
        <div title="image-section">{ImageSection}</div>
      </div>
    </section>
  );
};

export default Home;
