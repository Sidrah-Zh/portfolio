import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <div
        id="main-scroll-container"
        className="snap-y snap-mandatory h-screen overflow-y-auto scroll-smooth"
      >
        <section
          id="home"
          className="snap-start min-h-screen flex items-center justify-center bg-blue-100"
        >
          <Home />
        </section>
        <section
          id="about"
          className="snap-start min-h-screen flex items-center justify-center bg-green-100"
        >
          <About />
        </section>
        <section
          id="skills"
          className="snap-start min-h-screen flex items-center justify-center bg-yellow-100"
        >
          <Skills />
        </section>
        <section
          id="work"
          className="snap-start min-h-screen flex items-center justify-center bg-purple-100"
        >
          <Work />
        </section>
        <section
          id="contact"
          className="snap-start min-h-screen flex items-center justify-center bg-red-100"
        >
          <Contact />
        </section>
      </div>

      <Footer />
    </>
  );
}

export default App;
