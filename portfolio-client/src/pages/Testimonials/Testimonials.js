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
            <div className="card text-center  py-3 " style={{ width: "24rem" }}>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
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
                  <li>
                    <FaStarHalfAlt />
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4 ">
            <div className="card text-center  py-3 " style={{ width: "24rem" }}>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
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
                  <li>
                    <FaStarHalfAlt />
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-4 ">
            <div className="card text-center  py-3 " style={{ width: "24rem" }}>
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
