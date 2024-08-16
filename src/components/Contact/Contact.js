import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import "../Projects/Project.css";
import "../Projects/Projects.css";

function Contact() {
  const formRef = useRef();
  const [buttonText, setButtonText] = useState("Send");

  const publicKey = "wa63NHJZjAAgjnuAd";
  const serviceID = "service_2njmbvs";
  const templateID = "template_2ww0hcc";

  emailjs.init(publicKey);

  const sendEmail = (e) => {
    e.preventDefault();
    setButtonText("Sending...");

    const inputFields = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      message: formRef.current.message.value,
    };

    emailjs
      .send(serviceID, templateID, inputFields)
      .then(() => {
        setButtonText("Message sent successfully");
        formRef.current.reset();
      })
      .catch((error) => {
        console.error(error);
        setButtonText("Something went wrong");
      });
  };

  return (
    <section id="contact">
      <h2>
        Contact <span className="highlight">Me</span>
      </h2>
      <div>
        <form id="contact-form" ref={formRef} onSubmit={sendEmail}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Your name..."
            required
          />
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="example@gmail.com"
            required
          />
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            placeholder="Your message..."
            required
          ></textarea>
          <button type="submit" className="btn">
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
