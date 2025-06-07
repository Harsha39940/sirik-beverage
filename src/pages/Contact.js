import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';

const ContactPage = styled.main`
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

const ContactGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: ${({ theme }) => theme.colors.text};
`;

const Input = styled.input`
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.primary}20;
  border-radius: 10px;
  font-size: 1rem;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}20;
  }
`;

const TextArea = styled.textarea`
  padding: 1rem;
  border: 2px solid ${({ theme }) => theme.colors.primary}20;
  border-radius: 10px;
  font-size: 1rem;
  min-height: 150px;
  resize: vertical;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary}20;
  }
`;

const SubmitButton = styled(motion.button)`
  padding: 1rem 2rem;
  background: ${({ theme }) => theme.colors.primary};
  color: white;
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px ${({ theme }) => theme.colors.primary}40;
  }
`;

const ContactInfo = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const InfoCard = styled(motion.div)`
  padding: 2rem;
  background: white;
  border-radius: 20px;
  box-shadow: ${({ theme }) => theme.shadows.medium};
  display: flex;
  align-items: center;
  gap: 1.5rem;

  .icon {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.primary};
  }

  .content {
    h3 {
      font-size: 1.2rem;
      color: ${({ theme }) => theme.colors.primary};
      margin-bottom: 0.5rem;
    }

    p {
      color: ${({ theme }) => theme.colors.text};
      line-height: 1.6;
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const cardVariants = {
    initial: { opacity: 0, x: -20 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <ContactPage>
      <Container>
        <PageTitle
          initial="initial"
          animate="animate"
          variants={pageVariants}
        >
          Get in Touch
        </PageTitle>

        <ContactGrid>
          <ContactForm
            initial="initial"
            animate="animate"
            variants={pageVariants}
            onSubmit={handleSubmit}
          >
            <FormGroup>
              <Label htmlFor="name">Name</Label>
              <Input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="email">Email</Label>
              <Input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="subject">Subject</Label>
              <Input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="message">Message</Label>
              <TextArea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </FormGroup>

            <SubmitButton
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </SubmitButton>
          </ContactForm>

          <ContactInfo
            initial="initial"
            animate="animate"
            variants={pageVariants}
          >
            <InfoCard variants={cardVariants}>
              <FontAwesomeIcon icon={faPhone} className="icon" />
              <div className="content">
                <h3>Phone</h3>
                <p>+1 (555) 123-4567</p>
                <p>Mon - Fri, 9am - 6pm IST</p>
              </div>
            </InfoCard>

            <InfoCard variants={cardVariants}>
              <FontAwesomeIcon icon={faEnvelope} className="icon" />
              <div className="content">
                <h3>Email</h3>
                <p>hello@sirikbeverages.com</p>
                <p>support@sirikbeverages.com</p>
              </div>
            </InfoCard>

            <InfoCard variants={cardVariants}>
              <FontAwesomeIcon icon={faLocationDot} className="icon" />
              <div className="content">
                <h3>Office</h3>
                <p>123 Innovation Drive</p>
                <p>Bangalore, Karnataka 560001</p>
              </div>
            </InfoCard>
          </ContactInfo>
        </ContactGrid>
      </Container>
    </ContactPage>
  );
};

export default Contact; 