import React from "react";
import SkillList from "./SkillList";
import { BsClipboardDataFill, BsCodeSquare } from "react-icons/bs";
import { FaCodeBranch, FaCube, FaEdit } from "react-icons/fa";
import { Fade } from "react-awesome-reveal";

type Props = {};

const Skills = (props: Props) => {
  return (
    <section
      id="skills"
      className="grid justify-start lg:justify-center text-center"
    >
      <div className="grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-1 lg:gap-y-10">
        <Fade delay={500} duration={2000} triggerOnce cascade damping={0.1}>
          <h1 className="text-5xl md:text-7xl font-bold text-center md:text-left lg:text-center bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent">
            Skills
          </h1>
          <div className="flex-wrap flex gap-y-8 gap-x-12">
            <SkillList
              header="Front-end"
              text={
                <ul>
                  <li>Javascript (React, Next.js, React Native)</li>
                  <li>Typescript</li>
                  <li>HTML/CSS (SCSS, Tailwind)</li>
                  <li>Tailwind</li>
                  <li>Redux</li>
                </ul>
              }
              icon={<BsCodeSquare />}
            />
            <SkillList
              header="Back-end"
              text={
                <ul>
                  <li>Java</li>
                  <li>Javascript (Node.js, Express.js)</li>
                  <li>SQL (PostgreSQL)</li>
                  <li>Python (Django)</li>
                  <li>Firebase</li>
                  <li>AWS S3</li>
                </ul>
              }
              icon={<FaCodeBranch />}
            />
            <SkillList
              header="Data Science"
              text={
                <ul>
                  <li>R</li>
                  <li>Haskell</li>
                  <li>Python</li>
                  <li>Clojure</li>
                  <li>MatLab</li>
                  <li>Excel</li>
                </ul>
              }
              icon={<BsClipboardDataFill />}
            />
            <SkillList
              header="Tools & Platforms"
              icon={<FaEdit />}
              text={
                <ul>
                  <li>Docker</li>
                  <li>Git</li>
                  <li>Figma</li>
                  <li>PowerPoint</li>
                  <li>Webpack</li>
                  <li>Wordpress</li>
                  <li>Heroku</li>
                </ul>
              }
            />
            <SkillList
              header="Coursework"
              text={
                <ul>
                  <li>System Design</li>
                  <li>Testing</li>
                  <li>Scrum</li>
                  <li>Parallell Programming</li>
                  <li>UX Design</li>
                  <li>Requirement Eng.</li>
                  <li>Configuration Mgm. (SCM)</li>
                  <li>Agile Scrum</li>
                </ul>
              }
              icon={<FaCube />}
            />
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default Skills;
