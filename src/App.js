import React from "react";
import { Routes, Route } from "react-router-dom";
import { useGlobalContext } from "./context";
import "./assets/css/App.css";
import { Header, Footer } from "./layout";
import { Home, Search, Section, Error } from "./pages";
import Menu from "./components/Menu";

function App() {
  const value = useGlobalContext();
  return (
    <main className="App">
      <Header />
      {value.state.isMenuOpen && <Menu />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="search" element={<Search />} />
        <Route path="section/:sectionName" element={<Section />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </main>
  );
}

export default App;
