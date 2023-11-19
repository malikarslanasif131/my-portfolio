import React from "react";
import "./Testimonials.css";
import { MdRateReview } from "react-icons/md";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Testimonials = () => {
  return (
    <>
      <div id="testimonial_id" className="container my-5">
        <div className="row">
          <div className="m-3">
            <h1 className="display-5 text-center">
              Testimonials{" "}
              <span className="align-top p-1 m-1">
                {" "}
                <MdRateReview />
              </span>
            </h1>
          </div>
          <div className="col-md-4 ">
            <div
              className="card text-center  py-3 "
              style={{ width: "24rem", minHeight: "500px" }}
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                alt="avatar"
                className="rounded-circle mx-auto mb-4"
                style={{ width: "150px" }}
              />
              <div className="card-body">
                <h5 className="mb-3">Adnan Asif</h5>
                <p>Web Developer</p>
                <p className="text-muted">
                  We had given a project to Arslan Asif for frontend development
                  and he has done an excellent job within a short frame of time.
                  Work submitted was pixel perfect. I am a very fussy client and
                  they have handled every very professionally.
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStarHalfAlt />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div
              className="card text-center  py-3 "
              style={{ width: "24rem", minHeight: "500px" }}
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                alt="avatar"
                className="rounded-circle mx-auto mb-4"
                style={{ width: "150px" }}
              />
              <div className="card-body">
                <h5 className="mb-3">Ahssam Saeed</h5>
                <p>Mern Stack Developer</p>
                <p className="text-muted">
                  I am having the privilege of working closely with Brijeshkumar
                  in NEWERO Techspot, and I can confidently say that he is an
                  exceptional front end developer also Back End.
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStarHalfAlt />
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-4 ">
            <div
              className="card text-center  py-3 "
              style={{ width: "24rem", minHeight: "500px" }}
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                alt="avatar"
                className="rounded-circle mx-auto mb-4"
                style={{ width: "150px" }}
              />
              <div className="card-body">
                <h5 className="mb-3">Maria Kate</h5>
                <p>Photographer</p>
                <p className="text-muted">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                  et deleniti nesciunt sint eligendi reprehenderit reiciendis,
                  quibusdam illo, beatae quia fugit consequatur laudantium velit
                  magnam error. Consectetur distinctio fugit doloremque.
                </p>
                <ul className="list-unstyled d-flex justify-content-center text-warning mb-0">
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li>
                    <FaStar />
                  </li>
                  <li className="text-none">
                    <FaRegStar />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
