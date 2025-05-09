import "bootstrap/dist/js/bootstrap.bundle.min"; // Ensure Bootstrap JS is loaded
import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";
import { FaLaptopCode } from "react-icons/fa6";

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false); // Track navbar open/close

  // Toggle Navbar
  const toggleNavbar = () => {
    setNavbarOpen(!navbarOpen);
  };

  // Close Navbar when clicking a link
  const closeNavbar = () => {
    setNavbarOpen(false);
  };
  //Event listener for addiing and removing fixed class to navbar
  window.addEventListener("scroll", function () {
    let navbar = document.querySelector(".navbar");
    let sticky = navbar.offsetTop;

    if (window.scrollY > sticky) {
      navbar.classList.add("fixed-nav");
    } else {
      navbar.classList.remove("fixed-nav");
    }
  });
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        {/* Brand */}
        <h1 className="navbar-brand me-auto">
          <FaLaptopCode className="bk-icon" />
          BENSON
        </h1>

        {/* Navbar Toggle Button */}
        <button
          className="navbar-toggler btn "
          type="button"
          onClick={toggleNavbar} // Handle navbar open/close manually
          aria-expanded={navbarOpen}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Items */}
        <div className={`collapse navbar-collapse ${navbarOpen ? "show" : ""}`}>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link to="/" className="nav-link active" onClick={closeNavbar}>
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link" onClick={closeNavbar}>
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/projects" className="nav-link" onClick={closeNavbar}>
                Projects
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link" onClick={closeNavbar}>
                Contact Me
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
