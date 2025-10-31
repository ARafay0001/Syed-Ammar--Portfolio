import React, { useState } from "react";
import Styles from "./header.module.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className={Styles.header}>
      <nav className={Styles.navbar}>
        <div className={Styles.menuIcon} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
        <ul className={`${Styles.navLinks} ${menuOpen ? Styles.active : ""}`}>
          <li>
            <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          </li>
          <li>
            <a href="#gallery" onClick={() => setMenuOpen(false)}>Gallery</a>
          </li>
          <li>
            <a href="#services" onClick={() => setMenuOpen(false)}>Services</a>
          </li>
          <li>
            <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
