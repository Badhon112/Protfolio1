import React, { useEffect, useRef } from "react";
import "./Header.scss";
import { init } from "ityped";
import Badhon from "./Badhon4.jpg";
export default function Header() {
  const first = useRef();
  useEffect(() => {
    init(first.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 120,
      strings: [
        " Developer",
        
      ],
    });
  }, [first]);
  return (
    <div id="Home">
      <div className=" flex  items-center pr-14">
        <div className="">
          <p className=" text-base ">MY NAME BADHON BISWAS</p>
          <p className="text-2xl">I Am A Creative :
          <span ref={first}></span>
          </p>
          
        </div>
        <div className="right overflow-hidden rounded-xl h-3/6 items-end ">
          <img src={Badhon} alt="This is A Pictur" />
        </div>
      </div>
    </div>
  );
}
