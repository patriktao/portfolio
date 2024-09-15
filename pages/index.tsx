import NavBar from "@/components/NavBar/NavBar";
import About from "@/components/About/About";
import Skills from "@/components/Skills/Skills";
import WorkExperience from "@/components/WorkExperience/WorkExperience";
import Portfolio from "@/components/Portfolio/Portfolio";
import Extracurricular from "@/components/Extracurricular/Extracurricular";
import Background from "./background";
import Home from "@/components/Home/Home";

export default function MyPortfolio() {
  return (
    <Background>
      <main className="pl-[2rem] pr-[2rem] h-min-screen w-max-screen">
        <NavBar />
        <div className="z-10 flex flex-col">
          <Home />
          <About />
          <Skills />
          <WorkExperience />
          <Extracurricular />
          <Portfolio />
        </div>
      </main>
    </Background>
  );
}
