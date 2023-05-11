import React from "react";
import "../assets/css/Error.css";
import SearchForm from "../components/SearchForm";
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="error-container">
      <h1>Page Not Found</h1>
      <h3>
        We’re sorry, we seem to have lost this page, but we don’t want to lose
        you.
      </h3>
      <SearchForm />
      <Link to={"/"}>Back To Homepage</Link>
    </div>
  );
}

export default Error;
