import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const CardItem = (props) => {
  return (
    <MainCard>
      <li className="cards__item">
        <Link className="cards__item__link" to={props.path}>
          <figure className="cards__item__pic-wrap" data-category={props.label}>
            <img
              className="cards__item__img"
              alt={props.text}
              src={props.src}
            />
          </figure>
          <div className="cards__item__info">
            <h5 className="cards__item__text">{props.text}</h5>
          </div>
        </Link>
      </li>
    </MainCard>
  );
};

const MainCard = styled(motion.div)``;

export default CardItem;
