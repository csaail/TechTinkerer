import React, { useState } from "react";
import { Sling as Hamburger } from "hamburger-react";
import "./Header.css";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">ATUL</div>
        <nav>
          <ul>
            <li>
              <div className="menu-container">
                {/* Replace the anchor tag with a button for better accessibility */}
                <button
                  className="menu-button"
                  onClick={() => setOpen(!isOpen)}
                  aria-expanded={isOpen}
                >
                  MENU
                </button>
                <div className="hamburger">
                  <Hamburger toggled={isOpen} toggle={setOpen} />
                </div>
              </div>
            </li>
          </ul>
        </nav>
      </header>

      {/* Full screen overlay menu */}
      {isOpen && (
        <div className="menu-overlay">
          <div className="menu-content">
            {/* Add the CLOSE text before the Hamburger icon */}
            <div className="close" onClick={() => setOpen(false)}>
              <span>CLOSE</span>
              <Hamburger toggled={isOpen} toggle={setOpen} />
            </div>
            <ul>
              <li>Home</li>
              <li>Portfolio</li>
              <li>IOT Projects</li>
              <li>3D Printing</li>
              <li>3D Designing</li>
              <li>Custom Requirement</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
