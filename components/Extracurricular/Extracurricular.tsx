import React from "react";
import Timepoint from "../Timepoint";
import { Fade, Slide } from "react-awesome-reveal";

type Props = {};

const Extracurricular = (props: Props) => {
  return (
    <section id="extracurricular" className=" lg:mx-0 overflow-hidden">
      <div>
        <Fade duration={2000} triggerOnce>
          <h1 className="mb-12 text-4xl sm:text-7xl text-left lg:text-right lg:mr-[20%] font-bold  bg-gradient-to-r from-green-400 to-[--color-theme] bg-clip-text text-transparent ">
            Extracurricular
          </h1>
          <Slide duration={1000} direction="right">
            <ol className="border-l border-neutral-300 dark:border-neutral-500 md:flex md:justify-center md:gap-6 md:border-l-0 md:border-t">
              <Timepoint
                date="2019"
                title="Member"
                subtitle="Helsingkrona Sorority"
              />
              <Timepoint
                date="2020"
                title="Agile Introduction Course"
                subtitle="Accenture"
                text="Attended three virtual sessions and excercises for Introduction to Agile Mindset, Scrum, and Practicing Agile."
              />
              <Timepoint
                date="2021 - 2022"
                title="Head of IT"
                subtitle="East Asia Student Association"
                text="Created and maintained the website."
              />
              <Timepoint
                date="2022"
                title="Flow Manager"
                subtitle="Lund Carnival"
                text="The largest student-organised carnival in the world held every 4th year."
              />
              <Timepoint
                date="2022"
                title="International Mentor"
                subtitle="Lund University"
                text="Introduced and organised events for new exchange students"
              />
              <Timepoint
                date="2022 - 2023"
                title="President"
                subtitle="East Asia Student Association"
                text="Arranged various events, lectures, and study trips to share academic knowledge about the East Asia region."
              />
              <Timepoint
                date="2022 - Current"
                title="Nova Talent"
                subtitle="Nova"
                text="A global by-invitation-only top talent network that enables the world's top 3% young professionals and students to share, learn and connect with each other."
              />
            </ol>
          </Slide>
        </Fade>
      </div>
    </section>
  );
};

export default Extracurricular;
