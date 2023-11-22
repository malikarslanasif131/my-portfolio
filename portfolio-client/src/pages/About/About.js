import React from "react";
import "./About.css";
import { useWindupString } from "windups";
import { FcAbout } from "react-icons/fc";
import { HiBadgeCheck } from "react-icons/hi";
import { VscProject } from "react-icons/vsc";
import { FaLaptopCode } from "react-icons/fa";

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

            <div className="mx-5 px-5">
              <p className="about_details mt-5">
                As a developer, I specialize in Full-stack development, with a
                particular affinity for the <b className="fs-3">MERN Stack</b>.
                My journey began by honing my proficiency in HTML, CSS, and
                JavaScript. On the frontend, I've worked extensively with
                frameworks such as React.js and Next.js, while on the backend,
                I've utilized Node.js, Express.js, and PHP to bring projects to
                life.
              </p>
              <p className="about_details">
                My experience extends to both SQL and NoSQL databases, where
                I've worked with technologies like MongoDB and MySQL.
                Additionally, I am an expert in CMS (Content Management System)
                platforms, particularly Drupal, which shares similarities with
                WordPress.
              </p>
              <p className="about_details">
                With three years of hands-on experience, I've successfully
                navigated the development landscape, contributing to both
                frontend and backend aspects of projects. To enhance the visual
                and functional aspects, I leverage CSS frameworks like Bootstrap
                and Tailwind CSS, along with React CSS libraries such as
                Material UI, React Bootstrap, and Ant Design.
              </p>
            </div>
            <div className="about__cards">
              <article className="card text-dark text-center custom_width_150 p-3">
                <span className="py-3">
                  <HiBadgeCheck size={25} />
                </span>
                <h2>3+</h2>
                <small>YEAR OF EXPERIENCE</small>
              </article>
              <article className="card text-dark text-center custom_width_150 p-3">
                <span className="py-3">
                  <VscProject size={25} />
                </span>
                <h3>20+ </h3>
                <small>PROJECTS</small>
              </article>
              <article className="card text-dark text-center custom_width_150 p-3">
                <span className="py-3">
                  <FaLaptopCode size={25} />
                </span>
                <h3>40k+</h3>
                <small>LINES OF CODE</small>
              </article>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
