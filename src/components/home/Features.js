import React from 'react';
import styled from 'styled-components';

const FeaturesSection = styled.section`
  padding: 4rem 1rem;
  text-align: center;
  background: ${({ theme }) => theme.colors.background};
`;

const Title = styled.h2`
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 900;
  text-transform: uppercase;
  margin-bottom: 1rem;
  line-height: 1;
`;

const Subtitle = styled.h3`
  font-size: clamp(1rem, 3vw, 1.5rem);
  margin-bottom: 3rem;
`;

const IconGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const IconBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  font-size: clamp(0.875rem, 2vw, 1rem);
  line-height: 1.2;

  img {
    width: 60px;
    height: 60px;
    margin-bottom: 1rem;
  }
`;

const Features = () => {
  return (
    <FeaturesSection>
      <Title>WE ARE HERE TO MAKE SODA HEALTHIER AND NUTRITIOUS.</Title>
      <Subtitle>P.S. WITHOUT HIDING ANYTHING :)</Subtitle>
      
      <IconGrid>
        <IconBox>
          <img src="/images/low-sugar-icon.svg" alt="Low Sugar" />
          <div>Low<br />Sugar</div>
        </IconBox>
        <IconBox>
          <img src="/images/fibers-icon.svg" alt="Prebiotic Fibers" />
          <div>Prebiotic<br />Fibers</div>
        </IconBox>
        <IconBox>
          <img src="/images/calorie-icon.svg" alt="Low Calorie" />
          <div>Low<br />Calorie</div>
        </IconBox>
        <IconBox>
          <img src="/images/preservative-icon.svg" alt="No Preservatives" />
          <div>No<br />Preservatives</div>
        </IconBox>
      </IconGrid>
    </FeaturesSection>
  );
};

export default Features; 