import React, { useState } from "react";
import "./Project.css";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { Modal, Button } from "react-bootstrap";

const Project = () => {
  const [projectName, setProjectName] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [videoUrl, setVideoUrl] = useState("");

  const handleOpenModal = (url, name) => {
    setVideoUrl(url);
    setProjectName(name);
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setVideoUrl("");
    setShowModal(false);
  };
  return (
    <>
      <div id="project_id" className="container my-5">
        <div className="row">
          <div className="m-3">
            <h1 className="display-5 text-center">
              Projects{" "}
              <span className="align-top p-1 m-1 icon_about">
                {" "}
                <AiOutlineFundProjectionScreen />
              </span>
            </h1>
          </div>
          <div className="col-md-4 ">
            <span className="top_badge__style badge__style_color">
              Full Stack{" "}
            </span>
            <div className="card card__style " style={{ width: "24rem" }}>
              <img
                src={require("../../images/blog.png")}
                className="card-img-top"
                style={{ height: "220px" }}
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">BlogBooth</h3>
                <p>
                  <span className="badge__style badge__color">React JS</span>
                  <span className="badge__style badge__color">Express Js</span>
                  <span className="badge__style badge__color">MongoDB</span>
                  <span className="badge__style badge__color">Bootstrap</span>
                </p>
                <p className="card-text">
                  Built BlogBooth with MERN stack, featuring admin dashboard,
                  user authentication, account creation, blog posting, and
                  advanced functionalities like filtering and searching for an
                  enhanced user experience.
                </p>
                <div className="d-grid gap-2 col-12 mx-auto">
                  <button
                    className="btn btn-primary btn_color_pink"
                    type="button"
                    onClick={() =>
                      handleOpenModal(
                        require("../../images/v2.mp4"),
                        "BlogBooth"
                      )
                    }
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <span className="top_badge__style badge__style_color">
              MERN Stack
            </span>
            <div className="card card__style" style={{ width: "24rem" }}>
              <img
                src={require("../../images/ecommerce.jpg")}
                style={{ height: "220px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">E-Commerce </h3>
                <p>
                  <span className="badge__style badge__color">React JS</span>
                  <span className="badge__style badge__color">Redux</span>
                  <span className="badge__style badge__color">MongoDB</span>
                  <span className="badge__style badge__color">Express Js</span>
                </p>
                <p className="card-text">
                  Developed an MERN E-commerce site with admin dashboard for
                  product management, user authentication, account creation,
                  cart functionality, seamless payment, and advanced features
                  like filtering and searching.
                </p>
                <div className="d-grid gap-2 col-12 mx-auto">
                  <button
                    className="btn btn-primary btn_color_pink"
                    type="button"
                    onClick={() =>
                      handleOpenModal(
                        require("../../images/v1.mp4"),
                        "E-Commerce "
                      )
                    }
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <span className="top_badge__style badge__style_color">
              MERN Stack
            </span>
            <div className="card card__style" style={{ width: "24rem" }}>
              <img
                src={require("../../images/portfolio.png")}
                style={{ height: "220px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h3 className="card-title">Expense Management</h3>
                <p>
                  <span className="badge__style badge__color">Express Js</span>
                  {/* <span className="badge__style badge__color">MongoDB</span> */}
                  <span className="badge__style badge__color">
                    Ant Design UI
                  </span>
                  <span className="badge__style badge__color">React JS</span>
                </p>
                <p className="card-text">
                  Crafted a MERN Expense Management site with user
                  authentication, account creation, and features enabling users
                  to record, track incomes and expenses, and analyze data within
                  custom date ranges.
                </p>
                <div className="d-grid gap-2 col-12 mx-auto">
                  {/* <button
                    className="btn btn-primary btn_color_pink"
                    type="button"
                  >
                    Button
                  </button> */}
                  <button
                    className="btn btn-primary btn_color_pink"
                    type="button"
                    onClick={() =>
                      handleOpenModal(
                        require("../../images/v1.mp4"),
                        "MERN Todo"
                      )
                    }
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>
          {/* ==================three card end ================ */}
          {/* <div className="col-md-4">
            <span className="top_badge__style badge__color">MERN Stack</span>
            <div className="card card__style" style={{ width: "24rem" }}>
              <img
                src={require("../../images/ecommerce.jpg")}
                style={{ height: "220px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">E-Commerce </h5>
                <p>
                  <span className="badge__style badge__color">React JS</span>
                  <span className="badge__style badge__color">MongoDB</span>
                  <span className="badge__style badge__color">
                    Express (Node Js)
                  </span>
                </p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid gap-2 col-12 mx-auto">
                  <button
                    className="btn btn-primary btn_color_pink"
                    type="button"
                    onClick={() =>
                      handleOpenModal(
                        require("../../images/v1.mp4"),
                        "E-Commerce "
                      )
                    }
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-4">
            <span className="top_badge__style badge__color">MERN Stack</span>
            <div className="card card__style" style={{ width: "24rem" }}>
              <img
                src={require("../../images/ecommerce.jpg")}
                style={{ height: "220px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">E-Commerce </h5>
                <p>
                  <span className="badge__style badge__color">React JS</span>
                  <span className="badge__style badge__color">MongoDB</span>
                  <span className="badge__style pink_badge">
                    Express (Node Js)
                  </span>
                </p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid gap-2 col-12 mx-auto">
                  <button
                    className="btn btn-primary btn_color_pink"
                    type="button"
                    onClick={() =>
                      handleOpenModal(
                        require("../../images/v1.mp4"),
                        "E-Commerce "
                      )
                    }
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-4">
            <span className="top_badge__style badge__color">MERN Stack</span>
            <div className="card card__style" style={{ width: "24rem" }}>
              <img
                src={require("../../images/ecommerce.jpg")}
                style={{ height: "220px" }}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">E-Commerce </h5>
                <p>
                  <span className="badge__style badge__color">React JS</span>
                  <span className="badge__style badge__color">MongoDB</span>
                  <span className="badge__style pink_badge">
                    Express (Node Js)
                  </span>
                </p>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <div className="d-grid gap-2 col-12 mx-auto">
                  <button
                    className="btn btn-primary btn_color_pink"
                    type="button"
                    onClick={() =>
                      handleOpenModal(
                        require("../../images/v1.mp4"),
                        "E-Commerce "
                      )
                    }
                  >
                    Watch Video
                  </button>
                </div>
              </div>
            </div>
          </div>
          ==================three card end ================ */}
        </div>
      </div>
      <Modal
        show={showModal}
        onHide={handleCloseModal}
        size="lg"
        className="model__style"
      >
        <div className="card__style">
          <Modal.Header closeButton>
            <Modal.Title>{projectName} Video</Modal.Title>
          </Modal.Header>
          <Modal.Body className="my-0">
            <video width="100%" height="auto" controls autoPlay={true}>
              <source src={videoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </Modal.Body>
          <Modal.Footer className="mt-0 mx-auto">
            <Button
              className="btn btn-primary btn_color_pink_close w-25 align-items-center"
              // variant="secondary"
              onClick={handleCloseModal}
            >
              Close
            </Button>
          </Modal.Footer>
        </div>
      </Modal>
    </>
  );
};

export default Project;
