import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import bitcoin from "../images/bitcoin.svg";
import house from "../images/house.svg";
import servers from "../images/servers.svg";

const InfoSection = () => {
  const infoItems = [
    {
      img: bitcoin,
      title: "Bitcoin",
      desc:
        "Bitcoin is the first and largest cryptocurrency. To date, 18.1 million bitcoin exist and only 21 million bitcoin will ever exist.",
    },
    {
      img: house,
      title: "Blockchain",
      desc:
        "Blockchain is a cloud based digital public ledger where bitcoin transactions are grouped together and maintained by a community of users.",
    },

    {
      img: servers,
      title: "Mining",
      desc:
        "Mining, the process required to secure the blockchain, verifies transactions by solving a difficult mathematical puzzle.",
    },
  ];

  return (
    <MainInfo>
      <div className="investor-section">
        <div className="tickers">
          <h3>TSX: CCYPO</h3>
          <h3>NYSE: CCYPO</h3>
        </div>

        <p>
          CryptoCrab is a cryptocurrency mining company focused on mining
          bitcoin.
        </p>
        <Link to="/services">Learn More about CryptoCrab</Link>
      </div>

      <div className="info-section">
        {infoItems.map((item, idx) => (
          <div key={idx}>
            <img src={item.img} alt={item.title}></img>
            <h4>{item.title}</h4>

            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </MainInfo>
  );
};

export default InfoSection;

const MainInfo = styled(motion.div)`
  background: white;
  display: flex;
  flex-direction: column;

  .investor-section {
    min-height: 50vh;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: 100%;

    p {
      padding: 2rem 2rem;
      color: #202020;
      text-align: center;
    }

    a {
      font-weight: lighter;
      color: #68e035;
      text-align: center;
      padding-bottom: 2rem;

      &:hover {
        color: #4dff00;
      }
    }

    .tickers {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      padding-top: 2rem;

      @media screen and (max-width: 620px) {
        flex-direction: column;
      }

      h3 {
        padding: 0rem 4rem;
        font-size: 2rem;
        white-space: nowrap;
        @media screen and (max-width: 720px) {
          padding: 0.5rem 2rem;
        }
        @media screen and (max-width: 300px) {
          font-size: 1.5rem;
        }
      }
    }
  }

  .info-section {
    background: #8dff5d;
    min-height: 50vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0rem 5rem;

    @media screen and (max-width: 1024px) {
      padding: 0rem 2rem;
    }

    @media screen and (max-width: 720px) {
      padding: 2rem 0rem;
      flex-direction: column;
    }

    div {
      padding: 0rem 2rem;

      @media screen and (max-width: 720px) {
        padding: 2rem 2rem;
      }
    }
  }

  h4 {
    padding: 1rem 0rem;
    font-size: 1.5rem;
  }

  img {
    width: 5rem;

    @media screen and (max-width: 720px) {
      width: 3rem;
    }
  }
`;
