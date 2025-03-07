import React, { useState } from "react";
import { Link } from "react-scroll";


const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            {/* Sidebar Toggle Button (Only for Mobile) */}
            <button className="sidebar-toggle d-xl-none" onClick={toggleSidebar}>
                <i className="bi bi-list"></i>
            </button>

            {/* Sidebar */}
            <header id="header" className={`header ${isOpen ? "open" : ""}`}>
                {/* Profile Image */}
                <div className="profile-img text-center">
                    <img src="./Img/my-profile-img.jpeg" alt="Profile" className="img-fluid rounded-circle" />
                </div>

                {/* Logo */}
                <div className="logo text-center">
                    <h1>Yagnik Joshi</h1>
                </div>

                {/* Social Links */}
                <div className="social-links text-center">
                    <a href="mailto:joshiyagnik13@gmail.com" className="email"><i className="bi bi-envelope"></i></a>
                    <a href="tel:9016891601" className="contact"><i className="bi bi-telephone"></i></a>
                    <a href="https://github.com/joshiyagnik" className="github" target="_blank" rel="noopener noreferrer"><i className="bi bi-github"></i></a>
                    <a href="https://linkedin.com/in/yagnikjoshi" className="linkedin" target="_blank" rel="noopener noreferrer"><i className="bi bi-linkedin"></i></a>
                </div>

                {/* Navigation Menu */}
                <nav className="navmenu">
                    <ul className="list-unstyled">
                        <li>
                            <Link
                                to="hero"
                                smooth={true}
                                duration={800}
                                spy={true}
                                activeClass="active"
                                className="nav-link" >
                                <i className="bi bi-house"></i> Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="about"
                                smooth={true}
                                duration={800}
                                spy={true}
                                activeClass="active"
                                className="nav-link">
                                <i className="bi bi-person"></i> About
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="skills"
                                smooth={true}
                                duration={800}
                                spy={true}
                                activeClass="active"
                                className="nav-link">
                                <i className="bi bi-code"></i> Skills
                            </Link>
                        </li>
                        <li>
                            <Link
                                to="resume"
                                smooth={true}
                                duration={800}
                                spy={true}
                                activeClass="active"
                                className="nav-link">
                                <i className="bi bi-file-earmark-text"></i> Resume
                            </Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
};

export default Header;
