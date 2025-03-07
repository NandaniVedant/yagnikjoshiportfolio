const About = () => {
  return (
    <section id="about" className="about section py-5">
      {/* Section Title */}
      <div className="container text-center section-title mb-4" data-aos="fade-up">
        <h2>About</h2>
        <p className="px-lg-5">
          I'm a MERN stack developer with a total of 1.5 years of experience, including 10 months of professional
          experience. Skilled in frontend and backend development, I have expertise in technologies like React.js,
          Node.js, Express.js, and MongoDB. I also have strong knowledge of HTML, CSS, Bootstrap, React.js, Node.js,
          JavaScript, and jQuery. With experience working on live projects, including HRMS and e-commerce platforms, I
          specialize in building interactive web applications, API integrations, and UI/UX improvements.
        </p>
      </div>

      <div className="container" data-aos="fade-up" data-aos-delay="100">
        <div className="row gy-4 align-items-center justify-content-center">
          {/* Image Section */}
          <div className="col-12 col-md-6 col-lg-4 text-center">
            <img src="./Img/About.jpeg" className="img-fluid rounded shadow-sm w-75" alt="Profile" />
          </div>

          {/* Content Section */}
          <div className="col-12 col-md-6 col-lg-8 content px-4">
            <h2 className="text-md-start text-center mb-3">MERN STACK DEVELOPER</h2>

            <div className="row">
              {/* Left Column */}
              <div className="col-12 col-sm-6">
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>LinkedIn:</strong>
                    <a href="https://linkedin.com/in/yagnikjoshi" target="_blank" rel="noopener noreferrer">
                      linkedin.com/in/yagnikjoshi
                    </a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Phone:</strong>
                    <a href="tel:9016891601">90168 91601</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>City:</strong> Ahmedabad, Gujarat, India
                  </li>
                </ul>
              </div>

              {/* Right Column */}
              <div className="col-12 col-sm-6">
                <ul className="list-unstyled">
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Degree:</strong> Bachelor of Engineering - BE
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Email:</strong>
                    <a href="mailto:joshiyagnik13@gmail.com">joshiyagnik13@gmail.com</a>
                  </li>
                  <li>
                    <i className="bi bi-chevron-right"></i> <strong>Available:</strong> OnSite, Hybrid, Freelance
                  </li>
                </ul>
              </div>
            </div>

            {/* Description */}
            <p className="mt-3 text-md-start text-center">
              Skilled in developing full-stack web applications using the MERN (MongoDB, Express.js, React.js, Node.js)
              stack. Experienced in building dynamic, scalable, and high-performance applications with a strong focus on
              frontend and backend integration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
