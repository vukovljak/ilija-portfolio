import React from "react";
import "../App.css";
import logo from "../img/logo.png"; // zameni sa tvojom slikom/logom

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <img src={logo} alt="Logo" className="footer-logo" />
      </div>

      <div className="footer-right">
         <div className="footer-column">
          <h4>CONTACT</h4>
          <a href="https://www.linkedin.com/in/ilija-vukovljak/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:ilija.vukovljak@hotmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
}
