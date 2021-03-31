import styled from "styled-components";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import Button from "./Button";

const Footer = () => {
  return (
    <MainFooter>
      <div className="footer-container">
        <section className="footer-subscription">
          <p className="footer-subscription-heading">
            Join our newsletter new blockchain developements.
          </p>
          <p className="footer-subscription-text">
            You can unsubscribe at any time.
          </p>
          <div className="input-areas">
            <form>
              <input
                className="footer-input"
                name="email"
                type="email"
                placeholder="Your Email"
              />
              <Button buttonStyle="btn--outline">Subscribe</Button>
            </form>
          </div>
        </section>
        <div class="footer-links">
          <div className="footer-link-wrapper">
            <div class="footer-link-items">
              <h2>About Us</h2>
              <Link to="/sign-up">How it works</Link>
              <Link to="/">Testimonials</Link>
              <Link to="/">Careers</Link>
              <Link to="/">Investors</Link>
              <Link to="/">Terms of Service</Link>
            </div>
            <div class="footer-link-items">
              <h2>Contact Us</h2>
              <Link to="/">Contact</Link>
              <Link to="/">Support</Link>
              <Link to="/">Destinations</Link>
              <Link to="/">Sponsorships</Link>
            </div>
          </div>
          <div className="footer-link-wrapper">
            <div class="footer-link-items">
              <h2>Videos</h2>
              <Link to="/">Submit Video</Link>
              <Link to="/">Ambassadors</Link>
              <Link to="/">Agency</Link>
              <Link to="/">Influencer</Link>
            </div>
            <div class="footer-link-items">
              <h2>Social Media</h2>
              <Link to="/">Instagram</Link>
              <Link to="/">Facebook</Link>
              <Link to="/">Youtube</Link>
              <Link to="/">Twitter</Link>
            </div>
          </div>
        </div>
        <section class="social-media">
          <div class="social-media-wrap">
            <div class="footer-logo">
              <Link to="/" className="social-logo">
                CryptoCrab
                <i class="fab fa-typo3" />
              </Link>
            </div>
            <small class="website-rights">CryptoCrab © 2020</small>
            <div class="social-icons">
              <Link
                class="social-icon-link facebook"
                to="/"
                target="_blank"
                aria-label="Facebook"
              >
                <i class="fab fa-facebook-f" />
              </Link>
              <Link
                class="social-icon-link instagram"
                to="/"
                target="_blank"
                aria-label="Instagram"
              >
                <i class="fab fa-instagram" />
              </Link>
              <Link
                class="social-icon-link youtube"
                to="/"
                target="_blank"
                aria-label="Youtube"
              >
                <i class="fab fa-youtube" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="Twitter"
              >
                <i class="fab fa-twitter" />
              </Link>
              <Link
                class="social-icon-link twitter"
                to="/"
                target="_blank"
                aria-label="LinkedIn"
              >
                <i class="fab fa-linkedin" />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </MainFooter>
  );
};

const MainFooter = styled(motion.div)`
  .footer-container {
    background-color: #0a0a0a;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .footer-subscription {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    margin-bottom: 24px;
    padding: 24px;
    color: #fff;
  }

  .footer-subscription-heading {
    margin-bottom: 0.5rem;
    font-size: 24px;
  }

  .footer-subscription-text {
    margin-bottom: 24px;
    font-size: 15px;
    font-weight: 300;
  }

  .footer-input {
    padding: 8px 20px;
    border-radius: 2px;
    margin-right: 10px;
    outline: none;
    border: none;
    font-size: 18px;
    margin-bottom: 16px;
    border: 1px solid #fff;
  }

  .footer-links {
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;
  }

  .footer-link-wrapper {
    display: flex;
  }

  .footer-link-items {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    width: 160px;
    box-sizing: border-box;

    @media screen and (max-width: 360px) {
      padding: 0.8rem 1rem;
      margin: 0rem;
      align-items: center;
      justify-content: center;
    }
  }

  .footer-link-items h2 {
    margin-bottom: 16px;

    @media screen and (max-width: 360px) {
      font-size: 1.2rem;
      text-align: center;
    }
  }

  .footer-link-items > h2 {
    color: #fff;
  }

  .footer-link-items a {
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
  }

  .footer-link-items a:hover {
    transition: 0.3s ease-out;
    color: #68e035;
  }

  .footer-email-form h2 {
    margin-bottom: 2rem;
  }

  .footer-input::placeholder {
    color: #b1b1b1;
  }

  /* Social Icons */
  .social-icon-link {
    color: #fff;
    font-size: 24px;
  }

  .social-media {
    max-width: 1000px;
    width: 100%;
  }

  .social-media-wrap {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;
  }

  .social-icons {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
  }

  .social-logo {
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
  }

  .website-rights {
    color: #fff;
    margin-bottom: 16px;
  }

  @media screen and (max-width: 820px) {
    .footer-links {
      padding-top: 2rem;
    }

    .footer-input {
      width: 100%;
    }

    .btn {
      width: 100%;
    }

    .footer-link-wrapper {
      flex-direction: column;
    }

    .social-media-wrap {
      flex-direction: column;
    }
  }

  @media screen and (max-width: 768px) {
  }

  a {
    @media screen and (max-width: 360px) {
      font-size: 0.8rem;
    }
  }
`;

export default Footer;
