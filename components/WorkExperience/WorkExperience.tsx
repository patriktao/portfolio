import React from "react";
import Timepoint from "../Timepoint";
import { Fade, Slide } from "react-awesome-reveal";

type Props = {};

const WorkExperience = (props: Props) => {
  return (
    <section id="experience">
      <div>
        <Fade duration={2000} triggerOnce>
          <h1 className="mb-12 text-5xl md:text-7xl text-left lg:ml-[10%] font-bold  bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent">
            Work Experience
          </h1>
          <Slide duration={1000}>
            <ol className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
              <Timepoint date="Aug 2019" title="University Start" />
              <Timepoint
                date="Mar 2021 - Nov 2021"
                title="Software Developer"
                subtitle="Arkad"
                text="Worked on the frontend of an career fair interaction platform during COVID-19."
              />
              <Timepoint
                date="Jun 2021 - Aug 2021"
                title="Summer Data Scientist Intern"
                subtitle="Tetra Pak"
                text="Worked with data science and assessed various IT strategies to reach business objectives."
              />
              <Timepoint
                date="Aug 2021 - May 2022"
                title="Software Engineer"
                subtitle="Tetra Pak"
                text="Worked as a software engineer. Scoped, designed, and built a logistics management system for food technologists."
              />
              <Timepoint
                date="Jan 2023 - Mar 2023"
                title="Product Management"
                subtitle="Cargo-Planner"
                text="Market-driven product development and requirements engineering for software designed to automate and centralize updates of product screenshots in sales materials and technical documents."
              />
              <Timepoint
                date="Feb 2023 - Dec 2023"
                title="Project Management Intern"
                subtitle="Sony Electronics"
                text="Covering project managers, overseeing and tracking issues and issue trends for System Dev, Verification, and CM while running cost simulations for various release, outsourcing, and resource allocation programs."
              />
              <Timepoint
                date="Jan 2024 - May 2024"
                title="Program Management Intern"
                subtitle="Amazon"
                text="Lead the division’s effort to secure data reliability in capital governance, optimizing the forecasting tool for informed, cost-saving decisions, yielding $ Millions in savings for a multi-billion dollar portfolio of investments across the EU."
              />
            </ol>
          </Slide>
        </Fade>
      </div>
    </section>
  );
};

export default WorkExperience;
