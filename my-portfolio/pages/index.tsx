import NavBar from "@/components/NavBar";

import About from "@/components/About";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Portfolio from "@/components/Portfolio";
import Extracurricular from "@/components/Extracurricular";
import Background from "./background";
import LowerNavBar from "@/components/LowerNavBar";
import Home from "@/components/Home";

export default function MyPortfolio() {
  return (
    <Background>
      <NavBar />
      <div className="z-10 flex flex-wrap content-evenly">
        <Home />
        <About />
        <Skills />
        <WorkExperience />
        <Extracurricular />
        <Portfolio />
      </div>
      <LowerNavBar />
    </Background>
  );
}
