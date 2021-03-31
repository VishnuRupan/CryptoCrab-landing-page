import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Button from "./Button";
import mountain from "../images/mountain.mp4";

const HeroSection = () => {
  return (
    <MainHero>
      <div className="hero-container">
        <video src={mountain} autoPlay loop muted id="vid" />
        <h1>COMPUTING POWER</h1>
        <p>
          CryptoCrab is a blockchain infrastructure company that operates
          cryptocurency mining operations
        </p>
        <div className="hero-btns">
          <Button
            className="btns"
            buttonStyle="btn--outline"
            buttonSize="btn--large"
          >
            DISCOVER
          </Button>
          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--large"
          >
            GET STARTED
          </Button>
        </div>
      </div>
    </MainHero>
  );
};

const MainHero = styled(motion.div)`
  position: relative;
  video {
    object-fit: cover;
    width: 100%;
    height: 100%;
    position: fixed;
    z-index: -1;
  }

  .hero-container {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
    object-fit: cover;
    text-align: center;
    padding: 0rem 1rem;
  }

  .hero-container > h1 {
    color: #fff;
    font-size: 5rem;
    font-weight: 700;
    margin-top: -100px;
    text-align: center;
  }

  .hero-container > p {
    margin-top: 8px;
    color: #fff;
    font-size: 25px;
    font-weight: 300;
    text-align: center;
    padding: 1.5rem 0rem;
  }

  .hero-btns {
    margin-top: 32px;
  }

  .hero-btns .btn {
    margin: 6px;
  }

  .fa-play-circle {
    margin-left: 4px;
  }

  @media screen and (max-width: 960px) {
    .hero-container > h1 {
      font-size: 3.5rem;

      margin-top: -150px;
    }
  }

  @media screen and (max-width: 768px) {
    .hero-container > h1 {
      font-size: 2rem;
      margin-top: -100px;
    }

    .hero-container > p {
      font-size: 0.95rem;
      line-height: 1.4rem;
    }

    .btn-mobile {
      display: block;
      text-decoration: none;
    }

    .btn {
      width: 100%;
    }
  }
`;

export default HeroSection;
