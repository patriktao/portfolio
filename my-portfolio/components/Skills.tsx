import React from "react";
import Card from "./Card";
import {
  BsClipboardDataFill,
  BsCode,
  BsCodeSlash,
  BsCodeSquare,
  BsMenuApp,
} from "react-icons/bs";
import { FaCode, FaCodeBranch, FaCube, FaEdit, FaFigma } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section
      id="skills"
      className="justify-start lg:justify-center text-center"
    >
      <Fade delay={250} duration={2000} triggerOnce>
        <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-1 lg:gap-y-10">
          <h1 className="text-5xl md:text-7xl font-bold text-start md:text-center bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent">
            Skills
          </h1>
          <div className="flex flex-wrap md:flex gap-y-8">
            <Card
              header="Front End Development"
              text={
                <ul>
                  <li>Javascript (React, NextJS, React Native)</li>
                  <li>Typescript</li>
                  <li>HTML/CSS (SCSS, Tailwind)</li>
                  <li>Tailwind</li>
                  <li>Redux</li>
                </ul>
              }
              icon={<BsCodeSquare />}
            />
            <Card
              header="Back End Development"
              text={
                <ul>
                  <li>Java</li>
                  <li>Javascript (NodeJS, ExpressJS)</li>
                  <li>SQL (PostgreSQL)</li>
                  <li>Python (Django)</li>
                  <li>Firebase</li>
                  <li>AWS S3</li>
                </ul>
              }
              icon={<FaCodeBranch />}
            />
            <Card
              header="Data Science"
              text={
                <ul>
                  <li>R</li>
                  <li>Haskell</li>
                  <li>Python</li>
                  <li>Clojure</li>
                  <li>MatLab</li>
                </ul>
              }
              icon={<BsClipboardDataFill />}
            />
            <Card
              header="Other"
              icon={<FaEdit />}
              text={
                <ul>
                  <li>Docker</li>
                  <li>Git</li>
                  <li>Figma (UX Design)</li>
                  <li>PowerPoint</li>
                  <li>Excel</li>
                </ul>
              }
            />
            <Card
              header="Methodologies"
              text={
                <ul>
                  <li>System Design</li>
                  <li>Software Testing</li>
                  <li>Scrum</li>
                  <li>Concurrent Computing</li>
                  <li>UX Design</li>
                  <li>Requirement Engineering</li>
                  <li>Configuration Management</li>
                  <li>Project Management</li>
                </ul>
              }
              icon={<FaCube />}
            />
          </div>
        </div>
      </Fade>
    </section>
  );
};

export default Skills;
