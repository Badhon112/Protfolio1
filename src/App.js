import React from "react";
import About from "./container/About/About";
import Footer from "./container/Footer/Footer";
import Header from "./container/Header/Header";
import Skills from "./container/Skills/Skills";
import Testimonial from "./container/Testimonial/Testimonial";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-300">
      <About />
      <Footer />
      <Header />
      <Skills />
      <Testimonial />
    </div>
  );
}
