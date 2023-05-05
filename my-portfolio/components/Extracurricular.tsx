import React from "react";
import Timepoint from "./Timepoint";

type Props = {};

const Extracurricular = (props: Props) => {
  return (
    <div id="extracurricular" className="py-12 grid items-center">
      <div>
        <h1 className="mb-9 text-6xl text-center font-bold bg-gradient-to-r from-[--color-theme] to-green-400 bg-clip-text text-transparent">
          Extracurriculars
        </h1>
        <ol className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
          <Timepoint
            date="2019"
            title="Member"
            subtitle="Helsingkrona Sorority"
            text="Participated in social and fun activites for students at Lund University."
          />
          <Timepoint
            date="2020"
            title="Agile Introduction Course for Students"
            subtitle="Accenture"
            text="Attended three virtual sessions and excercises for Introduction to Agile Mindset, Scrum, and Practicing Agile."
          />
          <Timepoint
            date="2021 - 2022"
            title="Head of IT"
            subtitle="East Asia Student Association"
            text="Created and maintained the website and provided IT support to the organisation"
          />
          <Timepoint
            date="2022"
            title="Flow Manager"
            subtitle="Lund Carnival"
            text="Ensured that the amount of people on the dancefloor matched safety regulations."
          />
          <Timepoint
            date="2022"
            title="International Mentor"
            subtitle="Lund University"
            text="Introduced new international/exchange students to the Computer Engineering guild at the Faculty of Engineering"
          />
          <Timepoint
            date="2022"
            title="Member"
            subtitle="Nova Talent"
            text="Nova is a global by-invitation-only top talent network that enables the world's young professionals and students to share, learn and connect with each other."
          />
          <Timepoint
            date="2022 - 2023"
            title="President"
            subtitle="East Asia Student Association"
            text="Arranged various events, lectures, and study trips to share academic knowledge about the East Asia region."
          />
        </ol>
      </div>
    </div>
  );
};

export default Extracurricular;
