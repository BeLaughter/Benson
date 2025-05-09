import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import "./Contactme.css";
function Contactme() {
  return (
    <div className="pad">
      <p id="contact" className="para">
        Get In Touch <br></br>
        <span className="title mb">Contact Me </span>
      </p>
      <div className="flex-container">
        <div className="flex-item-contact1">
          <h3 className="grey">Contact Info</h3>
          <p className="grey">
            I’d love to hear from you! Whether you’re interested in
            collaborating on a project, have questions, or just want to connect,
            feel free to reach out. I’m always open to new opportunities and
            conversations.
          </p>
          <ul>
            <li className="flex">
              <FaLocationDot className="iconsz me-4" />
              <p className="grey">
                Address<br></br>6b, Adebisi Alabi street,<br></br> Alakuko,
                Lagos State.
              </p>
            </li>
            <li className="flex">
              <IoCall className="iconsz me-4" />
              <p className="grey">
                Hotline<br></br>
                08069374133, 08053100515
              </p>
            </li>
            <li className="flex">
              <IoIosMail className="iconsz me-4" />
              <p className="grey">
                Email<br></br>Laughteriremide@gmail.com
              </p>
            </li>
          </ul>
        </div>
        <div className="flex-item-contact2">
          <h3 className="">Get In Touch</h3>
          <p>
            I aim to respond as quickly as possible and look forward to hearing
            from you soon!{" "}
          </p>
          <a href="http://Instagram.com/that.laughter" target="blank">
            <FaInstagram className="iconsz" />
          </a>
          <a href="https://wa.link/yxwwka" target="blank">
            <FaWhatsapp className="iconsz" />
          </a>
          <a href="https://github.com/BeLaughter" target="blank">
            <FaGithub className="iconsz" />
          </a>

          <div className="flex-container-input">
            <input
              type="text"
              className="input "
              name="name"
              placeholder="Enter your name"
              required
            ></input>
            <input
              type="text"
              className="input"
              placeholder="Enter your email"
              required
            ></input>
            <input
              type="text"
              className="input"
              placeholder="Website"
              required
            ></input>
          </div>
          <input
            type="text"
            className="comment"
            placeholder="comment"
            required
          ></input>
          <br></br>
          <input
            type="button"
            className="input-btn bgorange"
            value="SUBMIT"
            required
          ></input>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
