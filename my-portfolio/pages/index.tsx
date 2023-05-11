import NavBar from "@/components/NavBar";
import Header from "@/components/Header";
import About from "@/components/About";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import Portfolio from "@/components/Portfolio";
import Extracurricular from "@/components/Extracurricular";
import Background from "./background";

export default function Home() {
  return (
    <Background>
      <NavBar />
      <div className="z-10 flex flex-col flex-wrap">
        <Header />
        <About />
        <Skills />
        <WorkExperience />
        <Extracurricular />
        <Portfolio />
      </div>
    </Background>
  );
}
