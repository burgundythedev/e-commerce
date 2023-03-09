import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.scss";
function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <nav className="footer__logo-box">
          <div className="footer__nav">
            <NavLink
              to="/"
              className={(navData) =>
                navData.isActive ? "footer__items_active" : "footer__items"
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/about"
              className={(navData) =>
                navData.isActive ? "footer__items_active" : "footer__items"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/products"
              className={(navData) =>
                navData.isActive ? "footer__items_active" : "footer__items"
              }
            >
              Products
            </NavLink>
            <NavLink
              to="/posts"
              className={(navData) =>
                navData.isActive ? "footer__items_active" : "footer__items"
              }
            >
              Posts
            </NavLink>
          </div>
        </nav>
        <div className="footer__text-box">
          <p className="footer__text">@developed by O.Bourgogne</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
