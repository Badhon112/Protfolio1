import React from "react";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";

export default function Footer() {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_5qj9tci",
        "template_0pi9hgj",
        e.target,
        "cU7mxWReqrguhKu1I"
      )
      .then((res) => {
        console.log(res);
         Swal.fire("Success", "your email is well received and noted");
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      });
  };
  return (
    <div
      id="Contact"
      className="Container  bg-gradient-to-r from-fuchsia-100 via-purple-100 to-yellow-100 min-h-screen w-full flex items-center justify-center"
    >
      <div className="wrapper border-2 border-gray-300 ">
        <div className="p-5 border-b-2 border-black">
          <p className="text-4xl font-bold overflow-hidden">Badhon</p>
          <span>Rich Frontend And Backend Developer</span>
        </div>
        <form action="" className="flex flex-col" onSubmit={sendEmail}>
          <h2 className="text-3xl text-center overflow-hidden">Contact Me</h2>
          <div className="p-3">
            <input
              className="p-2 mx-2 border-2 border-gray-300 rounded-lg outline-none"
              type="text"
              placeholder="First Name"
              id=""
              name="firstname"
            />
            <input
              className="p-2 border-2 border-gray-300 rounded-lg outline-none"
              type="text"
              placeholder="Last Name"
              id=""
              name="lastname"
            />
          </div>
          <div className="p-3 space-y-2 flex flex-col">
            <input
              className="p-2 mx-2 border-2 border-gray-300 rounded-lg outline-none"
              type="email"
              placeholder="Email Address"
              name="user_email"
            />
            <textarea
              name="message"
              placeholder="Message"
              className="p-2 mx-2 border-2 border-gray-300 rounded-lg h-40 resize-none outline-none"
              id=""
              cols="10"
              rows="10"
            ></textarea>
          </div>
          <div className=" w-96 flex flex-col items-center justify-center text-center mx-5">
            <input
              type="submit"
              value="Send"
              className="w-screen mb-5 py-3 rounded-lg bg-green-500  mt-2  border-2 font-bold text-white"
            />
          </div>
        </form>
      </div>
    </div>
  );
}
