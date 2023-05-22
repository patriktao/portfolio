import Image from "next/image";
import React from "react";
import aboutme from "../images/aboutme.jpg";
import { Fade } from "react-awesome-reveal";

type Props = {};

const infoSection = (
  <Fade cascade damping={0.1} duration={1000} triggerOnce direction="up">
    <p className="text-base font-medium leading-7 text-gray-700 dark:text-white">
      An Aspiring Software Engineer
    </p>
    <h1 className="mt-2 text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent">
      About Me
    </h1>
    <p className="mt-6 mb-6 font-regular  text-lg leading-8 dark:text-gray-300 text-gray-700">
      I was born in Helsingborg, a coastal city located in the southern part of
      Sweden. Since discovering my first programming class in high school, I
      have been captivated by the art of coding and the ability to create
      meaningful and innovative products.
    </p>
    <p className="mt-6 mb-6 text-lg font-regular leading-8 dark:text-gray-300 text-gray-700">
      I am a fourth year student in M.Sc.Eng in Computer Science (Joint B.Sc and
      M.Sc) with a specialisation in Software Engineering at Lund University,
      and have been living in Lund since 2019. On my spare time, I love making
      music, doing sports, travelling, and spending quality time with my
      friends.
    </p>
  </Fade>
);

const imgSection = (
  <Fade delay={250} duration={1000} triggerOnce>
    <Image
      className="rounded-lg grid items-center"
      src={aboutme}
      alt="hbg"
    />
  </Fade>
);

const About = (props: Props) => {
  return (
    <section
      title="about"
      id="about"
      className="block h-screen grid relative lg:mt-0"
    >
      <div
        title="container"
        className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-x-12 items-center"
      >
        <div title="info-section">{infoSection}</div>
        <div title="image-section">{imgSection}</div>
      </div>
    </section>
  );
};

export default About;
