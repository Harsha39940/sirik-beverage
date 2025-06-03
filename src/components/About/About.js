import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.section`
  padding: 80px 0;
  background-color: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const StorySection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-bottom: 80px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #333;
  font-weight: 700;
`;

const StoryText = styled.div`
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #666;
  
  p {
    margin-bottom: 1.5rem;
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 2rem auto;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  position: relative;
  
  img {
    width: 100%;
    height: auto;
    display: block;
  }
`;

const FounderSection = styled.div`
  background: #f9f9f9;
  padding: 60px 0;
  margin: 40px 0;
  border-radius: 20px;
`;

const FounderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 40px;
  align-items: start;
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FounderImage = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
`;

const FounderText = styled.div`
  h3 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    color: #333;
  }

  p {
    margin-bottom: 1.5rem;
    line-height: 1.8;
    color: #666;
  }
`;

const ValuesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
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
    <AboutContainer id="about">
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
              the vibe — without the guilt. We use real, natural ingredients like Nannari root, known 
              for its cooling and gut-friendly properties, and pair it with zero sugar, no preservatives, 
              prebiotics, and clean flavours that actually taste good.
            </p>
            <p>
              Whether you're finishing a workout, grabbing lunch, or just craving something 
              cold — SIRIK gives you that same satisfying soda kick, just cleaner.
            </p>
          </StoryText>
        </StorySection>

        <FounderSection>
          <FounderContent>
            <FounderImage>
              <img src="/images/founder.jpg" alt="Srikar YS - Founder of SIRIK" />
            </FounderImage>
            <FounderText>
              <h3>Meet the Mind Behind the Madness</h3>
              <p>
                Hey! I'm Srikar YS — a former engineer, full-time flavour rebel, and unapologetic fizz lover.
              </p>
              <p>
                I grew up sipping homemade Nannari during sweaty cricket summers and chaotic Bengaluru days. 
                It was simple, refreshing, and honest. Fast forward my fridge was stacked with sodas pretending 
                to be cool — all loaded with sugar, fake flavours, and artificial crap.
              </p>
              <p>
                I had one simple thought — why does enjoying a fizzy drink have to come at the cost of my health?
              </p>
              <p>
                SIRIK isn't here to ride a health trend. We're here to start a clean soda revolution.
              </p>
            </FounderText>
          </FounderContent>
        </FounderSection>

        <ValuesGrid>
          <ValueCard>
            <div className="emoji">🌿</div>
            <h4>Real Roots</h4>
          </ValueCard>
          <ValueCard>
            <div className="emoji">⚡</div>
            <h4>Modern Fuel</h4>
          </ValueCard>
          <ValueCard>
            <div className="emoji">❤️</div>
            <h4>No Harmful Ingredients</h4>
          </ValueCard>
          <ValueCard>
            <div className="emoji">🧬</div>
            <h4>Science + Tradition</h4>
          </ValueCard>
        </ValuesGrid>
      </Container>
    </AboutContainer>
  );
};

export default About; 