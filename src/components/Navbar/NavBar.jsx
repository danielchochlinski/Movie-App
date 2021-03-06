import React, { useState } from "react";
import "./NavBar.css";
import MenuIcon from "@mui/icons-material/Menu";
import {Link} from "react-router-dom"

const NavBar = () => {

  const [active, setActive] = useState("nav_menu");

  const navToggle = () => {
    active === "nav_menu"
      ? setActive("nav_active")
      : setActive("nav_menu");
      console.log("click")
  };

  return (
    <nav className="nav">
      <a href="">DCH</a>
      <ul className={active}>
        <li className="nav_item">
          <Link to="/">Home</Link>
        </li>
        <li className="nav_item">
          <Link to="/movies">Movies</Link>
        </li>
        <li className="nav_item">Series</li>
      </ul>
      <div onClick={navToggle} className="nav_toggle">
        <MenuIcon />
      </div>
    </nav>
  );
};

export default NavBar;
