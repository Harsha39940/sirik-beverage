import React from 'react';
import styled from 'styled-components';

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

const FounderSection = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-bottom: 6rem;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FounderImage = styled.img`
  width: 100%;
  max-width: 500px;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadows.large};
  margin: 0 auto;
`;

const FounderContent = styled.div`
  h3 {
    font-size: clamp(2rem, 4vw, 3rem);
    font-weight: 900;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const ValueCard = styled.div`
  padding: 2rem;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }

  .icon {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h4 {
    font-size: 1.2rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const About = () => {
  return (
    <AboutSection id="about">
      <Container>
        <StorySection>
          <SectionTitle> From Cravings. Built Without Compromise.</SectionTitle>
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