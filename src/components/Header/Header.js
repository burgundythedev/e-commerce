import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";
import foo from "../../images/foo.png";
function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo-box">
          <Link to="/">
            <img className="header__logo" src={foo} alt="logo" />
          </Link>
        </div>
        <div className="header__nav">
          <NavLink
            to="/"
            className={(navData) =>
              navData.isActive ? "header__items_active" : "header__items"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="about"
            className={(navData) =>
              navData.isActive ? "header__items_active" : "header__items"
            }
          >
            About
          </NavLink>
          <NavLink
            to="products"
            className={(navData) =>
              navData.isActive ? "header__items_active" : "header__items"
            }
          >
            Products
          </NavLink>
          <NavLink
            to="posts"
            className={(navData) =>
              navData.isActive ? "header__items_active" : "header__items"
            }
          >
            Posts
          </NavLink>
        </div>
      </div>
    </header>
  );
}

export default Header;
