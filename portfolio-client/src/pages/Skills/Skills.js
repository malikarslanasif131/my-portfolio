import React from "react";
import { GiStack } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Autoplay,
  Pagination,
  Mousewheel,
  Keyboard,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import "swiper/css/bundle";
import "./Skills.css";

const Skills = () => {
  const stackData = [
    { title: "React Js", image: require("../../images/react.png") },
    { title: "Next Js", image: require("../../images/next_js.png") },
    { title: "Node Js", image: require("../../images/node.png") },
    { title: "Express Js", image: require("../../images/express.png") },
    { title: "Mongo DB", image: require("../../images/mongo.png") },
    { title: "My SQL", image: require("../../images/mysql.png") },
    { title: "PhP", image: require("../../images/php.png") },
    { title: "Python", image: require("../../images/python.png") },
    { title: "JavaScript", image: require("../../images/js.png") },
    { title: "HTML", image: require("../../images/html.png") },
    { title: "CSS", image: require("../../images/css.png") },
    { title: "jQuery", image: require("../../images/jQuery.png") },
    { title: "Bootstrap", image: require("../../images/bootstrap.png") },
    { title: "Redux Toolkit", image: require("../../images/Redux.png") },
    { title: "Drupal", image: require("../../images/drupal.png") },
  ];

  return (
    <>
      <div className="skills_main p-5">
        <div id="skills_id" className="container">
          <div className="row">
            <div className="col-md-12 text-center skill__styles p-5">
              <h2 className="display-5 my-5 stack__title text-uppercase mb-4">
                Techonology Stack
                <span className="align-top p-1 m-1 icon_about">
                  <GiStack />
                </span>
              </h2>
              <h5 className="pb-5 pt-3 color_custom_text">
                I excel in diverse technologies, delivering exceptional
                solutions that bring creativity and proficiency to every
                project.
              </h5>
              <div className="stack__list">
                <div className="container p-2">
                  <div className="row">
                    <Swiper
                      cssMode={true}
                      pagination={{
                        clickable: true,
                      }}
                      // navigation={true}
                      mousewheel={true}
                      keyboard={true}
                      modules={[
                        Navigation,
                        Autoplay,
                        Pagination,
                        Mousewheel,
                        Keyboard,
                      ]}
                      // spaceBetween={40}
                      // slidesPerView={5}
                      breakpoints={{
                        1400: {
                          slidesPerView: 5,
                          spaceBetween: 40,
                        },
                        1200: {
                          slidesPerView: 4,
                          spaceBetween: 30,
                        },
                        768: {
                          slidesPerView: 3,
                          spaceBetween: 20,
                        },
                        320: {
                          slidesPerView: 2,
                          spaceBetween: 10,
                        },
                      }}
                      // navigation
                      autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                      }}
                      loop={true}
                      // scrollbar={{ draggable: true }}
                      // onSwiper={(swiper) => console.log(swiper)}
                      // onSlideChange={() => console.log("slide change")}
                    >
                      {stackData.map((stackItem, index) => (
                        <SwiperSlide key={index}>
                          <div
                            className="card card_style_stack"
                            style={{ height: "140px", overflow: "hidden" }}
                          >
                            <img
                              src={stackItem.image}
                              className="card-img-top mt-2"
                              alt={stackItem.title}
                              style={{
                                objectFit: "scale-down",
                                width: "50%",
                                height: "50%",
                              }}
                            />
                            <div className="card-body pb-0">
                              <h5>{stackItem.title}</h5>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
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
