import React, { useEffect } from "react";

import Partners from "../Home/Partners";
import AboutUs from "./AboutUs";
import Package from "./Package";
import Service from "./Service";

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
    document.title = "Tourelish | About ";
  }, []);
  return (
    <div className="pt-24 md:pt-36">
      <AboutUs />
      <Service />
      <Partners />
      <Package />
    </div>
  );
};

export default About;
