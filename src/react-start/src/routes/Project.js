import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroImg2 from "../components/HeroImg2";
import PricingCard from "../components/PricingCard";
import Work from "../components/Work";
import Bank from "../componentss/bank/bank";
import Adress from "../componentss/adress/adress";

const Project = () => {
  return <div>
    <Navbar/>
    <HeroImg2 heading="PROJECTS." text="Some of my most recent works"/>
    <Work/>
    <Bank/>
    <PricingCard/>
    <Footer/>
  </div>;
};

export default Project;
