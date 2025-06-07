import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const StorySection = styled.div`
  margin-bottom: 6rem;
  text-align: center;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
  line-height: 1.2;
`;

const StoryText = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.2rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};

  p {
    margin-bottom: 1.5rem;
  }
`;

const FounderImage = styled(motion.img)`
  width: 100%;
  max-width: 500px;
  border-radius: 30px;
  box-shadow: ${({ theme }) => theme.shadows.large};
  margin: 0 auto;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

const FounderSection = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin: 6rem auto;
  align-items: center;
  padding: 3rem;
  background: linear-gradient(45deg, 
    rgba(46, 139, 87, 0.15) 0%, 
    rgba(46, 139, 87, 0.25) 50%, 
    rgba(46, 139, 87, 0.15) 100%
  );
  backdrop-filter: blur(10px);
  border-radius: 30px;
  box-shadow: 
    0 8px 32px 0 rgba(46, 139, 87, 0.15),
    inset 0 -2px 8px rgba(255, 255, 255, 0.2),
    inset 0 2px 8px rgba(46, 139, 87, 0.1);
  border: 1px solid rgba(46, 139, 87, 0.25);
  max-width: 1200px;
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(to right, 
        rgba(255, 255, 255, 0.3) 0%, 
        rgba(255, 255, 255, 0.1) 50%,
        rgba(255, 255, 255, 0.3) 100%
      ),
      radial-gradient(
        circle at top right,
        rgba(46, 139, 87, 0.2) 0%,
        transparent 50%
      ),
      radial-gradient(
        circle at bottom left,
        rgba(46, 139, 87, 0.2) 0%,
        transparent 50%
      );
    z-index: 0;
    mix-blend-mode: overlay;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      linear-gradient(to bottom, 
        rgba(46, 139, 87, 0.1) 0%,
        transparent 50%,
        rgba(46, 139, 87, 0.1) 100%
      ),
      repeating-linear-gradient(
        45deg,
        rgba(255, 255, 255, 0.05) 0%,
        rgba(255, 255, 255, 0.05) 2px,
        transparent 2px,
        transparent 4px
      );
    z-index: 0;
    opacity: 0.8;
  }

  &:hover {
    background: linear-gradient(45deg, 
      rgba(46, 139, 87, 0.18) 0%, 
      rgba(46, 139, 87, 0.28) 50%, 
      rgba(46, 139, 87, 0.18) 100%
    );
    transition: all 0.3s ease-in-out;

    ${FounderImage} {
      transform: scale(1.02) rotate(1deg);
    }
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 2rem;
  }
`;

const FounderContent = styled(motion.div)`
  h3 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 900;
    background: linear-gradient(45deg, ${({ theme }) => theme.colors.primary}, #4ECDC4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2rem;
    position: relative;
    
    &:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 4px;
      background: linear-gradient(to right, ${({ theme }) => theme.colors.primary}, #4ECDC4);
      border-radius: 2px;

      @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
        left: 50%;
        transform: translateX(-50%);
      }
    }
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: ${({ theme }) => theme.colors.text};
    opacity: 0.9;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 3rem;
  margin-top: 60px;
  text-align: center;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ValueCard = styled.div`
  padding: 30px;
  background: white;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);

  .emoji {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.2rem;
    color: #333;
    margin-bottom: 0.5rem;
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <StorySection>
          <SectionTitle>From Cravings. Built Without Compromise.</SectionTitle>
          <StoryText>
            <p>
              Most fizzy drinks are fun — until you read the label. Sugar bombs. Chemical sweeteners. 
              Fake flavours. Preservatives you can't pronounce. We were done with it.
            </p>
            <p>
              That's where SIRIK comes in. We're not here to cancel soda — we're here to redefine it.
            </p>
            <p>
              SIRIK is a new-age carbonated drink built for people who want the fizz, the flavour, 
              the vibe — without the guilt. We use real, natural ingredients like Nannari root, 
              known for its cooling and gut-friendly properties, and pair it with zero sugar, 
              no preservatives, prebiotics, and clean flavours that actually taste good.
            </p>
            <p>
              Whether you're finishing a workout, grabbing lunch, or just craving something cold — 
              SIRIK gives you that same satisfying soda kick, just cleaner.
            </p>
          </StoryText>
        </StorySection>

        <FounderSection>
          <FounderImage src="/images/founder.jpg" alt="Srikar YS - Founder of SIRIK" />
          <FounderContent>
            <h3>Meet the Mind Behind the Madness</h3>
            <p>
              Hey! I'm Srikar YS — a former engineer, full-time flavour rebel, and unapologetic 
              fizz lover.
            </p>
            <p>
              I grew up sipping homemade Nannari during sweaty cricket summers and chaotic 
              Bengaluru days. It was simple, refreshing, and honest. Fast forward my fridge was 
              stacked with sodas pretending to be cool — all loaded with sugar, fake flavours, 
              and artificial crap.
            </p>
            <p>
              SIRIK isn't here to ride a health trend. We're here to start a clean soda revolution.
            </p>
          </FounderContent>
        </FounderSection>

        <ValuesGrid>
          <ValueCard>
            <div className="icon">🌿</div>
            <h4>Real Roots</h4>
          </ValueCard>
          <ValueCard>
            <div className="icon">⚡</div>
            <h4>Modern Fuel</h4>
          </ValueCard>
          <ValueCard>
            <div className="icon">❤️</div>
            <h4>No Harmful Ingredients</h4>
          </ValueCard>
          <ValueCard>
            <div className="icon">🧬</div>
            <h4>Science + Tradition</h4>
          </ValueCard>
        </ValuesGrid>
      </Container>
    </AboutSection>
  );
};

export default About; 