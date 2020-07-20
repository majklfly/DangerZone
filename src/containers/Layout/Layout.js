import React, { useState } from "react";
import "./Layout.scss";
import { Link } from "react-router-dom";

import DangerZoneLined from "../../assets/DangerZoneLined.svg";
import UserBoard from "../../components/UserBoard/UserBoard";

function ResponsiveNavigation({
  navLinks,
  background,
  hoverBackground,
  linkColor,
  logo,
}) {
  const [hoverIndex, setHoverIndex] = useState(-1);
  const [navOpen] = useState(false);

  return (
    <div className="layout">
      <nav className="responsive-toolbar" style={{ background }}>
        <ul style={{ background }} className={navOpen ? "active" : ""}>
          <Link to="/">
            <img
              src={DangerZoneLined}
              height="40px"
              width="40px"
              alt="logo-nav-toggler"
              className="LayoutIcon"
            />
          </Link>
          {navLinks.map((link, index) => (
            <li
              key={index}
              onMouseEnter={() => setHoverIndex(index)}
              onMouseLeave={() => setHoverIndex(-1)}
              style={{
                background: hoverIndex === index ? hoverBackground || "" : "",
              }}
            >
              <Link
                to={link.path}
                style={{ color: linkColor }}
                onClick={link.action}
              >
                <div className="navLinkItem">
                  <i className={link.icon}></i>
                  <div className="navLinkItemText">{link.text}</div>
                </div>
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
