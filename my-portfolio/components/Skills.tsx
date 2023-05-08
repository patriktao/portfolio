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
    <div id="skills" className="w-full min-h-screen snap-start grid items-center">
      <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-1 lg:gap-y-10 justify-items-start lg:justify-items-center">
        <Fade duration={2000}>
          <h1 className="text-5xl md:text-6xl font-bold text-start md:text-center bg-gradient-to-r from-[--color-theme] to-green-400 bg-clip-text text-transparent">
            Skills
          </h1>
          <div className="lg:flex">
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
        </Fade>
      </div>
    </div>
  );
};

export default Skills;
