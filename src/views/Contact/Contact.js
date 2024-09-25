import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import "./Contact.css";
import contact from "./contact-image.png";
import Tooltip from "../../components/MediaLink/MediaLink";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const contactHandle = () => {
    if (name && email && message) {
      toast.success("Message Sent Successfully");
      localStorage.setItem(
        "contact",
        JSON.stringify({ name, email, message })
        
      );
      setEmail("");
      setName("");
      setMessage("");
    } else {
      toast.error("Please fill all the fields");
    }
  };

  return (
    <div id="contact">
      <h1 className="contact-heading">Contact</h1>
      <h2 className="auth-description contact-description">
        Feel free to reach out by submitting the form below ✍️,
        <br /> and I'll respond as soon as possible ⏳.
      </h2>
      <div className="contact-container">
        <div className="auth-input-container">
          <input
            type="text"
            placeholder="Enter Your Name"
            className="input-box"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="Enter your Email"
            className="input-box"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <textarea
            placeholder="Enter your Message"
            className="textarea-box"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button className="auth-btn contact-btn" onClick={contactHandle}>
            Submit
          </button>
        </div>
        <div>
          <img src={contact} className="contact-image" alt="" />
        </div>
      </div>
      <div className="tooltip">
      <Tooltip/>
      </div>
      <Toaster />
    </div>
  );
}

export default Contact;
