import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section className="contact">
      <h2>Contact Us</h2>
      <form
        action="https://formspree.io/f/your-form-id" // Replace with your actual Formspree ID
        method="POST"
      >
        <label>
          Name:
          <input type="text" name="name" placeholder="John Doe" required />
        </label>

        <label>
          Email:
          <input type="email" name="email" placeholder="email@website.com" required />
        </label>

        <label>Phone Number:
          <input type="tel" placeholder="555-555-5555" required />
        </label>

        <label>
          Message:
          <textarea name="message" rows="5" placeholder="Bro, I love your clothes!!" required></textarea>
        </label>

        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
