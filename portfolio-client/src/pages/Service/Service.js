import React from "react";
import "./Service.css";
import { FaMobileAlt } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { MdOutlineElectricalServices } from "react-icons/md";

const Service = () => {
  return (
    <div id="service_id" className="container service__card my-5 pt-0">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="display-5 my-5 education__title service__card-title text-uppercase mb-4">
            Services
            <span className="align-top p-1 m-1 icon_about">
              {" "}
              <MdOutlineElectricalServices />
            </span>
          </h2>
          <h4 className="pb-3 color_custom_text">
            I do amazing things for clients
          </h4>

          <div className="row">
            {/* Service Box 1 */}
            <div className="col-md-4 service-box">
              <div className="m-2 bg-custom-Color">
                <div className="icon_back_style">
                  <FaMobileAlt
                    className="icon-style"
                    size={120}
                    color="#f25476"
                  />
                </div>
                <h3 className="pt-2">Full-Stack Development</h3>
                <p className="px-3 text-start ms-2">
                  Maximize web solutions with my full-stack development. Dynamic
                  frontends using React.js/Next.js, robust backends with
                  Node.js/PHP. Elevate web presence with MERN stack expertise.
                </p>
              </div>
            </div>
            {/* Service Box 2 */}
            <div className="col-md-4 service-box">
              <div className="m-2 bg-custom-Color">
                <div className="icon_back_style">
                  <FaDesktop
                    className="icon-style"
                    size={120}
                    color="#f25476"
                  />
                </div>
                <h3 className="pt-2">CMS Drupal Expertise</h3>
                <p className="px-3 text-start ms-2">
                  Customize your CMS to meet unique needs. As a Drupal expert, I
                  create fully functional websites from scratch, integrating
                  custom modules for enhanced functionality and seamless
                  operation.
                </p>
              </div>
            </div>
            {/* Service Box 3 */}
            <div className="col-md-4 service-box">
              <div className="m-2 bg-custom-Color">
                <div className="icon_back_style">
                  <FaTabletAlt
                    className="icon-style"
                    size={120}
                    color="#f25476"
                  />
                </div>
                <h3 className="pt-2">Responsive Web</h3>
                <p className="px-3 text-start ms-2">
                  Craft websites with responsive design, ensuring optimal
                  viewing across various devices. Enhance user experience and
                  accessibility by adapting seamlessly to different screen
                  sizes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
