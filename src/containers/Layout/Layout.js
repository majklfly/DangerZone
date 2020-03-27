import React, { useState } from "react";
import "./Layout.scss";
import { Link } from "react-router-dom";

import menuLogo from "../../assets/menuLogo.png";
import UserBoard from "../../components/UserBoard";

function ResponsiveNavigation({
  navLinks,
  background,
  hoverBackground,
  linkColor,
  logo
}) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [navOpen, setNavOpen] = useState(false);

  return (
    <div className="layout">
      <nav className="responsive-toolbar" style={{ background }}>
        <ul style={{ background }} className={navOpen ? "active" : ""}>
          <figure
            onClick={() => {
              setNavOpen(!navOpen);
            }}
          >
            <img
              src={menuLogo}
              height="40px"
              width="40px"
              alt="logo-nav-toggler"
            />
          </figure>
          {navLinks.map((link, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
              style={{
                background: hoverIndex === index ? hoverBackground || "" : ""
              }}
            >
              <i className={link.icon}></i>
              <Link
                to={link.path}
                style={{ color: linkColor }}
                onClick={link.action}
              >
                {link.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <UserBoard />
    </div>
  );
}

export default ResponsiveNavigation;
