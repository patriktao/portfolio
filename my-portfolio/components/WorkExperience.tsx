import React from "react";
import Timepoint from "./Timepoint";
import { Fade, Slide } from "react-awesome-reveal";

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <section id="experience">
      <div>
        <Fade delay={250} duration={2000} triggerOnce>
          <h1 className="mb-12 text-5xl md:text-7xl text-left lg:text-center font-bold  bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent">
            Work Experience
          </h1>
          <Slide duration={1000}>
            <ol className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
              <Timepoint date="Aug 2019" title="University Start" />
              <Timepoint
                date="Mar 2021 - Nov 2021"
                title="Software Developer"
                subtitle="Arkad"
                text="Developed an online company-student interaction platform during COVID-19"
              />

              <Timepoint
                date="Jun 2021 - Aug 2021"
                title="Summer Intern"
                subtitle="Tetra Pak"
                text="Worked with data science and assessed various IT strategies to reach business objectives"
              />
              <Timepoint
                date="Aug 2021 - May 2022"
                title="Full Stack Developer"
                subtitle="Tetra Pak"
                text="Part of Student Talent Programme. Developed a logistics management system for food technologists"
              />
              <Timepoint
                date="Feb 2023 - Current"
                title="Student Worker"
                subtitle="Sony Europe"
                text="Project Management Intern. Learning PM fundamentals in OSV projects. Creating cost estimations, managing prototypes and open-source releases."
              />
            </ol>
          </Slide>
        </Fade>
      </div>
    </section>
  );
};

export default WorkExperience;
