import React, { useEffect } from "react";
import { useRef } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../assets/css/SearchForm.css";
import { useGlobalContext } from "../context";

//usare useref per fare autofocus con useeffect e refcontainer.current.focus()
//11:29:15 ottimizzazione onchange per evitare re-renders continui

function SearchForm() {
  const value = useGlobalContext();
  const searchRef = useRef();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    searchRef.current.value = searchParams.get("query");
  }, [searchParams]);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value.state.isMenuOpen) value.menuToggle();
    if (searchRef.current.value === "") return;
    if (searchRef.current.value === searchParams.get("query")) return;
    navigate(`/search/?query=${searchRef.current.value}`, { replace: true });
  };

  return (
    <form
      className="nav-search-form"
      method="GET"
      action="/search"
      onSubmit={handleSubmit}
    >
      <div className="nav-search-container">
        <input
          className="nav-search-input"
          type="text"
          placeholder="SEARCH"
          name="query"
          ref={searchRef}
        ></input>
        <input className="nav-search-clear" type="reset" value="CLEAR"></input>
      </div>

      <button className="nav-search-btn" type="submit">
        GO
      </button>
    </form>
  );
}

export default SearchForm;
