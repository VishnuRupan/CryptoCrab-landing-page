import React from "react";
import Cards from "../components/Cards";
import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import styled from "styled-components";
import { motion } from "framer-motion";
import InfoSection from "../components/InfoSection";
import Hype from "../components/Hype";

const Home = () => {
  return (
    <MainHome>
      <HeroSection />
      <InfoSection />
      <Cards />
      <Hype />
      <Footer />
    </MainHome>
  );
};

const MainHome = styled(motion.div)`
  overflow-x: hidden;
`;

export default Home;
