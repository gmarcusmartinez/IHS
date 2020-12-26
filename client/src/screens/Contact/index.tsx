import React from "react";
import data from "./data";
import emailjs from "emailjs-com";

const ContactScreen = () => {
  const { addressTitle, number, street, zip, country } = data.address;
  const { phone, fax } = data.contanct;

  function sendEmail(e: any) {
    e.preventDefault();
    const userKey = "user_IVSYmFFAkwd8HZF4iioPX";
    emailjs.sendForm("service_3bdpd0h", "template_04hy6sk", e.target, userKey);
    e.target.reset();
  }

  return (
    <div className="contact-screen">
      <span className="contact-screen__title">{data.title}</span>
      <span className="contact-screen__subtitle">{data.subtitle}</span>

      <form className="contact-screen__form" onSubmit={sendEmail}>
        <div className="contact-screen__form__title">{data.formTitle}</div>
        <input
          placeholder="Subject"
          type="text"
          className="contact-screen__form__text"
          name="subject"
        />
        <input
          placeholder="Name"
          type="text"
          className="contact-screen__form__text"
          name="name"
        />
        <input
          placeholder="Email"
          type="text"
          className="contact-screen__form__text"
          name="email"
        />
        <textarea
          placeholder="Message"
          className="contact-screen__form__textarea"
          name="message"
        ></textarea>
        <button className="contact-screen__form__btn">Send</button>
      </form>

      <span className="contact-screen__phone">Tel: {phone}</span>
      <span className="contact-screen__fax">Fax: {fax}</span>

      <div className="contact-screen__address">
        <div className="contact-screen__address__title">{addressTitle}</div>
        <div className="contact-screen__address__add">{number}</div>
        <div className="contact-screen__address__street">{street}</div>
        <div className="contact-screen__address__zip">{zip}</div>
        <div className="contact-screen__address__country">{country}</div>
      </div>

      <div className="contact-screen__edit">
        <div className="contact-screen__edit__info">{data.editorial}</div>
        <div className="contact-screen__edit__law">{data.law}</div>
        <div className="contact-screen__edit__name">{data.name}</div>
      </div>
    </div>
  );
};

export default ContactScreen;
