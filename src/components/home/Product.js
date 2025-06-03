import React, { useState } from 'react';
import styled from 'styled-components';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/splide/dist/css/splide.min.css';

const ProductSection = styled.section`
  padding: 6rem 2rem;
  background: ${({ theme }) => theme.colors.background};
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionTitle = styled.h2`
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  color: ${({ theme }) => theme.colors.primary};
  text-align: center;
  margin-bottom: 4rem;
`;

const ProductCarousel = styled.div`
  margin-bottom: 4rem;

  .splide__arrow {
    background: ${({ theme }) => theme.colors.primary};
    opacity: 1;
    
    svg {
      fill: white;
    }
  }

  .splide__pagination__page.is-active {
    background: ${({ theme }) => theme.colors.primary};
  }
`;

const ProductCard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  padding: 2rem;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.medium};

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

const ProductImage = styled.img`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: scale(1.05);
  }
`;

const ProductInfo = styled.div`
  h3 {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const FeatureBadges = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 1.5rem 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const Badge = styled.span`
  padding: 0.5rem 1rem;
  background: ${({ theme }) => theme.colors.primary}10;
  color: ${({ theme }) => theme.colors.primary};
  border-radius: 50px;
  font-weight: 600;
`;

const AddToCart = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    justify-content: center;
  }
`;

const QuantityPicker = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  
  button {
    width: 30px;
    height: 30px;
    border-radius: ${({ theme }) => theme.borderRadius.round};
    background: ${({ theme }) => theme.colors.primary};
    color: white;
    font-size: 1.2rem;
    cursor: pointer;
    transition: ${({ theme }) => theme.transitions.fast};

    &:hover {
      background: ${({ theme }) => theme.colors.accent};
    }
  }

  span {
    font-size: 1.2rem;
    font-weight: 600;
  }
`;

const AddButton = styled.button`
  padding: 0.8rem 2rem;
  background: ${({ theme }) => theme.colors.accent};
  color: white;
  border-radius: 50px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-2px);
    box-shadow: ${({ theme }) => theme.shadows.medium};
  }
`;

const ComparisonTable = styled.div`
  margin: 4rem 0;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    
    th, td {
      padding: 1rem;
      text-align: center;
      border-bottom: 1px solid #eee;
    }

    th {
      background: ${({ theme }) => theme.colors.primary};
      color: white;
      &:first-child {
        border-top-left-radius: ${({ theme }) => theme.borderRadius.medium};
      }
      &:last-child {
        border-top-right-radius: ${({ theme }) => theme.borderRadius.medium};
      }
    }

    td {
      font-size: 1.1rem;
    }

    .check {
      color: ${({ theme }) => theme.colors.success};
      font-size: 1.5rem;
    }

    .cross {
      color: ${({ theme }) => theme.colors.error};
      font-size: 1.5rem;
    }
  }
`;

const ReviewsSection = styled.div`
  h3 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const ReviewGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`;

const ReviewCard = styled.div`
  padding: 2rem;
  background: white;
  border-radius: ${({ theme }) => theme.borderRadius.large};
  box-shadow: ${({ theme }) => theme.shadows.medium};
  transition: ${({ theme }) => theme.transitions.default};

  &:hover {
    transform: translateY(-5px);
    box-shadow: ${({ theme }) => theme.shadows.large};
  }

  img {
    width: 60px;
    height: 60px;
    border-radius: ${({ theme }) => theme.borderRadius.round};
    margin-bottom: 1rem;
    object-fit: cover;
  }

  p {
    font-style: italic;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.colors.text};
  }

  .name {
    font-weight: 600;
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const Price = styled.div`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.primary};
  margin: 1rem 0;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.text};
  margin: 1rem 0;
`;

const Ingredients = styled.div`
  margin: 2rem 0;
  
  h4 {
    font-weight: 600;
    margin-bottom: 0.5rem;
  }
  
  p {
    font-size: 0.9rem;
    line-height: 1.5;
  }
`;

const Product = () => {
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: 1,
      name: "SIRIK Original",
      image: "/images/sirik-original.png",
      features: ["Low Sugar", "Added Prebiotics", "Vegan", "Low Calorie"]
    },
    // Add more products as needed
  ];

  return (
    <ProductSection id="product">
      <Container>
        <SectionTitle>Good for the Gut. Great for the Gram.</SectionTitle>

        <ProductCarousel>
          <Splide
            options={{
              type: 'loop',
              perPage: 1,
              focus: 'center',
              autoplay: true,
              interval: 4000,
              gap: '2rem',
              pagination: true,
              breakpoints: {
                768: {
                  perPage: 1,
                }
              }
            }}
          >
            {products.map(product => (
              <SplideSlide key={product.id}>
                <ProductCard>
                  <ProductImage src={product.image} alt={product.name} />
                  <ProductInfo>
                    <h3>{product.name}</h3>
                    <FeatureBadges>
                      {product.features.map((feature, index) => (
                        <Badge key={index}>✓ {feature}</Badge>
                      ))}
                    </FeatureBadges>
                    <AddToCart>
                      <QuantityPicker>
                        <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                        <span>{quantity}</span>
                        <button onClick={() => setQuantity(quantity + 1)}>+</button>
                      </QuantityPicker>
                      <AddButton>Add to Cart</AddButton>
                    </AddToCart>
                  </ProductInfo>
                </ProductCard>
              </SplideSlide>
            ))}
          </Splide>
        </ProductCarousel>

        <ComparisonTable>
          <table>
            <thead>
              <tr>
                <th>Criteria</th>
                <th>SIRIK</th>
                <th>Cola/Soda</th>
                <th>Herbal Juice</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Low Sugar</td>
                <td><span className="check">✓</span></td>
                <td><span className="cross">✗</span></td>
                <td><span className="check">✓</span></td>
              </tr>
              <tr>
                <td>Gut-Friendly Prebiotics</td>
                <td><span className="check">✓</span></td>
                <td><span className="cross">✗</span></td>
                <td><span className="cross">✗</span></td>
              </tr>
              <tr>
                <td>Preservative-Free</td>
                <td><span className="check">✓</span></td>
                <td><span className="cross">✗</span></td>
                <td><span className="cross">✗</span></td>
              </tr>
              <tr>
                <td>Ancient Ingredients</td>
                <td><span className="check">✓</span></td>
                <td><span className="cross">✗</span></td>
                <td><span className="check">✓</span></td>
              </tr>
              <tr>
                <td>Light, Fizzy Format</td>
                <td><span className="check">✓</span></td>
                <td><span className="check">✓</span></td>
                <td><span className="cross">✗</span></td>
              </tr>
            </tbody>
          </table>
        </ComparisonTable>

        <ReviewsSection>
          <h3>What Our Customers Say</h3>
          <ReviewGrid>
            <ReviewCard>
              <img src="/images/review1.jpg" alt="Reviewer" />
              <p>"Finally, a soda that doesn't make me feel guilty! Love the natural ingredients."</p>
              <div className="name">Sarah K.</div>
            </ReviewCard>
            <ReviewCard>
              <img src="/images/review2.jpg" alt="Reviewer" />
              <p>"The perfect post-workout drink. Refreshing and actually good for you!"</p>
              <div className="name">Rahul M.</div>
            </ReviewCard>
            <ReviewCard>
              <img src="/images/review3.jpg" alt="Reviewer" />
              <p>"Amazing taste and love that it's prebiotic. My new favorite drink!"</p>
              <div className="name">Priya S.</div>
            </ReviewCard>
          </ReviewGrid>
        </ReviewsSection>
      </Container>
    </ProductSection>
  );
};

export default Product; 