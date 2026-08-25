import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaPaperPlane, FaPhoneAlt } from "react-icons/fa";
import { MdEmail, MdLocationOn, MdAccessTime,} from "react-icons/md";
import "./contact.css";

function ContactSection() {
  const form = useRef();

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm(
      "service_6n8miuh",
      "template_jyhtow2",
      form.current,
      "9Xm8sOqQVDvArcNPu"
    ).then(
      function () {
        alert("Message sent successfully!");
        form.current.reset();
      },
      function (error) {
        alert("Failed to send message. Please try again.");
        console.log(error.text);
      }
    );
  }

  return (
    <section className="contact-container" id="contact">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-description">
        Ready to learn more about our caring community? Get in touch with us today to schedule a visit or ask any questions.
      </p>

      <div className="contact-content">
        <div className="contact-left">
          <h2>Get In Touch</h2>

          <div className="contact-item">
            <span className="icon"><FaPhoneAlt /></span>
            <div>
              <p><strong>Phone</strong></p>
              <p>214-612-7369</p>
              <p className="note">Available 24/7 for emergencies</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon"><MdEmail /></span>
            <div>
              <p><strong>Email</strong></p>
              <p>Info@sephusenterprises.com</p>
              <p className="note">We'll respond within 24 hours</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon"><MdLocationOn /></span>
            <div>
              <p><strong>Address</strong></p>
              <p>1900 Pacific Ave</p>
              <p className="note">Visit us for a personal tour</p>
            </div>
          </div>

          <div className="contact-item">
            <span className="icon">< MdAccessTime/></span>
            <div>
              <p><strong>Visiting Hours</strong></p>
              <p>Monday - Sunday: 9:00 AM - 6:00 PM</p>
              <p className="note">Tours available by appointment</p>
            </div>
          </div>

          <button className="call-btn"><FaPhoneAlt /> Call Us Now</button>
          <button className="blank-btn"></button>

        </div>

        <div className="contact-right">
          <h3>Send Us a Message</h3>
          <p>Fill out the form below and we'll get back to you as soon as possible.</p>

          <form ref={form} onSubmit={sendEmail}>
            <div className="form-group">
              <div>
                <label htmlFor="full_name">Full Name *</label>
                <input type="text" id="full_name" name="full_name" placeholder="Enter your full name" required />
              </div>
              <div>
                <label htmlFor="email">Email Address *</label>
                <input type="email" id="email" name="email" placeholder="Enter your email" required />
              </div>
            </div>

            <div className="form-group">
              <div>
                <label htmlFor="phone">Phone Number</label>
                <input type="text" id="phone" name="phone" placeholder="Enter your phone number" />
              </div>
              <div>
                <label htmlFor="subject">Subject *</label>
                <input type="text" id="subject" name="subject" placeholder="What is this regarding?" required />
              </div>
            </div>

            <div className="form-textarea">
              <label htmlFor="message">Message *</label>
              <textarea id="message" name="message" placeholder="Tell us about your needs, questions, or how we can help..." required></textarea>
            </div>

            <button type="submit" className="send-btn"> <FaPaperPlane /> Send Message</button>
            <p className="privacy-note">* Required fields. We respect your privacy and will never share your information.</p>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
