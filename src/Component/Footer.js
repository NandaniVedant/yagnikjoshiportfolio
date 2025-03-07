import React, { useEffect, useState } from "react";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);


  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <footer id="footer" className="footer position-relative light-background">
      <div className="container">
        <div className="copyright text-center">
          <p>
            © <span>Copyright</span> <strong className="px-1 sitename">Yagnik Joshi</strong>{" "}
            <span>All Rights Reserved</span>
          </p>
        </div>
        <div className="credits">
          Designed by <a href="#">Yagnik Joshi</a>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <button
        id="scroll-top"
        className={`scroll-top d-flex align-items-center justify-content-center ${isVisible ? "active" : ""}`}
        onClick={scrollToTop}
      >
        <i className="bi bi-arrow-up-short"></i>
      </button>
    </footer>
  );
};

export default Footer;
