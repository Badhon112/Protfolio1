import React from "react";
import "./Navbar.scss";
// import { Images } from "../../constants/Index";

export default function Navbar() {
  return (
    <nav
      className=" w-full flex justify-between items-center bg-slate-100 nav px-10 " /* className="flex  h-28 nav fixed space-x-12 pl-48"*/
    >
      <div className="Right flex  items-center">
        <span className="text-2xl font-serif">
          PortFolio
        </span>
      </div>
      <ul className="left flex items-center text-2xl justify-center pl-96 space-x-11">
        {["Home", "About", "Work", "Skills", "Contact"].map((item) => (
          <li key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
