import React from 'react';
import './ContactUs.css';
import Navbar from '../Includes/Navbar';
import Footer from '../Includes/Footer';

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      {/* Google Map Section */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3620.082101572202!2d67.06789367401184!3d24.861045345236708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f24452b63bd%3A0x6541078cce9d7da4!2sMAJU%20-%20Computing%20and%20Engg.%20Block%20(Block%20D)!5e0!3m2!1sen!2s!4v1711995098727!5m2!1sen!2s"
          style={{ width: '100%', height: '100%' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <div className="contact-container">
          <div className="contact-heading">
            <h6>CONTACT</h6>
            <h2>Get in Touch</h2>
            <p>
              Send us a message or contact us via email and our team will be
              ready to assist you with any queries or issues!
            </p>
          </div>

          <div className="contact-info">
            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0"></path>
                  <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z"></path>
                </svg>
              </div>
              <h3>Our Address</h3>
              <p>NASTP, Main Shahrah-e-Faisal</p>
              <p>Karachi, Sindh</p>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                  <path d="M15 7a2 2 0 0 1 2 2"></path>
                  <path d="M15 3a6 6 0 0 1 6 6"></path>
                </svg>
              </div>
              <h3>Contact</h3>
              <p>Mobile: +92 344-8302253</p>
              <p>Email: <a href="mailto:eshalmerab1@gmail.com">eshalmerab1@gmail.com</a></p>
            </div>
            <div className="info-item">
              <div className="info-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                  <path d="M12 7v5l3 3"></path>
                </svg>
              </div>
              <h3>Working Hours</h3>
              <p>Monday - Friday: 08:00 - 17:00</p>
              <p>Saturday & Sunday: 08:00 - 12:00</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form">
            <h2>Ready to Get Started?</h2>
            <form id="contactForm" action="submit_contact.php" method="post">
              <div>
                <input type="text" id="name" name="name" placeholder="Your name" required />
                <input type="email" id="email" name="email" placeholder="Your email address" required />
                <input type="text" id="subject" name="subject" placeholder="Subject (Optional)" />
                <textarea id="textarea" name="textarea" rows="5" placeholder="Write your message..." required></textarea>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer/>
    </div>
  );
};

export default ContactUs;
