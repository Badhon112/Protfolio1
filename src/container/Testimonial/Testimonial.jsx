import React, { useState } from "react";
import "./textimonial.scss";
import { Images } from "../../constants/Index.js";
import develop from "../../assets/E_commerce.png"
import Show_E from "../../assets/E_CommerceS.png"
import iconSocial from "../../assets/Social.png"
import iconSocial_E from "../../assets/SocialS.png"
import About from "../../assets/about03.png"
import git from "../../assets/git.png"



export default function Testimonial() {

  const [currentSlider, setcurrentSlider] = useState(0);
  const data = [
    {
      id: 1,
      icon: develop,
      title: "E Commerce ",
      desc: "Build A Project that can Set Order, Get Order, Select Product,and so On,",
      img: Show_E,
    },
    {
      id: 2,
      icon: iconSocial,
      title: "Socila Media",
      desc: "Build Project that can get data, delete data, post data, Like Count",
      img: iconSocial_E,
    },
    {
      id: 3,
      icon: About,
      title: "All Project",
      desc: "If You want any other Project on to my github Page",
      img: git,
    },
  ];
  const handelClick = (e) => {
    e === "left"
      ? setcurrentSlider(currentSlider > 0 ? currentSlider - 1 : 2)
      : setcurrentSlider(
          currentSlider < data.length - 1 ? currentSlider + 1 : 0
        );
  };
  return (
    <div className="Work bg-gradient-to-r from-blue-100 via-pink-100 to-green-100" id="Project">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlider * 100}vw)` }}
      >
        {data.map((event) => {
          return (
            <div className="container">
              <div className="item">
                <div className="left">
                  <div className="leftcontainer">
                    <div className="imgcontainer">
                      <img src={event.icon} alt="" className="h-full" />
                    </div>
                    <p className="">{event.title}</p>
                    <p>{event.desc}</p>
                    <span>Project</span>
                  </div>
                </div>
                <div className="right">
                  <img
                    src={event.img}
                    alt=""
                    className="h-80 rounded-lg px-3 "
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <img
        src={Images.Arraw}
        alt=""
        className="arrow left"
        onClick={() => handelClick("left")}
      />
      <img
        src={Images.Arraw}
        alt=""
        className="arrow right"
        onClick={() => handelClick("right")}
      />
    </div>
  );
}
