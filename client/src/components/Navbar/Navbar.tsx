import React from "react";
import { Link } from "react-router-dom";

const headers = [
  { to: "/contact", text: "contact" },
  { to: "/login", text: "login" },
];

const renderLinks = () =>
  headers.map((h) => (
    <Link to={h.to} key={h.to} className="navbar__link">
      {h.text}
    </Link>
  ));
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="navbar__header">
        Institue for higher solutions
      </Link>
      <hr className="navbar__hr" />
      <div className="navbar__links">{renderLinks()}</div>
    </nav>
  );
};

export default Navbar;
