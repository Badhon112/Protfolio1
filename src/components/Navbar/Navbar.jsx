import React, { } from "react";
import "./Navbar.scss";
// import { Images } from "../../constants/Index";
// import { HiMenuAlt4, HiX } from "react-icons/hi";
// import { motion } from "framer-motion";

export default function Navbar() {
  // const [toggle, setToggle] = useState(false);
  return (
    <nav className="flex justify-between">
      <div className=" w-full flex justify-between items-center  nav px-10 bg-gradient-to-r from-green-100 via-pink-100 to-blue-100">
        <div className="Right flex  items-center">
          <span className="text-2xl font-serif">PortFolio</span>
        </div>
        <ul className="left flex items-center text-2xl justify-center pl-96 space-x-11">
          {["Home", "About", "Work", "Skills","Project", "Contact"].map((item) => (
            <li key={`link-${item}`}>
              <div />
              <a href={`#${item}`}>{item}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
