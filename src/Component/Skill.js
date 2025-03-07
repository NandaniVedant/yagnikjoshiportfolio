import React, { useEffect, useState, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const skillsData = [
  { name: "HTML", value: 100 },
  { name: "CSS", value: 100 },
  { name: "JavaScript", value: 90 },
  { name: "React.js", value: 90 },
  { name: "Node.js", value: 95 },
  { name: "MongoDB", value: 80 },
];

const Skill = () => {
  const [animate, setAnimate] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="skills section light-background" ref={skillsRef}>
      <div className="container-fluid px-lg-5">
        {/* Section Title */}
        <div className="section-title text-center" data-aos="fade-up">
          <h2>Skills</h2>
        </div>

        {/* Skills Section */}
        <div className="container" data-aos="fade-up" data-aos-delay="100">
          <div className="row skills-content">
            {skillsData.map((skill, index) => (
              <div key={index} className="col-lg-6">
                <div className="progress">
                  <span className="skill">
                    {skill.name} <i className="val">{skill.value}%</i>
                  </span>
                  <div className="progress-bar-wrap">
                    <div
                      className="progress-bar"
                      style={{
                        width: animate ? `${skill.value}%` : "0%",
                        transition: "width 1.5s ease-in-out",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skill;
