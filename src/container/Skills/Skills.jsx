import React from "react";
import "./Skills.scss";
import { Images } from "../../constants/Index.js";

export default function Skills() {
  return (
    <div className="Skills  bg-gradient-to-r from-blue-100 via-pink-100 to-green-100" id="Skills">
      <div className="text-center">
        <span className="text-3xl text-lime-700">Skills On </span>
      </div>
      <div className="Skill flex justify-center mt-9  items-center p-3">
        <div className="1 p-3 items-center flex flex-col">
        <img src={Images.cpp} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
        </div>
        <div className="2 p-3 items-center flex flex-col">
          <div className="2.1 p-3">
          <img src={Images.git} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
          <div className="2.2 p-3">
          <img src={Images.email} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
        </div>
        <div className="3 p-3 items-center flex flex-col">
          <div className="3.1 p-3">
          <img src={Images.graphql} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
          <div className="3.2 p-3">
          <img src={Images.nb} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
          <div className="3.2 p-3">
          <img src={Images.python} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
        </div>
        <div className="4 p-3 items-center flex flex-col">
          <div className="4.1 p-3">
          <img src={Images.redux} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
          <div className="4.2 p-3">
            <img src={Images.html} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
          <div className="4.3 p-3">
          <img src={Images.css} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
          <div className="4.3 p-3">
          <img src={Images.sass} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
        </div>
        <div className="5  p-3 items-center flex flex-col">
          <div className="5.1 p-3">
          <img src={Images.sass} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
          <div className="5.2 p-3">
          <img src={Images.react} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
          <div className="5.3 p-3">
            <img src={Images.about01} alt="" className="w-20 h-20 rounded-full" />
          </div>
          <div className="5.4 p-3">
          <img src={Images.node} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
          <div className="5.5 p-3">
          <img src={Images.typescript} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
        </div>
        <div className="4 p-3 items-center flex flex-col">
          <div className="4.1 p-3">
          <img src={Images.E_commerce} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
          <div className="4.2 p-3">
          <img src={Images.javascript} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
          <div className="4.3 p-3">
          <img src={Images.mu5} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
          <div className="4.3 p-3">
          <img src={Images.api} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
        </div>
        <div className="3 p-3 items-center flex flex-col">
          <div className="3.1 p-3">
          <img src={Images.skype} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
          <div className="3.2 p-3">
          <img src={Images.spotify} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
          <div className="3.2 p-3">
          <img src={Images.Mern} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
        </div>
        <div className="2 p-3 items-center flex flex-col">
          <div className="2.1 p-3">
          <img src={Images.mobile} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
          <div className="2.2 p-3">
          <img src={Images.api} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
          </div>
        </div>
        <div className="1 p-3 items-center flex flex-col">
        <img src={Images.Social} alt=""  className="w-20 h-20 rounded-full border-blue-200 border-4"  />
        </div>
      </div>
    </div>
  );
}
