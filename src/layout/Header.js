import React from "react";
import "../assets/css/Header.css";
import { Link } from "react-router-dom";
import logo from "../assets/img/nytimes_logo.svg";
import { homeSections } from "../config";
import { useGlobalContext } from "../context";
import ShowDate from "../components/ShowDate";
import SearchForm from "../components/SearchForm";

function Header() {
  const value = useGlobalContext();

  const sectionList = homeSections.map((section, index) => (
    <li key={index}>
      <Link to={section.slug}>{section.name}</Link>
    </li>
  ));

  // mettere svg in file icons.js che ritorna i vari svg come jsx esportando un  funzione per ogni immagine
  return (
    <header className="navbar">
      <div className="nav-controls">
        <button type="button" className="nav-btn" onClick={value.menuToggle}>
          <svg height="16px" viewBox="0 0 16 16">
            <rect x="1" y="3" fill="#333" width="14" height="2"></rect>
            <rect x="1" y="7" fill="#333" width="14" height="2"></rect>
            <rect x="1" y="11" fill="#333" width="14" height="2"></rect>
          </svg>
        </button>
        <button type="button" className="nav-btn" onClick={value.searchToggle}>
          <svg height="16px" viewBox="0 0 16 16">
            <path
              fill="#333"
              d="M11.3,9.2C11.7,8.4,12,7.5,12,6.5C12,3.5,9.5,1,6.5,1S1,3.5,1,6.5S3.5,12,6.5,12c1,0,1.9-0.3,2.7-0.7l3.3,3.3c0.3,0.3,0.7,0.4,1.1,0.4s0.8-0.1,1.1-0.4c0.6-0.6,0.6-1.5,0-2.1L11.3,9.2zM6.5,10.3c-2.1,0-3.8-1.7-3.8-3.8c0-2.1,1.7-3.8,3.8-3.8c2.1,0,3.8,1.7,3.8,3.8C10.3,8.6,8.6,10.3,6.5,10.3z"
            ></path>
          </svg>
        </button>
        {value.state.isSearchOpen && !value.state.isMenuOpen && <SearchForm />}
      </div>
      <div className="nav-title">
        <div className="nav-left">
          <ShowDate />
          <Link className="todays-header" to={"/section/todayspaper"}>
            Today's Paper
          </Link>
        </div>
        <Link to={"/"}>
          <img src={logo} className="app-logo" alt="logo" />
        </Link>
        <div className="nav-right">React Project</div>
      </div>

      <nav className="sections-container">
        <ul className="sections-list">{sectionList}</ul>
      </nav>
    </header>
  );
}

export default Header;
