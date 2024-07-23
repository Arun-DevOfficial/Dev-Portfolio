import Navbar from "../Components/Navbar";
import Header from "../Components/Header";
import About from "./About";
import Services from "./Services";
import Portfolio from "./Portfolio";

export default function Home() {
  return (
    <>
      <Navbar />
      <Header />
      <About />
      <Services />
      <Portfolio />
    </>
  );
}
