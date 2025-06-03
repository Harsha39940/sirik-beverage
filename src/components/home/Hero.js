import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';

const HeroSection = styled.section`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  background: #8A2BE2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const MainContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
  max-width: 1400px;
  text-align: center;
  color: white;
`;

const BigText = styled.div`
  font-size: clamp(2.5rem, 15vw, 12rem);
  font-weight: 900;
  line-height: 0.8;
  text-transform: uppercase;
  color: white;
  text-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
  
  .word {
    opacity: 0;
    transform: translateY(50px);
    display: block;
    margin-bottom: 0.1em;
  }

  .star {
    color: #FF4D4D;
  }

  .regular-container {
    position: relative;
    height: 1.2em;
    margin: 0.1em 0;
  }
`;

const RegularText = styled.span`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  opacity: 0;
  color: rgba(255, 255, 255, 0.95);
  z-index: 1;
  pointer-events: none;
  font-size: clamp(2.5rem, 13vw, 11rem);
  letter-spacing: 0.05em;
  font-weight: 700;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const CenteredImage = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: min(300px, 60vw);
  opacity: 0;
  z-index: -1;
  pointer-events: none;

  img {
    width: 100%;
    height: auto;
    filter: drop-shadow(0 20px 40px rgba(0, 0, 0, 0.4));
    transform-origin: center center;
    animation: float 6s ease-in-out infinite;
    will-change: transform;
  }

  @keyframes float {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-15px); }
  }

  @media (max-width: 768px) {
    width: min(200px, 50vw);
  }
`;

const Hero = () => {
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();

    // Animate text elements
    tl.to('.word', {
      y: 0,
      opacity: 1,
      duration: 1.2,
      stagger: 0.2,
      ease: 'power4.out'
    })
    .to('.regular-text', {
      opacity: 1,
      duration: 1,
      ease: 'power2.out'
    }, '-=0.8')
    .to(imageRef.current, {
      opacity: 1,
      duration: 1,
      ease: 'power4.out'
    }, '-=0.5');

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <HeroSection>
      <MainContent>
        <BigText>
          <span className="word">FU<span className="star">*</span>K</span>
          <div className="regular-container">
            <RegularText className="regular-text">REGULAR</RegularText>
            <CenteredImage ref={imageRef}>
              <img src="/soda-2.png" alt="SIRIK Can" />
            </CenteredImage>
          </div>
          <span className="word">SODA</span>
        </BigText>
      </MainContent>
    </HeroSection>
  );
};

export default Hero; 