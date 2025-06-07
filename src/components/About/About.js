import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

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

const AboutSection = styled.section`
  padding: 6rem 2rem;
  background: #f8f3e9; // Warm, natural background color
  overflow: hidden;
`;

const FounderSection = styled(motion.div)`
  position: relative;
  padding: 4rem;
  background: linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(255,255,255,0.7) 100%);
  border-radius: 30px;
  backdrop-filter: blur(10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  margin: 4rem auto;
  max-width: 1000px;

  &::before {
    content: '';
    position: absolute;
    top: -20px;
    right: -20px;
    width: 200px;
    height: 200px;
    background: linear-gradient(45deg, #FF6B6B, #FFE66D);
    border-radius: 50%;
    opacity: 0.1;
    z-index: -1;
  }

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const FounderContent = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 4rem;
  align-items: center;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const FounderImageWrapper = styled(motion.div)`
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    top: -10px;
    left: -10px;
    right: 10px;
    bottom: 10px;
    border: 2px solid #FF6B6B;
    border-radius: 20px;
    z-index: -1;
  }
`;

const FounderImage = styled(motion.img)`
  width: 100%;
  border-radius: 20px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
`;

const FounderText = styled(motion.div)`
  h3 {
    font-size: clamp(2rem, 4vw, 3.5rem);
    font-weight: 900;
    background: linear-gradient(45deg, #FF6B6B, #4ECDC4);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 2rem;
    line-height: 1.2;
  }

  p {
    font-size: 1.1rem;
    line-height: 1.8;
    margin-bottom: 1.5rem;
    color: #555;
    opacity: 0.9;
  }

  .signature {
    font-family: 'Titillium Web', cursive;
    font-size: 1.5rem;
    color: #FF6B6B;
    margin-top: 2rem;
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
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const textVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

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

        <FounderSection
          ref={ref}
          as={motion.div}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          <FounderContent>
            <FounderImageWrapper variants={imageVariants}>
              <FounderImage
                src="/images/founder.jpg"
                alt="Srikar YS - Founder of SIRIK"
                variants={imageVariants}
              />
            </FounderImageWrapper>
            
            <FounderText variants={textVariants}>
              <motion.h3
                variants={textVariants}
              >
                Meet the Mind Behind the Madness
              </motion.h3>
              <motion.div variants={textVariants}>
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
                <div className="signature">- Srikar YS</div>
              </motion.div>
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