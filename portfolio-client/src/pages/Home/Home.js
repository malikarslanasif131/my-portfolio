import React from "react";
import "./Home.css";
import logo from "../../images/my-profile.jpg";
import resumefile from "../../images/Arslan_Asif_CV.pdf";
import Typewriter from "typewriter-effect";
import { useWindupString } from "windups";
import { IoLogoWhatsapp } from "react-icons/io";
import CirclesAnimation from "../../components/CirclesAnimation";
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
          {/* <div className="col-md-5">
            <div className="m-auto image_round class-sm-imgdiv">
              <img
                className="ms-5 mt-5 image_round class-sm-img"
                src={logo}
                width={500}
                height={570}
                alt="Logo"
              />
            </div>
          </div> */}
          <div className="col-md-5">
            <div
              className="m-auto image_round class-sm-imgdiv img"
              style={{
                visibility: "visible",
                opacity: 1,
                transform:
                  "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)",
                transition:
                  "opacity 2s cubic-bezier(0.5, 0, 0, 1) 0.2s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0.2s",
              }}
            >
              <img
                className="ms-5 mt-5 image_round class-sm-img animated"
                src={logo}
                // width={500}
                // height={570}
                alt="Logo"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </div>
          </div>

          {/* // col section 2 */}
          <div className="col-md-5 m-5 p_100 class-sm-sec-two ">
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
            <div className="mt-4 class-sm-sec-btn">
              <a
                href={contactLink ? `https://${contactLink}` : ""}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className="btn btn-lg btn-home-colors px-3 me-3"
              >
                Hire Me!
              </a>
              <a
                href={`${resumefile}`}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className="btn btn-lg btn-home-colors px-3 ms-3 "
              >
                Resume
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${phoneNo}&text=Hi%20I%20want%20to%20hire%20you`}
                target="_blank"
                rel="noopener noreferrer"
                type="button"
                className="btn btn-lg mx-3 px-3 pb-2"
              >
                <IoLogoWhatsapp size={32} className="custom_bg_color_wp" />
              </a>
            </div>
          </div>
        </div>
        <CirclesAnimation />
      </div>
    </>
  );
};

export default Home;
