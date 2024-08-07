import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <>
      <div className={`${darkMode && "dark"}`}>
        <Navbar active={setDarkMode} />
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </div>
    </>
  );
}
