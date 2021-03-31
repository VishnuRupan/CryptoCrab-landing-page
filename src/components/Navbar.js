import { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [click, setClick] = useState(false);

  const [button, setButton] = useState(true);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  window.addEventListener("resize", showButton);

  const clickHandler = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  useEffect(() => {
    showButton();
  }, []);

  return (
    <MainNav>
      <div className="navbar-container">
        <NavLink to="/" className="navbar-logo">
          <span>
            {" "}
            Crypto<span class="logo-light">Crab</span>
          </span>{" "}
          <i class="fas fa-pastafarianism"></i>
        </NavLink>

        <div className="menu-icon" onClick={clickHandler}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>

        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink
              to="/investors"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Investors
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/about"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/signup"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Sign Up
            </NavLink>
          </li>
        </ul>

        {button && (
          <Button
            children={"SIGN UP"}
            buttonSize={"btn--medium"}
            buttonStyle={"btn--outline"}
          />
        )}
      </div>
    </MainNav>
  );
};

export default Navbar;

const MainNav = styled(motion.nav)`
  background: linear-gradient(90deg, rgb(9, 29, 0) 0%, rgb(26, 23, 23) 100%);
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 999;

  .navbar-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 60px;
    max-width: 1500px;
  }

  .navbar-logo {
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 1.4rem;
    display: flex;
    align-items: center;

    span {
      font-family: "Kanit", sans-serif;
      padding-right: 0.5rem;
      font-weight: 700;

      .logo-light {
        font-weight: lighter;
      }
    }
  }

  .fa-typo3 {
    margin-left: 0.5rem;
    font-size: 1.8rem;
  }

  .nav-menu {
    display: grid;
    grid-template-columns: repeat(4, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 60vw;
    justify-content: end;
    margin-right: 2rem;
  }

  .nav-item {
    height: 60px;
  }

  .nav-links {
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    padding: 0.5rem 1rem;
    height: 100%;
  }

  .nav-links:hover {
    border-bottom: 4px solid #68e035;
    transition: all 0.2s ease-out;
  }

  .fa-bars {
    color: #fff;
  }

  .nav-links-mobile {
    display: none;
  }

  .menu-icon {
    display: none;
  }

  button {
    font-size: 0.9rem;
    padding-top: 0.4rem;
    padding-bottom: 0.4rem;
  }

  @media screen and (max-width: 960px) {
    .NavbarItems {
      position: relative;
    }

    .nav-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 90vh;
      position: absolute;
      top: 60px;
      left: -100%;
      opacity: 1;
      transition: all 0.5s ease;
    }

    .nav-menu.active {
      background: #141414;
      left: 0;
      opacity: 0.97;
      transition: all 0.5s ease;
      z-index: 1;
    }

    .nav-links {
      text-align: center;
      padding: 2rem;
      width: 100%;
      display: table;
    }

    .nav-links:hover {
      background-color: #fff;
      color: #242424;
      border-radius: 0;
    }

    .navbar-logo {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(5%, 40%);
    }

    .menu-icon {
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      transform: translate(-100%, 30%);
      font-size: 1.8rem;
      cursor: pointer;
    }

    .fa-times {
      color: #fff;
      font-size: 2rem;
    }

    .nav-links-mobile {
      display: block;
      text-align: center;
      margin: 2rem auto;
      border-radius: 4px;
      width: 80%;
      text-decoration: none;
      font-size: 1.5rem;
      background-color: transparent;
      color: #fff;
      padding: 14px 20px;
      border: 1px solid #fff;
      transition: all 0.3s ease-out;
    }

    .nav-links-mobile:hover {
      background: #fff;
      color: #242424;
      transition: 250ms;
    }
  }
`;
