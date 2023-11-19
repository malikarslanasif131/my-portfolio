import React from "react";
import "./About.css";
import { useWindupString } from "windups";
import { FcAbout } from "react-icons/fc";
import { GiSoapExperiment } from "react-icons/gi";
import { VscProject } from "react-icons/vsc";

const About = () => {
  const [text] = useWindupString("About Me");

  return (
    <>
      <div id="about_me" className="container my-5 ">
        {/* <Seprator/> */}
        {/* <div className='text-center display-4 about__title text-uppercase my-3'>About Me</div> */}
        <div className="row my-5">
          <div className="col-md-12 m-auto p-5 about__card">
            <div className="text-center display-5 about__title text-uppercase mb-4 ">
              {text}
              <span className="align-top p-1 m-1 icon_about">
                <FcAbout />
              </span>
            </div>
            <div class="about__cards">
              <article class="card text-dark text-center custom_width_150 p-3">
                <span className="pb-3">
                  <GiSoapExperiment />
                </span>
                <h5>Experience</h5>
                <small>3+ years</small>
              </article>
              <article class="card text-dark text-center custom_width_150 p-3">
                <span className="pb-3">
                  <VscProject />
                </span>
                <h5>Projects</h5>
                <small>20+ completed</small>
              </article>
            </div>
            <div className="mx-5 px-5">
              <p className="about_details mt-5">
                {" "}
                👍loriam ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, quidem voluptatibus loriam ipsum dolor sit amet
                consectetur adipisicing elit. Dignissimos, quidem voluptatibus
              </p>
              <p className="about_details">
                Hey there! My name is Sreenivasulu Kalluru (Vasu). I am 21 years
                old and I currently live in Badvel, Andhra Pradesh. I'm a BSc
                graduate of the Year 2022 from SBVR Degree College, Badvel I've
                been learning Web Development - MERN Stack from the past 8
                months, I'm more passionate about Frontend Development with
                React.js and its related technologies. As of now, I do have a
                pretty decent hands on experience with React and its ecosystem
                and I'm getting ready to work.
              </p>
              <p className="about_details">
                {" "}
                loriam ipsum dolor sit amet consectetur adipisicing elit.
                Dignissimos, quidem voluptatibus loriam ipsum dolor sit amet
                consectetur adipisicing elit. Dignissimos, quidem voluptatibus
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
