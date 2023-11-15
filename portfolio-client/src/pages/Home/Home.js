import React from "react";
import "./Home.css";
import logo from "../../images/my-profile.jpg";
import resumefile from "../../images/Arslan_Asif_CV.pdf";
import Typewriter from "typewriter-effect";
import { useWindupString } from "windups";
import { BsWhatsapp } from "react-icons/bs";
const Home = () => {
  const [text] = useWindupString("Malik Arslan Asif");

  const tech = [
    "React Js, Node Js, Express Js , MongoDB",
    "MERN stack & Full stack Developer!",
    "Drupal 7 & 9 Developer! Web Developer!",
  ];
  const contactLink = "www.linkedin.com/in/malikarslanasif131";
  // const resumefile = "www.linkedin.com/in/malikarslanasif131";
  const phoneNo = "+923115115143";

  return (
    <>
      <div
        id="home_main"
        className="container_fluid py-5 bg__color__white home__section"
      >
        <div className="row mx-auto d-flex justify-content-center">
          {/* // col section 1 */}
          <div className="col-md-5">
            <div className="m-auto image_round">
              <img
                className="ms-5 mt-5 image_round"
                src={logo}
                width={500}
                height={570}
                alt="Logo"
              />
            </div>
          </div>

          {/* // col section 2 */}
          <div className="col-md-5 m-5 p_100 ">
            <h2 className="">
              Hi i'm <p className="d-inline">{text}</p>
            </h2>

            <h3 className="mt-4 color__yellow__stack">
              <Typewriter
                options={{
                  strings: tech,
                  autoStart: true,
                  loop: true,
                }}
              />
            </h3>
            <div className="mt-4">
              <a
                href={contactLink ? `https://${contactLink}` : ""}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className="btn btn-lg sky_blue_color px-3 me-3"
              >
                Hire Me
              </a>
              <a
                href={`${resumefile}`}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className="btn btn-lg bubblegum_pink_color px-3 ms-3 "
              >
                Resume
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${phoneNo}&text=Hi%20I%20want%20to%20hire%20you`}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className="btn btn-lg mx-5"
              >
                <BsWhatsapp size={32} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
