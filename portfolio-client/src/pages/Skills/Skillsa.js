import React from "react";
import { GiStack } from "react-icons/gi";
// import reactImage from "../../images/react.png";
import "./Skills.css";

const Skills = () => {
  return (
    <>
      <div id="skills_id" className="container">
        <div className="row">
          <div className="col-md-12 text-center skill__styles p-5">
            <h2 className="display-5 my-5 stack__title text-uppercase mb-4">
              Techonology Stack
              <span className="align-top p-1 m-1 icon_about">
                <GiStack />
              </span>
            </h2>
            <div className="stack__list">
              <div className="container p-3">
                <div className="row">
                  {/* ===============Start======================== */}
                  <div className="col-md-3 pt-3 mt-2">
                    <div
                      className="card card_style_stack"
                      style={{ height: "140px", overflow: "hidden" }}
                    >
                      <img
                        src={require("../../images/react.png")}
                        className="card-img-top mt-2"
                        alt="..."
                        style={{
                          objectFit: "scale-down",
                          width: "50%",
                          height: "50%",
                        }}
                      />
                      <div className="card-body pb-0">
                        <h5>React Js</h5>
                      </div>
                    </div>
                  </div>
                  {/* ===============End======================== */}
                  {/* ===============Start======================== */}
                  <div className="col-md-3 pt-3 mt-2">
                    <div
                      className="card card_style_stack"
                      style={{ height: "140px", overflow: "hidden" }}
                    >
                      <img
                        src={require("../../images/node.png")}
                        className="card-img-top mt-2"
                        alt="..."
                        style={{
                          objectFit: "scale-down",
                          width: "50%",
                          height: "50%",
                        }}
                      />
                      <div className="card-body pb-0">
                        <h5>Node Js</h5>
                      </div>
                    </div>
                  </div>
                  {/* ===============End======================== */}
                  {/* ===============Start======================== */}
                  <div className="col-md-3 pt-3 mt-2">
                    <div
                      className="card card_style_stack"
                      // style={{ width: "16rem" }}
                      style={{ height: "140px", overflow: "hidden" }}
                    >
                      <img
                        src={require("../../images/mongo.png")}
                        className="card-img-top mt-2"
                        alt="..."
                        style={{
                          objectFit: "scale-down",
                          width: "50%",
                          height: "50%",
                        }}
                      />
                      <div className="card-body pb-0">
                        <h5>Mongo DB</h5>
                      </div>
                    </div>
                  </div>
                  {/* ===============End======================== */}
                  {/* ===============Start======================== */}
                  <div className="col-md-3 pt-3 mt-2">
                    <div
                      className="card card_style_stack"
                      style={{ height: "140px", overflow: "hidden" }}
                    >
                      <img
                        src={require("../../images/express.png")}
                        className="card-img-top mt-2"
                        alt="..."
                        style={{
                          objectFit: "scale-down",
                          width: "50%",
                          height: "50%",
                        }}
                      />
                      <div className="card-body pb-0">
                        <h5>Express Js</h5>
                      </div>
                    </div>
                  </div>
                  {/* ===============End======================== */}
                  {/* ===============Start======================== */}
                  <div className="col-md-3 pt-3 mt-2">
                    <div
                      className="card card_style_stack"
                      style={{ height: "140px", overflow: "hidden" }}
                    >
                      <img
                        src={require("../../images/php.png")}
                        className="card-img-top mt-2"
                        alt="..."
                        style={{
                          objectFit: "scale-down",
                          width: "50%",
                          height: "50%",
                        }}
                      />
                      <div className="card-body pb-0">
                        <h5>PhP</h5>
                      </div>
                    </div>
                  </div>
                  {/* ===============End======================== */}
                  {/* ===============Start======================== */}
                  <div className="col-md-3 pt-3 mt-2">
                    <div
                      className="card card_style_stack"
                      style={{ height: "140px", overflow: "hidden" }}
                    >
                      <img
                        src={require("../../images/mysql.png")}
                        className="card-img-top mt-2"
                        alt="..."
                        style={{
                          objectFit: "scale-down",
                          width: "50%",
                          height: "50%",
                        }}
                      />
                      <div className="card-body pb-0">
                        <h5>My SQL</h5>
                      </div>
                    </div>
                  </div>
                  {/* ===============End======================== */}
                  {/* ===============Start======================== */}
                  <div className="col-md-3 pt-3 mt-2">
                    <div
                      className="card card_style_stack"
                      style={{ height: "140px", overflow: "hidden" }}
                    >
                      <img
                        src={require("../../images/python.png")}
                        className="card-img-top mt-2"
                        alt="..."
                        style={{
                          objectFit: "scale-down",
                          width: "50%",
                          height: "50%",
                        }}
                      />
                      <div className="card-body pb-0">
                        <h5>Python</h5>
                      </div>
                    </div>
                  </div>
                  {/* ===============End======================== */}
                  {/* ===============Start======================== */}
                  <div className="col-md-3 pt-3 mt-2">
                    <div
                      className="card card_style_stack"
                      style={{ height: "140px", overflow: "hidden" }}
                    >
                      <img
                        src={require("../../images/drupal.png")}
                        className="card-img-top mt-2"
                        alt="..."
                        style={{
                          objectFit: "scale-down",
                          width: "50%",
                          height: "50%",
                        }}
                      />
                      <div className="card-body pb-0">
                        <h5>Drupal </h5>
                      </div>
                    </div>
                  </div>
                  {/* ===============End======================== */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
