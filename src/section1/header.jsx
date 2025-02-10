import { useState } from "react";
import "./header.css";
import logo from "../images/logo.svg";
import closeIcon from "../images/icon-close.svg"; 

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg navbar-light">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" />
        </a>

        {/* Custom Toggler Button */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Desktop Navigation Items */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item active">
              <a className="nav-link text-white" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Careers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Events
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Support
              </a>
            </li>
          </ul>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="mobile-menu-overlay">
          <div className="mobile-menu-header">
            <img src={logo} alt="logo" className="mobile-menu-logo" />
            <button className="close-button" onClick={toggleMenu}>
              <img src={closeIcon} alt="close" />
            </button>
          </div>
          <ul className="mobile-menu-items">
            <li>
              <a href="#" onClick={toggleMenu}>
                About
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                Careers
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                Events
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                Products
              </a>
            </li>
            <li>
              <a href="#" onClick={toggleMenu}>
                Support
              </a>
            </li>
          </ul>
        </div>
      )}

      <h1 className="header-title">
        IMMERSIVE <br /> EXPERIENCES <br />
        THAT DELIVER
      </h1>
    </header>
  );
}

export default Header;