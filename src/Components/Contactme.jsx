import { useState } from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaGithub, FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import "./Contactme.css";
function Contactme() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    website: "",
    comment: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.comment) {
      setMessage("Please fill in all required fields.");
      return;
    }

    setMessage("Submitted successfully ✅");
    // You can send form data here (e.g. via EmailJS, API, etc.)

    // Clear form fields
    setFormData({
      name: "",
      email: "",
      website: "",
      comment: "",
    });
    // Optionally remove message after a few seconds
    setTimeout(() => setMessage(""), 3000);
  };
  return (
    <div className="pad">
      <p
        id="contact"
        className="para"
        data-aos="zoom-in-up"
        data-aos-easing="ease-in-cubic"
        data-aos-delay="300"
        data-aos-duration="1500"
      >
        Get In Touch <br></br>
        <span className="title ">Contact Me </span>
      </p>
      <div className="flex-container mt-4">
        <div
          className="flex-item-contact1 mt-4"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-cubic"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
          <h3 className="mt-3 ">Contact Info</h3>
          <p>
            I’d love to hear from you! Whether you’re interested in
            collaborating on a project, have questions, or just want to connect,
            feel free to reach out. I’m always open to new opportunities and
            conversations.
          </p>
          <div>
            <li className="flex">
              <FaLocationDot className="iconsz me-4" />
              <p>
                Address<br></br>6b, Adebisi Alabi street,<br></br> Alakuko,
                Lagos State.
              </p>
            </li>
            <li className="flex">
              <IoCall className="iconsz me-4" />
              <p>
                Hotline<br></br>
                08069374133, 08053100515
              </p>
            </li>
            <li className="flex">
              <IoIosMail className="iconsz me-4" />
              <p>
                Email<br></br>Laughteriremide@gmail.com
              </p>
            </li>
          </div>
        </div>
        <div
          className="flex-item-contact2"
          data-aos="zoom-in-up"
          data-aos-easing="ease-in-cubic"
          data-aos-delay="300"
          data-aos-duration="1500"
        >
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

          <form onSubmit={handleSubmit}>
            <div className="flex-container-input">
              <input
                type="text"
                name="name"
                className="input"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                className="input"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="website"
                className="input"
                placeholder="Website"
                value={formData.website}
                onChange={handleChange}
              />
            </div>
            <textarea
              name="comment"
              placeholder="Comment"
              className="comment"
              value={formData.comment}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="input-btn bgorange">
              SUBMIT
            </button>

            {message && <p className="form-message">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contactme;
