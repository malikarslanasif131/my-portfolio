import React from "react";
import "./About.css";
import { useWindupString } from "windups";
import { FcAbout } from "react-icons/fc";

const About = () => {
  const [text] = useWindupString("About Me");

  return (
    <>
      <div id="about_me" className="container my-5 ">
        {/* <Seprator/> */}
        {/* <div className='text-center display-4 about__title text-uppercase my-3'>About Me</div> */}
        <div className="row my-5">
          <div className="col-md-10 m-auto p-5 about__card">
            <div className="text-center display-5 about__title text-uppercase mb-4 ">
              {text}
              <span className="align-top p-1 m-1 icon_about">
                <FcAbout />
              </span>
            </div>

            {/* <p className="about_details">{data && data}</p> */}
            <p
              className="about_details"
              // dangerouslySetInnerHTML={{ __html: data }}
            >
              {" "}
              loriam ipsum dolor sit amet consectetur adipisicing elit.
              Dignissimos, quidem voluptatibus loriam ipsum dolor sit amet
              consectetur adipisicing elit. Dignissimos, quidem voluptatibus
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
