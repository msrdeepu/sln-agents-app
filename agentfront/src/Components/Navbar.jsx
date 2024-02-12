import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";
//icons
import { MdAccountCircle } from "react-icons/md";
//logo
import SlnLogo from "../../public/assets/sln-logo.png";

const Navbar = () => {
  return (
    <div className="main-container">
      <img className="nav-brand-logo" src={SlnLogo} />
      <nav className="nav-items-container">
        <ul className="nav-items-container-ul">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/business">
              Business
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              Profile
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
