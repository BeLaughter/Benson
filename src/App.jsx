import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Projects from "./Pages/Projects";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { FaArrowUp } from "react-icons/fa6";
import { FaSun, FaMoon } from "react-icons/fa";
function App() {
  const [isDark, setIsDark] = useState(true);
  // Initialize AOS animations
  useEffect(() => {
    Aos.init();
  }, []);

  // Function to scroll to top when button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Add/remove display class to button when scrolled past 50% viewport height
  useEffect(() => {
    const handleScroll = () => {
      const btntop = document.querySelector(".b2top");
      if (btntop) {
        let scrollThreshold = window.innerHeight / 2;

        if (window.scrollY > scrollThreshold) {
          btntop.classList.add("display-btn");
        } else {
          btntop.classList.remove("display-btn");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className={isDark ? "dark-theme" : "light-theme"}>
      <div className="b2top">
        <a href="#totop" onClick={scrollToTop}>
          <FaArrowUp className="text-dark" />
        </a>
      </div>

      <Navbar />
      <div className="mt-3 me-3 topr">
        <a onClick={() => setIsDark(!isDark)} aria-label="Toggle dark mode">
          {isDark ? (
            <FaSun className="iconsz" size={20} color="gold" />
          ) : (
            <FaMoon className="iconsz" size={20} color="blue" />
          )}
        </a>
      </div>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
