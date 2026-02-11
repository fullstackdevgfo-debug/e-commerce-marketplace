import React from "react";
import "@/styles/Contact.css";

const Contact = () => {
  return (
    <section className="contact-section">
      <div className="contact-container">

        <div className="contact-header">
          <h1>Contact GFO Fire Equipments</h1>
          <p>Get fire safety solutions and support</p>
        </div>

        <div className="contact-content">

          <div className="contact-info">
            <h2>Reach Us At</h2>

            <div className="info-box">
              <span className="info-label">📍 Address:</span>
              <p>
                Shivay Complex, 2nd Floor, Near PNB Bank, Dwarka Sec 11 Metro
                Station, New Delhi, Delhi - 110078
              </p>
            </div>

            <div className="info-box">
              <span className="info-label">📞 Phone:</span>
              <p>011-45543035</p>
            </div>

            <div className="info-box">
              <span className="info-label">📱 WhatsApp:</span>
              <p>+91 8826132172, +91 9319312172</p>
            </div>

            <div className="info-box">
              <span className="info-label">✉️ Email:</span>
              <p>info@gfofireequipments.com</p>
            </div>
          </div>

          <div className="contact-form">
            <h2>Send Us a Message</h2>
            <form>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Full Name"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input
                  type="text"
                  id="phone"
                  name="phone"
                  placeholder="Your Phone"
                />
              </div>

              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Write your message here"
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-submit">
                Submit
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
