import React from "react";

const Resume = () => {
  const resumeFile = process.env.PUBLIC_URL + "/resume.pdf"; // Path to resume file in public folder

  return (
    <section id="resume" className="resume section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>Resume</h2>
       
      </div>

      <div className="container">
        <div className="row">
          {/* Education Section */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
            <h3 className="resume-title">Education</h3>
            <div className="resume-item">
              <h4>BE - Bachelor of Engineering</h4>
              <h5>2020 - 2024</h5>
              <p>
                <em>New LJ Institute of Engineering and Technology</em>
              </p>
            </div>

            <div className="resume-item">
              <h4>HSC (Science)</h4>
              <h5>2018 - 2020</h5>
              <p>
                <em>Seth Khimji Ramdas Kanya Vidhyalay</em>
              </p>
            </div>
          </div>

          {/* Professional Experience Section */}
          <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
            <h3 className="resume-title">Professional Experience</h3>
            <div className="resume-item">
              <h4>MERN Stack Developer</h4>
              <h5>Jun 2024 - Present</h5>
              <p>
                <em>Lemolite Technologies LLP, Ahmedabad</em>
              </p>
            </div>

            <div className="resume-item">
              <h4>MERN Stack Intern</h4>
              <h5>Jan 2024 - May 2024</h5>
              <p>
                <em>Infolabz, Ahmedabad</em>
              </p>
              <ul>
                <li>Gained hands-on experience in full-stack web development using MongoDB, Express.js, React.js, and Node.js.</li>
                <li>Developed beginner-level projects focusing on CRUD operations, API integration, and authentication.</li>
                <li>Worked with Git/GitHub for version control and collaborated in a team environment.</li>
                <li>Enhanced problem-solving skills and learned best practices in web development.</li>
              </ul>
            </div>
          </div>
        </div>
         {/* Download Resume Button */}
         <a href={resumeFile} download="Yagnik_Joshi_Resume.pdf" className="btn btn-primary mt-3">
          Download Resume <i className="bi bi-download"></i>
        </a>
      </div>
    </section>
  );
};

export default Resume;
