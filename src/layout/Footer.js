import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Footer.css";

import logo from "../assets/img/nytimes_logo.svg";
import { homeSections } from "../config";

function Footer() {
  const sectionList = homeSections.map((section, index) => (
    <li key={index}>
      <Link to={section.slug} onClick={() => window.scrollTo(0, 0)}>
        {section.name}
      </Link>
    </li>
  ));

  return (
    <footer className="footer-container">
      <a href="/">
        <img src={logo} className="App-logo" alt="logo" />
      </a>
      <div className="footer-sections-container">
        <ul className="sections-list footer-list">{sectionList}</ul>
      </div>
      <div>© 2023 Stefano Chiabrando</div>
    </footer>
  );
}

export default Footer;
