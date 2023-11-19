import React from "react";

import "./Experience.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { SiExpertsexchange } from "react-icons/si";
import { BiSolidSchool } from "react-icons/bi";
import { FaDrupal } from "react-icons/fa6";
import { FaReact } from "react-icons/fa";
import { MdStackedLineChart } from "react-icons/md";

const Experience = () => {
  return (
    <>
      <div id="experience_id" className="container experience__card my-5">
        <div className="row">
          <div className="col-md-12 text-center">
            <h2 className="display-5 my-5 experience__title text-uppercase mb-4">
              Experience{" "}
              <span className="align-top p-1 m-1 icon_about">
                {" "}
                <SiExpertsexchange />
              </span>
            </h2>
            <div className=" p-3">
              <VerticalTimeline lineColor="#fff">
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  // contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                  // contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                  date="April-2023 - Presant"
                  iconStyle={{ background: "#EA738D", color: "#fff" }}
                  icon={<FaDrupal />}
                  iconClassName={"change__icon__style"}
                >
                  <h3 className="vertical-timeline-element-title">
                    FigOver Developer Pvt
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    Drupal PHP Backend Developer
                  </h4>
                  <p>
                    In my role at FigOver, I serve as a back-end PHP developer
                    specializing in creating PHP modules for the Drupal CMS
                    platform. My responsibilities include designing and
                    implementing code to enhance the functionality and features
                    of the CMS.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="April-2022 - March-2023"
                  iconStyle={{ background: "#EA738D", color: "#fff" }}
                  icon={<FaReact />}
                  iconClassName={"change__icon__style"}
                >
                  <h3 className="vertical-timeline-element-title">
                    DigiTech Ultra
                  </h3>
                  <h4 className="vertical-timeline-element-subtitle">
                    MERN Stack Developer
                  </h4>
                  <p>
                    Developed full-stack web applications using MongoDB,
                    ExpressJS (Node.js), ReactJS, and also work on Laravel(PHP)
                    during internship. Collaborated with team members to build
                    scalable and responsive web solutions.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="January-2022 - Present"
                  iconStyle={{ background: "#EA738D", color: "#fff" }}
                  icon={<MdStackedLineChart />}
                  iconClassName={"change__icon__style"}
                >
                  <h4 className="vertical-timeline-element-title">
                    Self Employment
                  </h4>
                  <h4 className="vertical-timeline-element-subtitle">
                    Full Stack Developer
                  </h4>
                  <p>
                    {" "}
                    I am a passionate full stack developer with expertise in
                    PHP, React.js, JavaScript, and the MERN stack. Through
                    self-employment, I have successfully completed various
                    personal projects, showcasing my skills in both front-end
                    and back-end development. My commitment to staying updated
                    with emerging technologies ensures that I deliver innovative
                    and high-quality solutions.
                  </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  date="April-2019 - March-2022"
                  iconStyle={{ background: "#EA738D", color: "#fff" }}
                  icon={<BiSolidSchool />}
                  iconClassName={"change__icon__style"}
                >
                  <h4 className="vertical-timeline-element-title">
                    Scientific Ideal Education School
                  </h4>
                  <h4 className="vertical-timeline-element-subtitle">
                    Teacher
                  </h4>
                  <p>
                    I'm Computer science and Mathematics teacher of
                    matriculation classes in "Scientific Ideal Education
                    School".
                  </p>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
