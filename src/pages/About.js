import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutPage = styled.main`
  min-height: 100vh;
  padding-top: 80px;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
`;

const PageTitle = styled(motion.h1)`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 3rem;
  text-align: center;
`;

const ContentSection = styled(motion.section)`
  margin-bottom: 4rem;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 800;
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 2rem;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.8;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
`;

const ValueGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
`;

const ValueCard = styled(motion.div)`
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  text-align: center;

  h3 {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
    margin-bottom: 1rem;
  }

  p {
    font-size: 1rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.text};
  }
`;

const About = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <AboutPage>
      <Container>
        <PageTitle
          initial="initial"
          animate="animate"
          variants={pageVariants}
        >
          Our Story
        </PageTitle>

        <ContentSection
          initial="initial"
          animate="animate"
          variants={pageVariants}
        >
          <SectionTitle>The SIRIK Journey</SectionTitle>
          <Text>
            Born from a passion for authentic refreshment, SIRIK began with a simple question: 
            Why can't sodas be both delicious and good for you? Our founder, Srikar YS, 
            grew up with traditional beverages that were both refreshing and beneficial. 
            This inspired him to create something revolutionary.
          </Text>
          <Text>
            We started in a small kitchen, experimenting with natural ingredients like 
            Nannari root, known for its cooling properties and rich cultural heritage. 
            Our goal was to create a drink that would honor these traditional ingredients 
            while meeting modern wellness standards.
          </Text>
        </ContentSection>

        <ContentSection
          initial="initial"
          animate="animate"
          variants={pageVariants}
        >
          <SectionTitle>Our Values</SectionTitle>
          <ValueGrid>
            <ValueCard variants={cardVariants}>
              <h3>Natural Ingredients</h3>
              <p>We use only real, natural ingredients that you can pronounce and trust.</p>
            </ValueCard>
            <ValueCard variants={cardVariants}>
              <h3>Zero Compromise</h3>
              <p>Great taste doesn't have to come at the cost of health. We prove it.</p>
            </ValueCard>
            <ValueCard variants={cardVariants}>
              <h3>Sustainability</h3>
              <p>Our commitment to the planet is as important as our commitment to your health.</p>
            </ValueCard>
            <ValueCard variants={cardVariants}>
              <h3>Innovation</h3>
              <p>We're constantly exploring new ways to make better, healthier beverages.</p>
            </ValueCard>
          </ValueGrid>
        </ContentSection>

        <ContentSection
          initial="initial"
          animate="animate"
          variants={pageVariants}
        >
          <SectionTitle>Our Mission</SectionTitle>
          <Text>
            At SIRIK, we're on a mission to revolutionize the beverage industry. We believe 
            that every sip should be an experience that's good for your body and delightful 
            for your taste buds. We're not just making another drink – we're creating a 
            movement towards better, cleaner refreshment.
          </Text>
          <Text>
            Our commitment goes beyond just creating great drinks. We're dedicated to 
            sustainability, supporting local farmers, and maintaining the highest standards 
            of quality in everything we do. When you choose SIRIK, you're not just choosing 
            a beverage – you're choosing a better way to refresh.
          </Text>
        </ContentSection>
      </Container>
    </AboutPage>
  );
};

export default About; 