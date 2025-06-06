// import { useState } from "react";
import "./Footer.css";
import { FaInstagram, FaWhatsapp, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";

function Footer() {
  return (
    <div className="footer">
      <div className="flex-container6">
        <div className="flex-item">
          <h4>Get In Touch</h4>
          <div>
            <li>
              <FaLocationDot className="iconsz" />
              6b Adebisi street, Alakuko, Lagos state.
            </li>
            {/* <li>
              <IoCall className="iconsz" />
              +2348069374133
            </li> */}
            <li>
              <IoIosMail className="iconsz" />
              Laughteriremide@gmail.com
            </li>
            <li>
              {" "}
              <div className="mid-foot">
                <a
                  href="https://github.com/BeLaughter"
                  aria-label="Visit my Github profile"
                  target="blank"
                >
                  <FaGithub className="iconsz" />
                </a>
                <a
                  href="http://Instagram.com/that.laughter"
                  aria-label="Visit my Instagram profile"
                  target="blank"
                >
                  <FaInstagram className="iconsz" />
                </a>
                <a
                  href="https://wa.link/yxwwka"
                  aria-label="Chat with me on WhatsApp"
                  target="blank"
                >
                  <FaWhatsapp className="iconsz" />
                </a>
                <a href="#" target="blank" aria-hidden="true">
                  <FaLinkedin className="iconsz" />
                </a>
              </div>
            </li>
          </div>
        </div>

        <div className="flex-item">
          <h4>Newsletter</h4>
          <p>Sign up today for the latest news and updates.</p>
          <input
            type="text"
            placeholder="Enter your E-mail"
            className="input-sub"
            required
          />
          <input type="submit" value="Subscribe" className="input-sub2" />
        </div>
      </div>
      <hr></hr>
      <div className="flex-container6">
        <p>©BENSON 2025. All Rights Reserved. Design by BlackFire_CODEX</p>
        <p>
          <span className="span">Privacy Policy</span>

          <span className="span">Terms Of Service</span>

          <span className="span">Cookie Policy</span>
        </p>
      </div>
    </div>
  );
}

export default Footer;
