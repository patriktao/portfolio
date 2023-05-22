import React, { useEffect } from "react";
import { BsCodeSlash } from "react-icons/bs";
import ProjectImage from "./ProjectImage";
import portfolio from "../images/portfolio.png";

interface Props {
  header?: String;
  text?: String;
  footer?: JSX.Element;
  techStack?: String;
  Image?: JSX.Element;
}

const Card = (props: Props) => {
  return (
    <li className="relative grid gap-10 grid-cols-12 items-center mb-[100px] w-[1000px] h-[362px]">
      <div title="project-content" className="relative">
        <div>
          <ProjectImage src={portfolio} title="portfolio" />
          <div>
            <p title="overline">Featured Project</p>
            <h3 title="title">Personal Website</h3>
            <div title="project-description">
              <p>Blah Blah blah</p>
            </div>
            <ul title="tech-stack">
              <li>VS Code</li>
              <li>Hej</li>
            </ul>
            <div title="links"></div>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
