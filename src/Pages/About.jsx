import React from "react";
// import AnimatedCard from '../Components/animatedCard/AnimatedCard'
import AboutBanOne from "../Components/AboutBanOne";
import AboutBanTwo from "../Components/AboutBanTwo";
import AboutBanThree from "../Components/AboutBanThree";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import OrgPhilo from "../Components/OrgPhilo";
const About = () => {
  return (
    <>
      <Navbar />
      <OrgPhilo />
      <AboutBanOne />
      <AboutBanTwo />
      {/* <AboutBanThree /> */}
      <Footer />
    </>
  );
};

export default About;
