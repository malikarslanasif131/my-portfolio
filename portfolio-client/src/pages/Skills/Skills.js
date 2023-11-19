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
    { title: "Node Js", image: require("../../images/node.png") },
    { title: "Mongo DB", image: require("../../images/mongo.png") },
    { title: "Express Js", image: require("../../images/express.png") },
    { title: "PhP", image: require("../../images/php.png") },
    { title: "My SQL", image: require("../../images/mysql.png") },
    { title: "Python", image: require("../../images/python.png") },
    { title: "Drupal", image: require("../../images/drupal.png") },
  ];

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
                    spaceBetween={60}
                    slidesPerView={4}
                    // navigation
                    autoplay={{
                      delay: 1500,
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
    </>
  );
};

export default Skills;
