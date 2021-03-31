import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import btc from "../images/btc.svg";
import arrow from "../images/arrow.svg";

const Signup = () => {
  return (
    <MainSignUp>
      <div className="form-container">
        <div className="info">
          <h2>Sign Up</h2>

          <p>Join our community in seconds</p>
          <p>
            Already a member? <Link to="/signin"> Sign In</Link>
          </p>
        </div>

        <form action="">
          <div className="firstname-div">
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Firstname"
            />
          </div>

          <div className="lastname-div">
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Lastname"
            />
          </div>

          <div className="email-div">
            <input type="email" name="email" id="email" placeholder="Email" />
          </div>

          <div className="submit-btn">
            <Button> Get Started</Button>
          </div>
        </form>
      </div>

      <div className="bg-image">
        <img className="btc" src={btc} alt="" />

        <div className="info">
          <h2>LEARN MORE ABOUT OUR MINING SERVICES</h2>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente
            voluptate, veniam quod ullam esse voluptatibus ut autem ea sit quae
            exercitationem in animi inventore, reprehenderit ducimus? Sed quod
            unde nisi nobis aspernatur dignissimos, assumenda et, ducimus saepe
            distinctio minus voluptatum!
          </p>

          <div className="btn-arrow">
            <img src={arrow} alt="" /> <span> Sign-up Today!</span>
          </div>
        </div>
      </div>
    </MainSignUp>
  );
};

const MainSignUp = styled(motion.div)`
  min-height: 100vh;
  display: flex;
  justify-content: space-between;

  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .bg-image {
    position: relative;
    background: #8dff5d;
    width: 50vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 900px) {
      width: 100%;
      height: 100%;
    }

    .btc {
      position: absolute;
      z-index: 1;
      top: 45%;
      transform: translateY(-50%);
      left: -9.7rem;
      width: 20rem;

      @media screen and (max-width: 900px) {
        display: none;
      }
    }

    .circut {
      position: absolute;
      z-index: 1;
    }

    .info {
      padding: 2rem;
      padding-left: 7rem;
      z-index: 2;

      @media screen and (max-width: 900px) {
        text-align: center;
        padding: 2rem;
      }

      h2 {
        font-size: 2.5rem;

        @media screen and (max-width: 900px) {
          font-size: 1.5rem;
        }
      }

      p {
        padding: 3rem 0rem;

        @media screen and (max-width: 900px) {
          padding-bottom: 0rem;
        }
      }

      .btn-arrow {
        display: flex;
        justify-content: flex-start;
        align-items: center;

        @media screen and (max-width: 900px) {
          display: none;
        }

        span {
          text-decoration: underline;
          cursor: pointer;
          font-weight: bold;
          &:hover {
            color: #ffffff;
          }
        }

        img {
          width: 5rem;
          margin-right: 1rem;
          margin-top: 0.2rem;
        }
      }
    }
  }

  .form-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50vw;

    @media screen and (max-width: 900px) {
      width: 100%;
    }

    .info {
      padding: 2rem 0rem;

      h2 {
        padding: 1rem;
        font-size: 2rem;
      }

      p {
        font-size: 0.9rem;
        color: #737373;
      }
    }

    div {
      padding: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    input {
      border: none;
      border-bottom: #737373 solid 1px;
      font-size: 1rem;
      padding: 0.3rem 1rem;
      width: 20rem;

      @media screen and (max-width: 900px) {
        width: 100%;
      }
    }

    textarea:focus,
    input:focus {
      outline: none;
    }

    .submit-btn {
      padding: 2rem 0rem;
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
`;

export default Signup;
