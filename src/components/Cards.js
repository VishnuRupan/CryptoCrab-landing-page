import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import CardItem from "./CardItem";

import investor from "../images/investor.jpg";
import green from "../images/green.jpg";
import btc from "../images/btc.jpg";
import servers from "../images/servers.jpg";

const Cards = () => {
  const cryptoOne = [
    {
      label: "Investors",
      text: "Join our growing investory and crypto community",
      src: investor,
      path: "/services",
    },

    {
      label: "Miner",
      text: "Performance and monitoring platform & in-house miner repair lab",
      src: servers,
      path: "/services",
    },
  ];

  const cryptoTwo = [
    {
      label: "Green",
      text: "Competitively priced, reliable, green hydroelectricity",
      src: green,
      path: "/services",
    },

    {
      label: "Cost",
      text: "On-staff electricians provide cost-effective and timely buildouts",
      src: btc,
      path: "/services",
    },
  ];

  return (
    <MainCard>
      <h1> Learn More About Our Crypto Services</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            {cryptoOne.map((item, idx) => (
              <CardItem
                src={item.src}
                text={item.text}
                label={item.label}
                path={item.path}
                key={idx}
              />
            ))}
          </ul>
          <ul className="cards__items">
            {cryptoTwo.map((item, idx) => (
              <CardItem
                src={item.src}
                text={item.text}
                label={item.label}
                path={item.path}
                key={idx}
              />
            ))}
          </ul>
        </div>
      </div>
    </MainCard>
  );
};

export default Cards;

const MainCard = styled(motion.div)`
  padding: 4rem;

  h1 {
    text-align: center;
    color: white;
  }

  .cards__container {
    display: flex;
    flex-flow: column;
    align-items: center;
    max-width: 1120px;
    width: 100%;
    margin: 0 auto;
  }

  .cards__wrapper {
    position: relative;
    margin: 50px 0 45px;
  }

  .cards__items {
    margin-bottom: 24px;
  }

  .cards__item {
    display: flex;
    flex: 1;
    margin: 0 1rem;
    border-radius: 10px;
    width: 30rem;
    height: 100%;
  }

  .cards__item__link {
    display: flex;
    flex-flow: column;
    width: 100%;
    box-shadow: 0 6px 20px rgba(56, 125, 255, 0.17);
    -webkit-filter: drop-shadow(0 6px 20px rgba(56, 125, 255, 0.017));
    filter: drop-shadow(0 6px 20px rgba(72, 255, 11, 0.017));
    border-radius: 10px;
    overflow: hidden;
    text-decoration: none;
    background: white;
    transition: all 1s ease;
  }

  .cards__item__pic-wrap {
    position: relative;
    width: 100%;
    padding-top: 67%;
    overflow: hidden;
  }

  .fade-img {
    animation-name: fade-img;
    animation-duration: 2s;
  }

  .cards__item__img {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    display: block;
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 100%;
    object-fit: cover;
    transition: all 0.5s ease;
  }

  .cards__item__img:hover {
    transform: scale(1.1);
  }

  .cards__item__info {
    padding: 20px 30px 30px;
    background: white;
  }

  .cards__item__text {
    color: #000000;
    font-size: 18px;
    line-height: 24px;
  }

  @media only screen and (min-width: 1200px) {
    .content__blog__container {
      width: 84%;
    }
  }

  @media only screen and (min-width: 1024px) {
    .cards__items {
      display: flex;
    }
  }

  @media only screen and (max-width: 1124px) {
    .cards__item {
      margin-bottom: 2rem;
      width: 25rem;
      height: 100%;
    }
  }

  @media only screen and (max-width: 1024px) {
    .cards__item {
      margin-bottom: 2rem;
      width: 20rem;
      height: 100%;
    }
  }

  @media only screen and (max-width: 554px) {
    .cards__item {
      margin-bottom: 2rem;
      width: 15rem;
      height: 100%;
    }
  }
`;
