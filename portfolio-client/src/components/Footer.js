import React from "react";
import "./styles.css";
import {
  SiArstechnica,
  SiFacebook,
  SiTwitter,
  SiLinkedin,
  SiGithub,
} from "react-icons/si";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <div className="container-fluid bgf__color__white px-5">
        <footer className=" pt-3 bgf__color__white">
          <div className="row"></div>

          <div className="row mt-3">
            <ul className="nav justify-content-center list-unstyled display-inline-block">
              <li className="ms-4  ">
                <Link
                  className="li_circle m-auto d-flex align-items-center  text-dark"
                  to="https://web.facebook.com/malikarslan.asif"
                >
                  <SiFacebook size={22} className="text-center" />
                </Link>
              </li>
              {/* <li className="ms-4  ">
                <Link
                  className="li_circle m-auto d-flex align-items-center text-dark"
                  to="#"
                >
                  <SiTwitter size={25} />
                </Link>
              </li> */}
              <li className="ms-4  ">
                <Link
                  className="li_circle m-auto d-flex align-items-center text-dark"
                  to="https://github.com/malikarslanasif131"
                >
                  <SiGithub size={22} />
                </Link>
              </li>
              <li className="ms-4  ">
                <Link
                  className="li_circle m-auto d-flex align-items-center text-dark "
                  to="https://www.linkedin.com/in/malikarslanasif131"
                >
                  <SiLinkedin size={22} />
                </Link>
              </li>
            </ul>
          </div>
          {/* <hr className="text-light" /> */}
          <div className="row m-2 mb-0 pt-2">
            <span className="text-muted  fs-5 text-center custom_hover ">
              © 2023 Malik Arslan Asif, Inc
            </span>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Footer;
