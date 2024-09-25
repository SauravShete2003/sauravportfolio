import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Hero from "../Hero/Hero";
import AboutMe from "../AboutMe/AboutMe";
import SkillSection from "../SkillSection/SkillSection";
import Projects from "./../../views/Projects/Projects";
import Contact from "../Contact/Contact";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <AboutMe />
      <SkillSection />
      <Projects />
      <Contact/>
    </div>
  );
}

export default Home;
