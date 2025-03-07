import React from "react";
import "./Style.css";
import Header from "./Component/Header";
import Hero from "./Component/Hero";
import About from "./Component/About";
import Skills from "./Component/Skill";
import Resume from "./Component/Resume";
import Footer from "./Component/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <>
        <aside className="sidebar">
          <Header />
        </aside>
        <main className="main-content">
          <Hero />
          <About />
          <Skills />
          <Resume/>
          <Footer/>
        </main>
      
    </>
  );
}

export default App;
