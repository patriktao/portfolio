import React from "react";
import Timepoint from "./Timepoint";
import { Fade, Slide } from "react-awesome-reveal";

type Props = {};

const Extracurricular = (props: Props) => {
  return (
    <section id="extracurricular" className="mx-8 lg:mx-0">
      <div>
        <Fade delay={250} duration={2000} triggerOnce>
          <h1 className="mb-12 text-5xl md:text-7xl text-left lg:text-right lg:mr-[20%] font-bold bg-gradient-to-l from-green-400 to-[--color-theme] bg-clip-text text-transparent">
            Extracurricular
          </h1>
          <Slide duration={1000} direction="right">
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
                title="Head of Information Technology"
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
          </Slide>
        </Fade>
      </div>
    </section>
  );
};

export default Extracurricular;
