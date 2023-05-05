import Image from "next/image";
import React from "react";
import aboutme from "../images/aboutme.jpg";

type Props = {};

const About = (props: Props) => {
  return (
    <div
      id="about"
      className="overflow-hidden py-52 w-full lg:overflow-visible lg:px-0 grid items-center"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 ">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent">
                An Aspiring Software Engineer
              </p>
              <h1 className="mt-2 text-6xl font-bold tracking-tight dark:text-white">
                About Me
              </h1>
              <p className="mt-6 mb-6 text-xl leading-8 dark:text-gray-300">
                I was born in Helsingborg, a coastal city located in the
                southern part of Sweden. Since discovering my first programming
                class in high school, I have been captivated by the art of
                coding and the ability to create meaningful and innovative
                products.
              </p>
              <p className="mt-6 mb-6 text-xl leading-8 dark:text-gray-300">
                I am a fourth year student in M.Sc.Eng in Computer Science
                (Joint B.Sc and M.Sc) with a specialisation in Software
                Engineering at Lund University, and have been living in Lund
                since 2019. On my spare time, I love making music, doing
                sports, travelling, and spending quality time
                with my friends.
              </p>
              {/* <p className="mt-2 mb-12 text-md leading-8 dark:text-gray-300">
                Like an avocado 🥑, I have three distinct layers to my persona.
                At my core, I am a product and customer-focused individual with
                a passion for bridging the gap between user needs and product.
                In the second layer, I am an aspiring software engineer by
                training in both front-end and back-end development. The
                outermost layer represents my interest in UX design, which I see
                as the skin of the avocado. I thoroughly enjoy creating
                user-friendly digital products and everything that is involved
                in the process.
              </p> */}
            </div>
          </div>
          <div className="grid items-center">
            <Image className="rounded-lg" src={aboutme} alt="hbg"></Image>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
