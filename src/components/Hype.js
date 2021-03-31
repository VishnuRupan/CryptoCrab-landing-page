import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import headshot from "../images/headshot.jpg";
import Button from "./Button";

const Hype = () => {
  const quotes = [
    {
      title: "Bill Bates, CEO Macrosoft",
      idx: 0,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore aliquam laudantium nihil assumenda dolorumnemo, quo quam officia qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore aliquam laudantium nihil assumenda dolorumnemo, quo quam officia qui! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },

    {
      title: "Elon Tusk, CEO Tuskla",
      idx: 1,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore aliquam laudantium nihil assumenda dolorumnemo, quo quam officia qui! Lorem ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore aliquam laudantium nihil assumenda dolorumnemo, quo quam officia qui! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },

    {
      title: "Jeff Pesos, CEO Famazon",
      idx: 2,
      desc:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore aliquam laudantium nihil assumenda dolorumnemo, quo quam officia qui! Lorem ipsum dolor sit amet consectetur adipisicing elit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur tempore aliquam laudantium nihil assumenda dolorumnemo, quo quam officia qui! Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    },
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  const leftClick = () => {
    if (currentQuote.idx === 0) {
      setCurrentQuote(quotes[quotes.length - 1]);
    } else {
      setCurrentQuote(quotes[currentQuote.idx - 1]);
    }
  };

  const rightClick = () => {
    if (currentQuote.idx === 2) {
      setCurrentQuote(quotes[0]);
    } else {
      setCurrentQuote(quotes[currentQuote.idx + 1]);
    }
  };

  return (
    <MainHype>
      <motion.div className="quotes">
        <button onClick={leftClick}>
          <i class="fas fa-chevron-left"></i>
        </button>

        <AnimatePresence>
          <motion.div
            className="person-quote"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            key={currentQuote.idx}
            transition={{
              default: { duration: 1 },
            }}
          >
            <h3>{currentQuote.title}</h3>
            <p>" {currentQuote.desc} "</p>

            <Link to="/services"> Read More</Link>
          </motion.div>
        </AnimatePresence>

        <button onClick={rightClick}>
          <i class="fas fa-chevron-right"></i>
        </button>
      </motion.div>

      <div className="ceo-section">
        <img src={headshot} alt="headshot" />

        <div className="ceo-info">
          <h3>
            Tony Stark, <span>CEO CryptoCrab</span>
          </h3>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
            hic veritatis adipisci repudiandae excepturi perspiciatis eveniet
            ullam necessitatibus ex ea possimus aliquam natus quidem doloremque
            molestias, consequuntur quis optio dolores cumque quasi aut voluptas
            inventore! Eos vero mollitia inventore similique.
          </p>

          <Button
            className="btns"
            buttonStyle="btn--primary"
            buttonSize="btn--medium"
          >
            Learn More
          </Button>
        </div>
      </div>
    </MainHype>
  );
};

const MainHype = styled(motion.div)`
  background: white;

  .quotes,
  .ceo-section {
    min-height: 50vh;
    padding: 1rem 5rem;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 400px) {
      padding: 1rem;
    }
  }

  .ceo-section {
    @media screen and (max-width: 600px) {
      flex-direction: column;
    }

    img {
      border-radius: 100%;
      width: 15rem;
      height: 15rem;
      object-fit: cover;
      margin-right: 5rem;

      box-shadow: 10px -5px 0px 0 #8dff5d;

      @media screen and (max-width: 900px) {
        margin-right: 2rem;
      }

      @media screen and (max-width: 700px) {
        width: 10rem;
        height: 10rem;
        margin: 2rem 0rem;
      }
    }

    .ceo-info {
      padding: 2rem 3rem;

      span {
        font-weight: lighter;
        font-style: italic;
      }

      @media screen and (max-width: 900px) {
        padding: 2rem 1rem;
      }

      @media screen and (max-width: 600px) {
        text-align: center;
      }

      p {
        padding: 2rem 0rem;
        font-style: italic;
      }

      button {
        background: black;
        color: white;
        border-radius: 3px;
        transition: all 0.5s ease;

        &:hover {
          background: #8dff5d;
          color: black;
        }
      }
    }
  }

  .quotes {
    background: #8dff5d;
    .person-quote {
      padding: 2rem 5rem;

      @media screen and (max-width: 600px) {
        padding: 2rem 1rem;
      }
    }

    p {
      padding: 2rem 0rem;
      font-style: italic;
    }

    a {
      color: black;

      &:hover {
        color: #ffffff;
      }
    }

    button {
      border: none;
      background: none;
      text-align: center;
      padding: 0.6rem 1rem;
      border-radius: 5rem;
      font-size: 2rem;
      cursor: pointer;

      @media screen and (max-width: 600px) {
        font-size: 1rem;
      }
    }
  }
`;

export default Hype;
