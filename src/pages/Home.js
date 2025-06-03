import React from 'react';
import styled from 'styled-components';
import Hero from '../components/home/Hero';
import About from '../components/home/About';
import Product from '../components/home/Product';
import Contact from '../components/home/Contact';

const HomeContainer = styled.div`
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Home = () => {
  return (
    <HomeContainer>
      <Hero />
      <About />
      <Product />
      <Contact />
    </HomeContainer>
  );
};

export default Home; 