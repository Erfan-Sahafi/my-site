import React, { useEffect } from "react";
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import AboutMe from "./Components/AboutMe/AboutMe";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import ContactMe from "./Components/Footer/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  Aos.init();

  useEffect(() => {
    Aos.init({
      duration: 2000,
      delay: 300,
      offset: 200,
      disable: window.innerWidth < 640,
    });
    Aos.refresh(true);
  }, [window.innerWidth]);
  return (
    <>
      <Navbar />
      <Header />
      <AboutMe />
      <Skills />
      <Projects />
      <ContactMe />
    </>
  );
};

export default App;
