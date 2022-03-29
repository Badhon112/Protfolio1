// import React from "react";
import React, { useEffect, useRef } from "react";
import "./About.scss";
import { init } from "ityped";
import Badhon from "./Badhon.jpg";

export default function About() {
  const first = useRef();
  useEffect(() => {
    init(first.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 120,
      strings: [" Developer", " Designer", "Cp Coder","Font-end Developer","Backend Developer","Mern stack Developer"],
    });
  }, [first]);
  return (
    <div
      id="About"
      className="bg-gradient-to-r from-blue-100 via-pink-100 to-green-100"
    >
      <div className=" flex justify-between items-center pr-14 mt-10">
        <div className="pl-40 left">
          <p className=" text-base ">Hi I Am BADHON BISWAS</p>
          <p className="text-2xl">
            I Am A Creative :<span ref={first}></span>
          </p>
          <p>From Bangladesh</p>
          <div className="pt-10">
            <p className="w-96">
              I am a Computer Science Student in Bangladesh. Since beginning my journey
              as a freelance designer nearly 3 years ago, I've done remote work
              for agencies, consulted for startups, and collaborated with
              talented people to create digital products for both business and
              consumer use. I'm quietly confident, naturally curious, and
              perpetually working on improving my chops one design problem at a
              time
            </p>
          </div>
        </div>
        <div className="right overflow-hidden rounded-xl h-96 mt-24 ">
          <img src={Badhon} alt="This is A Pictur" />
        </div>
      </div>
    </div>
  );
}
