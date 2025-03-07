import { ReactTyped } from "react-typed";
const Hero = () => {
  return (
    <section id="hero" className="hero section dark-background">
      <img src="./Img/hero-bg.jpeg" alt="Hero Background" data-aos="fade-in" className="" />
      <div className="container text-center" data-aos="fade-up" data-aos-delay="100">
        <h2 className="hero-title">Yagnik Joshi</h2>
        <p className="hero-text">
          I'M{" "}
          <ReactTyped
            strings={["MERN STACK DEVELOPER"]}
            typeSpeed={80}
            backSpeed={70}
            loop
          />
        </p>
      </div>
    </section>
  );
};

export default Hero;
