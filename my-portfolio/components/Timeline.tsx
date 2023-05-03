import React from "react";
import Timepoint from "./Timepoint";

type Props = {};

const Timeline = (props: Props) => {
  return (
    <div className="mb-12">
      <h1 className="mb-9 text-6xl text-center font-bold">Work Experience</h1>
      <ol className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
        <Timepoint date="08.2019" title="University Start" />

        <Timepoint
          date="03.2021"
          title="Software Developer, Arkad"
          text="Developed an online company-student interaction platform during COVID-19"
        />

        <Timepoint
          date="06.2021"
          title="Data Science Intern, Tetra Pak"
          text="Assessed various IT strategies to reach business objectives"
        />
        <Timepoint
          date="08.2021"
          title="Student Talent Programme, Tetra Pak"
          text="Developed a logistics management system for food technologists"
        />
        <Timepoint
          date="05.2022"
          title="President, East Asia Student Association"
          text="Arranged events, lectures, and study trips to share academic knowledge about the East Asia region."
        />
        <Timepoint
          date="09.2022"
          title="International Mentor, Lund University"
        />
        <Timepoint
          date="02.2023"
          title="Project Management Intern, Sony Europe"
          text="Managing prototypes, creating cost estimations, creating open-source archives"
        />
      </ol>
    </div>
  );
};

export default Timeline;
