import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Footer from "./components/Footer";
import Top from "./components/Top";
import Preloader from "./components/Preloader";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <Preloader />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Footer />
      <Top />
    </>
  );
}

export default App;
