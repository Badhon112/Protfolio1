import React from "react";
import "./Work.scss";
import { Images } from "../../constants/Index.js";

export default function Work() {
  return (
    <div
      className="Work flex flex-col items-center bg-gradient-to-r from-indigo-100 via-purple-100 to-yellow-50"
      id="Work"
    >
      <div className=" overflow-hidden mt-10">
        <span className="text-3xl">What I Work On</span>
      </div>
      <div className="mt-5 flex flex-col items-center">
        <div className="top flex space-x-20 ">
          <div className="flex flex-col items-center w-52 h-60 ">
            <img
              src={Images.figma}
              alt="Figma"
              className="w-10 h-10 mt-2 rounded-full"
            />
            <span className="font-bold text-lg p-2">Ui/UX</span>
            <span className="text-center text-sm  p-3">
              Design Website, Application, Logos User Interface Design and and
              User Experience Design
            </span>
          </div>
          <div className="flex flex-col items-center w-52 h-60 ">
            <img
              src={Images.Illustration}
              alt="Figma"
              className="w-10 h-10 mt-2 rounded-full"
            />
            <span className="font-bold text-lg p-2">Icon/iLLustration</span>
            <span className="text-center text-sm p-3">
              Character Design, Icon Set, Illustration Guide, Illustration Set
            </span>
          </div>
          <div className="flex flex-col items-center w-52 h-60 ">
            <img
              src={Images.Mern}
              alt="Figma"
              className="w-10 h-10 mt-2 rounded-full"
            />
            <span className="font-bold text-lg p-2">Mern</span>
            <span className="text-center text-sm p-3">
              Rich Mern Stack Developer Develop Social Media E_commerce
            </span>
          </div>
          <div className="flex flex-col items-center w-52 h-60 ">
            <img
              src={Images.Web}
              alt="Figma"
              className="w-10 h-10 mt-2 rounded-full"
            />
            <span className="font-bold text-lg p-2">Development</span>
            <span className="text-center text-sm p-3">
              Html/Css, Javascipt,Animation,Respossive Animation
            </span>
          </div>
        </div>
        <div className="bottom mt-5 flex space-x-20 ">
          <div className="flex flex-col items-center w-52 h-60 ">
            <img
              src={Images.react}
              alt="Figma"
              className="w-10 h-10 mt-2 rounded-full"
            />
            <span className="font-bold text-lg p-2">React</span>
            <span className="text-center text-sm p-3">
              2.5 Years of Experience and Build Some Amazing frontend Project
            </span>
          </div>
          <div className="flex flex-col items-center w-52 h-60 ">
            <img
              src={Images.node}
              alt="Figma"
              className="w-10 h-10 mt-2 rounded-full"
            />
            <span className="font-bold text-lg p-2">Node js</span>
            <span className="text-center text-sm p-3">
              2 Years of Experience and Build Some Amazing Backend Project
            </span>
          </div>
          <div className="flex flex-col items-center w-52 h-60 ">
            <img
              src={Images.E_commerce}
              alt="Figma"
              className="w-10 h-10 mt-2 rounded-full"
            />
            <span className="font-bold text-lg p-2">E_commerce</span>
            <span className="text-center text-sm p-3">
              Done A Project that can Set Order, Get Order, Select Product,and
              so On,
            </span>
          </div>
          <div className="flex flex-col items-center w-52 h-60 ">
            <img
              src={Images.Social}
              alt="Figma"
              className="w-10 h-10 mt-2 rounded-full"
            />
            <span className="font-bold text-lg p-2">Social Media</span>
            <span className="text-center text-sm p-3">
              Done A Project that can get data, delete data, post data, Like
              Count
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
