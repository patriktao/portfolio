import React from "react";
import Card from "./Card";

type Props = {};

const Skills = (props: Props) => {
  return (
    <div
      id="skills"
      className="overflow-hidden w-full h-screen lg:overflow-visible lg:px-0 grid items-center"
    >
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-1 lg:items-start lg:gap-y-10">
        <h1 className="text-6xl font-bold text-center bg-gradient-to-r from-[--color-theme] to-green-400 bg-clip-text text-transparent">Skills</h1>
        <div className="flex flex-wrap gap-[1rem] justify-center">
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
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"
                />
              </svg>
            }
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
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
                />
              </svg>
            }
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
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25M9 16.5v.75m3-3v3M15 12v5.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                />
              </svg>
            }
          />
          <Card
            header="Other"
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                />
              </svg>
            }
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
            icon={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z"
                />
              </svg>
            }
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
