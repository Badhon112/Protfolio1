import React from "react";

export default function Header() {
  return (
    <div id="Home" className="bg-gradient-to-r from-green-100 via-pink-100 to-blue-100">
      <div className="flex items-center justify-center mt-40 flex-col">
        <p className="text-4xl overflow-hidden font-serif">
          I Am A Mern Developer
        </p>
        <p className="my-3 ">
          I Work As A Team In Professional MERN Stack Web Development
        </p>

        <a href="#Contact" className="px-8 py-3 rounded-full bg-gradient-to-r from-green-500 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ">Contact Us</a>
      </div>
    </div>
  );
}
