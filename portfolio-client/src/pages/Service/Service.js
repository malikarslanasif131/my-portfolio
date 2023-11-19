import React from "react";
import "./Service.css";
import { FaMobileAlt } from "react-icons/fa";
import { FaDesktop } from "react-icons/fa";
import { FaTabletAlt } from "react-icons/fa";
import { MdOutlineElectricalServices } from "react-icons/md";

const Service = () => {
  return (
    <div id="service_id" className="container service__card my-5 p-5 pt-0">
      <div className="row">
        <div className="col-md-12 text-center">
          <h2 className="display-5 my-5 education__title text-uppercase mb-4">
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
                  <FaMobileAlt className="icon-style" size={120} />
                </div>
                <h2 className="pt-2">Mobile-App</h2>
                <p className="px-3 text-start ms-2">
                  Responsive Web With All Phones And Easy To Use On
                  Devices.Implementing the Front end, back end, and databases
                  using the latest Technologies.
                </p>
              </div>
            </div>
            {/* Service Box 2 */}
            <div className="col-md-4 service-box">
              <div className="m-2 bg-custom-Color">
                <div className="icon_back_style">
                  <FaDesktop className="icon-style" size={120} />
                </div>
                <h2 className="pt-2">Web Developer</h2>
                <p className="px-3 text-start ms-2">
                  Develop websites using MERN Stack, Implementing the Front end,
                  back end, and databases using the latest Technologies.
                </p>
              </div>
            </div>
            {/* Service Box 3 */}
            <div className="col-md-4 service-box">
              <div className="m-2 bg-custom-Color">
                <div className="icon_back_style">
                  <FaTabletAlt className="icon-style" size={120} />
                </div>
                <h2 className="pt-2">Responsive Web</h2>
                <p className="px-3 text-start ms-2">
                  Responsive web design is about creating web pages that look
                  good on all devices! A responsive web design will
                  automatically adjust for different screen sizes and viewports.
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
