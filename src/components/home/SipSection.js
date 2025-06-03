import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SectionContainer = styled.section`
  min-height: 100vh;
  position: relative;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: ${({ theme }) => theme.colors.background};
`;

const MonkeyImage = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 20;

  img {
    max-width: 300px;
    
    @media (min-width: ${({ theme }) => theme.breakpoints.tablet}) {
      max-width: 400px;
    }
  }
`;

const TextContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const SipText = styled.div`
  text-align: center;
  font-size: clamp(2rem, 8vw, 6rem);
  font-weight: 900;
  text-transform: uppercase;
  white-space: nowrap;
  opacity: 0.1;
  transform: translateX(-100%);
  margin: 1rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    br {
      display: block;
    }
  }
`;

const SipSection = () => {
  const containerRef = useRef(null);
  const textRefs = useRef([]);

  useEffect(() => {
    const texts = textRefs.current;

    texts.forEach((text, index) => {
      gsap.to(text, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top center',
          end: 'bottom center',
          scrub: 1
        },
        x: '0%',
        opacity: index === 1 ? 1 : 0.1,
        duration: 1.5,
        ease: 'power2.out'
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <SectionContainer ref={containerRef}>
      <MonkeyImage>
        <img 
          src="/images/monkey.svg" 
          alt="Monkey" 
          className="hidden md:block"
        />
        <img 
          src="/images/monkey-full.svg" 
          alt="Monkey" 
          className="md:hidden ml-12"
        />
      </MonkeyImage>

      <TextContainer>
        {[0, 1, 2, 3].map((_, index) => (
          <SipText
            key={index}
            ref={el => textRefs.current[index] = el}
            className={`sip-${index + 1}`}
          >
            SIP THIS
            <br className="md:hidden" />
            NOT THAT
          </SipText>
        ))}
      </TextContainer>
    </SectionContainer>
  );
};

export default SipSection; 