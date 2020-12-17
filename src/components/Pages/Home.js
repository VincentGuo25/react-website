import React from "react";
import "../../App.css";
import Cards from "../Cards/Cards";
import HeroSection from "../HeroSection/HeroSection";

function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <Cards />
    </React.Fragment>
  );
}

export default Home;
