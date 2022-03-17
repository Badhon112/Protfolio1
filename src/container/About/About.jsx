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
      strings: [" Developer"],
    });
  }, [first]);
  return (
    <div id="About" className="bg-gradient-to-r from-blue-100 via-pink-100 to-green-100">
      <div className=" flex justify-between items-center pr-14 mt-10">
        <div className="pl-40 left">
          <p className=" text-base ">Hi: I Am BADHON BISWAS</p>
          <p className="text-2xl">
            I Am A Creative :<span ref={first}></span>
          </p>
          <p>From Bangladesh</p>
          <div className="pt-10">
            <p className="w-96">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
              voluptatum doloribus repellendus dolore vero laboriosam alias,
              minus excepturi quae culpa autem inventore eum esse accusantium et
              tempore rem soluta. Odit.
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
