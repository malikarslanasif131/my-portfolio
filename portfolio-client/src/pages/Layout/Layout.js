import React from "react";
import "./Layout.css";
import Navbar from "../../components/Navbar";
import Home from "../Home/Home";
import About from "../About/About";
import Skills from "../Skills/Skills";
import Education from "../Education/Education";
import Seprator from "../../components/Seprator";
import Experience from "../Experience/Experience";
import Footer from "../../components/Footer";
import Project from "../Project/Project";
import Testimonials from "../Testimonials/Testimonials";

import Contact from "../Contact/Contact";
import Service from "../Service/Service";

const Layout = () => {
  const rootStyle = {
    "--primary-color": "#EA738D",
    "--secondary-color": "#8AAAE5",
    "--tertiary-color": "#008080",
    "--quaternary-color": "#4b0082",
  };

  return (
    <>
      <div style={rootStyle} className="layout_main mb-0 pb-0">
        <Navbar />
        <Home />
        {/* <Seprator /> */}
        <About />
        {/* <Seprator /> */}
        <Service />
        <Skills />
        {/* <Seprator /> */}
        <Education />
        {/* <Seprator /> */}
        <Project />
        {/* <Seprator /> */}
        {/* <Seprator /> */}
        <Experience />
        {/* <Seprator /> */}
        <Testimonials />
        {/* <Seprator /> */}

        <Contact />
        {/* <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="light" data-type="HORIZONTAL" data-vanity="malik-arslan-asif-99b4b2256" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/malik-arslan-asif-99b4b2256?trk=profile-badge">Malik Arslan asif</a></div> */}
        {/* <div className="badge-base LI-profile-badge" data-locale="en_US" data-size="large" data-theme="dark" data-type="HORIZONTAL" data-vanity="malik-arslan-asif-99b4b2256" data-version="v1"><a className="badge-base__link LI-simple-link" href="https://pk.linkedin.com/in/malik-arslan-asif-99b4b2256?trk=profile-badge">Malik Arslan asif</a></div> */}

        <Footer />
      </div>
    </>
  );
};

export default Layout;
