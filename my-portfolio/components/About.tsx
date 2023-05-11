import Image from "next/image";
import React from "react";
import aboutme from "../images/aboutme.jpg";
import { Fade } from "react-awesome-reveal";

type Props = {};

const About = (props: Props) => {
  return (
    <section id="about">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 ">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4 lg:max-w-lg">
            <Fade cascade damping={0.1} duration={1500} triggerOnce>
              <p className="text-base font-semibold leading-7 text-gray-700 dark:text-white">
                An Aspiring Software Engineer
              </p>
              <h1 className="mt-2 text-5xl md:text-7xl font-bold tracking-tight bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent">
                About Me
              </h1>
              <p className="mt-6 mb-6 text-xl leading-8 dark:text-gray-300 text-gray-700">
                I was born in Helsingborg, a coastal city located in the
                southern part of Sweden. Since discovering my first programming
                class in high school, I have been captivated by the art of
                coding and the ability to create meaningful and innovative
                products.
              </p>
              <p className="mt-6 mb-6 text-xl leading-8 dark:text-gray-300 text-gray-700">
                I am a fourth year student in M.Sc.Eng in Computer Science
                (Joint B.Sc and M.Sc) with a specialisation in Software
                Engineering at Lund University, and have been living in Lund
                since 2019. On my spare time, I love making music, doing sports,
                travelling, and spending quality time with my friends.
              </p>
            </Fade>
          </div>
          <div className="grid items-center">
            <Fade delay={250} duration={3000}>
              <Image
                className="rounded-lg grid items-center"
                src={aboutme}
                alt="hbg"
              />
            </Fade>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
