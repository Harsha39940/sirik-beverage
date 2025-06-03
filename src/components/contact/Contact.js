import React, { useState } from 'react';
import styled from 'styled-components';

const ContactSection = styled.section`
  padding: 80px 0;
  background: #fff;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 1rem;
  color: #333;
`;

const SectionSubtitle = styled.p`
  text-align: center;
  color: #666;
  margin-bottom: 3rem;
  font-size: 1.2rem;
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: 0 auto;
  background: white;
  padding: 40px;
  border-radius: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;

  label {
    display: block;
    margin-bottom: 8px;
    color: #333;
    font-weight: 500;
  }

  input, textarea, select {
    width: 100%;
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    color: #333;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #4ECCA3;
    }
  }

  textarea {
    min-height: 120px;
    resize: vertical;
  }

  select {
    appearance: none;
    background-image: url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e");
    background-repeat: no-repeat;
    background-position: right 1rem center;
    background-size: 1em;
  }
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 15px;
  background: #4ECCA3;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #45b793;
  }
`;

const ContactInfo = styled.div`
  margin-top: 60px;
  text-align: center;

  .location {
    color: #666;
    margin-top: 20px;
    font-style: italic;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 30px;

  a {
    color: #333;
    font-size: 1.5rem;
    transition: color 0.3s ease;

    &:hover {
      color: #4ECCA3;
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    inquiryType: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <ContactSection id="contact">
      <Container>
        <SectionTitle>Got Questions? Feedback? Want to Collab?</SectionTitle>
        <SectionSubtitle>We'd love to hear from you!</SectionSubtitle>

        <ContactForm onSubmit={handleSubmit}>
          <FormGroup>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <label htmlFor="inquiryType">Type of Inquiry</label>
            <select
              id="inquiryType"
              name="inquiryType"
              value={formData.inquiryType}
              onChange={handleChange}
              required
            >
              <option value="">Select an option</option>
              <option value="wholesale">Wholesale Inquiry</option>
              <option value="feedback">Feedback</option>
              <option value="press">Press</option>
              <option value="other">Other</option>
            </select>
          </FormGroup>

          <FormGroup>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </FormGroup>

          <SubmitButton type="submit">Send Message</SubmitButton>
        </ContactForm>

        <ContactInfo>
          <p className="location">Crafted in Bengaluru 🇮🇳</p>
          <SocialLinks>
            <a href="https://instagram.com/sirik" target="_blank" rel="noopener noreferrer">
              📸
            </a>
            <a href="https://wa.me/yourwhatsapp" target="_blank" rel="noopener noreferrer">
              💬
            </a>
            <a href="mailto:hello@sirik.com">
              ✉️
            </a>
          </SocialLinks>
        </ContactInfo>
      </Container>
    </ContactSection>
  );
};

export default Contact; 