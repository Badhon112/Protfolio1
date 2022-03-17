import React, { useState } from "react";
import "./Navbar.scss";
// import { Images } from "../../constants/Index";
// import { HiMenuAlt4, HiX } from "react-icons/hi";
// import { motion } from "framer-motion";

export default function Navbar() {
  // const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex justify-between">
      <div className=" w-full flex justify-between items-center bg-slate-100 nav px-10 ">
        <div className="Right flex  items-center">
          <span className="text-2xl font-serif">PortFolio</span>
        </div>
        <ul className="left flex items-center text-2xl justify-center pl-96 space-x-11">
          {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
            <li key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
        {/* <div className="app_navbar_menu">
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, case: "easeOut" }}
            >
              <HiX
                onClick={() => {
                  setToggle(false);
                }}
              />
              {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
                <li key={`link-${item}`}>
                  <div />
                  <a href={`#${item}`}>{item}</a>
                </li>
              ))}
            </motion.div>
          )}
        </div> */}
      </div>
    </nav>
  );
}
