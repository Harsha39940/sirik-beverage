import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const FooterContainer = styled.footer`
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.secondary};
  padding: 4rem 2rem 2rem;
`;

const FooterContent = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.2rem;
    margin-bottom: 1.5rem;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  a {
    transition: color 0.2s ease;
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-top: 1rem;

  a {
    font-size: 1.5rem;
    transition: color 0.2s ease;
    &:hover {
      color: ${({ theme }) => theme.colors.accent};
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h3>LINKS</h3>
          <FooterLinks>
            <Link to="/shop">Shop</Link>
            <Link to="/about">About Us</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/account">My Account</Link>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>HELP</h3>
          <FooterLinks>
            <Link to="/shipping">Shipping & Delivery Policy</Link>
            <Link to="/refund">Refund & Return Policy</Link>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms and Conditions</Link>
          </FooterLinks>
        </FooterSection>

        <FooterSection>
          <h3>SECURE PAYMENTS</h3>
          <p>We accept all major credit cards and UPI payments</p>
          <h3 style={{ marginTop: '2rem' }}>SOCIALS</h3>
          <SocialLinks>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
          </SocialLinks>
        </FooterSection>
      </FooterContent>

      <Copyright>
        <p>Made with ❤ in 🇮🇳 , © 2025 Misfits.</p>
        <p>Developed by oneCommerce</p>
      </Copyright>
    </FooterContainer>
  );
};

export default Footer; 