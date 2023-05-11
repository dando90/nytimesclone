import React from "react";
import { useEffect } from "react";
import SearchForm from "./SearchForm";
import "../assets/css/Menu.css";
import closeImage from "../assets/img/closeImage.svg";
import logo from "../assets/img/nytimes_logo.svg";
import { Link } from "react-router-dom";
import { allSections } from "../config";
import { useGlobalContext } from "../context";

function Menu() {
  const value = useGlobalContext();

  const sectionList = allSections.map((section, index) => (
    <li key={index}>
      <Link to={section.slug} onClick={() => value.menuToggle()}>
        {section.name}
      </Link>
    </li>
  ));

  useEffect(() => {
    document.body.style.overflowY = "hidden";
    return () => {
      document.body.style.overflowY = "";
    };
  }, []);

  return (
    <aside className="menu-container">
      <div className="menu-row">
        <img src={logo} alt="New York Times" />
      </div>
      <div className="menu-row">
        <SearchForm />
        <button className="close-menu-btn" onClick={() => value.menuToggle()}>
          <img src={closeImage} alt="Close Menu" />
        </button>
      </div>
      <div className="menu-row">
        <h1></h1>
        <ul className="allsections-list">{sectionList}</ul>
      </div>
    </aside>
  );
}

export default Menu;
