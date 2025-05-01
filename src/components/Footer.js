import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        &copy; {new Date().getFullYear()} Urban Stitch. All rights reserved.
      </p>
      <div className="socials">
        <a href="https://instagram.com" aria-label="Instagram">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://twitter.com" aria-label="X/Twitter">
          <FontAwesomeIcon icon={faXTwitter} />
        </a>
        {/* <a href="mailto:info@urbanstitch.com" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} />
        </a> */}
        <Link to="/contact" aria-label="Email">
          <FontAwesomeIcon icon={faEnvelope} />
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
