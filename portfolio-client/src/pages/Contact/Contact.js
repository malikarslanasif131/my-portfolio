import React, { useState } from "react";
import "./Contact.css";
import { BiSolidContact } from "react-icons/bi";
// import { ContactUs } from "../../components/EmailJS.js";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    // console.log(name, email, message);
    if (name === "" || email === "" || message === "") {
      toast.error("Please fill all the fields");
      setIsSubmitting(false);
      return;
    }
    // Email validation using a regular expression
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailPattern.test(email)) {
      toast.error("Please enter a valid email address");
      setIsSubmitting(false);
      return;
    }
    const Data = {
      to_name: name,
      to_email: email,
      message: message,
    };
    emailjs
      .send("service_i4plhg7", "template_u5z0i6f", Data, "FenPdmumdsxkfssD8")
      .then(
        async (result) => {
          await axios.post("/api/contact/", {
            name,
            email,
            message,
          });
          // console.log(result.text);
          setName("");
          setEmail("");
          setMessage("");
          toast.success("Message sent successfully");
          setIsSubmitting(false);
        },
        (error) => {
          // console.log(error.text);
          toast.error("Failed to send message");
          setIsSubmitting(false);
        }
      );
  };

  return (
    <>
      {/* <ContactUs /> */}
      <div className=" my-5">
        <ToastContainer />
        <div
          id="contact_id"
          className="container contact__section  my-5 custom__mt-7rem"
        >
          <div className="row my-5">
            <div className="mt-5 mb-3">
              <h1 className="display-5 text-center ">
                Contact <span className="text-custom-Color-org">Me!</span>
                <span className="align-top p-1 m-1 icon_about">
                  {" "}
                  <BiSolidContact />
                </span>
              </h1>
            </div>
            {/* <div className="col-md-4 offset-1 contact-us-custom-col">
              <div className="m-auto image_round">
                <img
                  className="image__round contact__image"
                  // src={require("../../images/contact-us.jpg")}
                  src={require("../../images/contact-300x218.png")}
                  // width={350}
                  // height={300}
                  alt="Logo"
                />
              </div>
            </div> */}
            <div className="col-md-6 mx-auto mb-5">
              <form className="contact-form">
                <div className="mb-3">
                  <input
                    className="form-control form-control-lg"
                    type="text"
                    name="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter Your Name..."
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    className="form-control form-control-lg"
                    placeholder="Enter Your Email..."
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <textarea
                    className="form-control form-control-lg"
                    placeholder="Massage Here ..."
                    rows="2"
                    name="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  ></textarea>
                </div>
                <div className="d-grid gap-2 col-12 mx-auto">
                  <button
                    type="submit"
                    className="btn  btn_color_custom "
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <div className="text-center p-0 m-0">
                        <div className="spinner-border p-0 m-0" role="status">
                          {/* <span className="sr-only">Loading...</span> */}
                        </div>
                      </div>
                    ) : (
                      "Submit"
                    )}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
