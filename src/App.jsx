import React from "react";
import Nav from "./Components/Nav";
import Hero from "./Components/Hero";
import Menu from "./Components/Menu";
import About from "./Components/About";
import Art from "./Components/Art";
import Item from "./Components/Item";
import Footer from "./Components/Footer";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

const App = () => {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  return (
    <div className=" bg-black ">
      <Nav />
      <Hero />
      <Menu />
      <About />
      <Art />
      <Item />
      <Footer />
    </div>
  );
};

export default App;
