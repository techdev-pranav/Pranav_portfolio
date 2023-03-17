import React, { useState } from "react";

import { AppWrap, MotionWrap } from "../../Wrapper";
import { client } from "../../client";
import "./Footer.scss";
import { images } from "../../constants";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const { name, email, message } = formData;

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setIsLoading(true);

    const contact = {
      _type: "contactData",
      name: name,
      email: email,
      message: message,
    };

    client.create(contact).then(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Contact Me</h2>

      <div className="app__footer-body">
        <div className="app__footer-cards">
          <div className="app__footer-card">
            <img src={images.gmail} alt="Email" />
            <div>
              <p className="bold-text">Email</p>
              <p className="p-text">pk09.pranav@gmail.com</p>
            </div>
          </div>
          <div className="app__footer-card">
            <img src={images.telephone} alt="Phone" />
            <div>
              <p className="bold-text">Phone</p>
              <p className="p-text">+91 8178577597</p>
            </div>
          </div>
          <div className="app__footer-card">
            <img src={images.address} alt="Address" />
            <div>
              <p className="bold-text">Address</p>
              <p className="p-text">Varanasi, Uttar Pradesh</p>
            </div>
          </div>
        </div>

        {!isSubmitted ? (
          <div className="app__footer-form">
            <div className="app__flex">
              <input
                name="name"
                placeholder="Enter Name"
                className="p-text"
                type="text"
                value={name}
                onChange={handleOnChange}
              />
            </div>
            <div className="app__flex">
              <input
                name="email"
                type="text"
                placeholder="Enter Email"
                className="p-text"
                value={email}
                onChange={handleOnChange}
              />
            </div>
            <div className="app__flex">
              <textarea
                name="message"
                placeholder="Enter Message"
                className="p-text"
                value={message}
                onChange={handleOnChange}
              />
            </div>
            <button type="button" className="" onClick={handleSubmit}>
              {isLoading ? "Sending" : "Send Message"}
            </button>
          </div>
        ) : (
          <h3 className="head-text">Thank you for getting in touch!!</h3>
        )}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "Contact",
  "app__whitebg"
);
