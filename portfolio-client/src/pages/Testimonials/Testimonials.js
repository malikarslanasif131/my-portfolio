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
            <div className="card text-center py-3 card-style-testimonial  my-3">
              <img
                // src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(10).webp"
                src={require("../../images/testi1.jpg")}
                alt="avatar"
                className="rounded-circle mx-auto mb-4 testi-img"
              />
              <div className="card-body">
                <h5 className="mb-3">Qazi Muhammad Imran</h5>
                <p>Web Developer</p>
                <p className="text-muted">
                  As a web developer, I had the pleasure of collaborating with
                  Malik Arslan on a complex project. Their mastery of the MERN
                  stack, coupled with a keen eye for design using CSS frameworks
                  like Tailwind and React CSS libraries, significantly elevated
                  our web applications. Arslan's expertise and commitment to
                  delivering high-quality code make them an invaluable asset to
                  any development team.
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
            <div className="card text-center  py-3 card-style-testimonial  my-3">
              <img
                // src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(1).webp"
                src={require("../../images/testi2.jpeg")}
                alt="avatar"
                className="rounded-circle mx-auto mb-4 testi-img"
              />
              <div className="card-body">
                <h5 className="mb-3">Ahssam Saeed</h5>
                <p>Digital Marketing</p>
                <p className="text-muted">
                  In my role as a digital marketing agent, I've had the
                  opportunity to work closely with Malik Arslan. Their
                  proficiency in frontend technologies like React.js and Next.js
                  played a pivotal role in creating visually engaging and
                  user-friendly interfaces for our campaigns. Arslan's attention
                  to detail and ability to seamlessly integrate with our
                  marketing strategies made our collaboration exceptionally
                  successful.
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
                    <FaStar />
                  </li>
                </ul>
              </div>
            </div>
          </div>{" "}
          <div className="col-md-4 ">
            <div className="card text-center  py-3 card-style-testimonial  my-3">
              <img
                // src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/img%20(32).webp"
                src={require("../../images/testi3a.jpeg")}
                alt="avatar"
                className="rounded-circle mx-auto mb-4 testi-img"
              />
              <div className="card-body">
                <h5 className="mb-3">Riwzan Mehmmod</h5>
                <p>Front End Developer</p>
                <p className="text-muted">
                  Malik Arslan's front-end expertise elevates projects with
                  visually appealing, efficient user interfaces. His commitment
                  to innovation and staying current with the latest technologies
                  ensures our applications are at the forefront. Collaborating
                  with Malik has been a pleasure, and his contributions play a
                  key role in our project success.
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
