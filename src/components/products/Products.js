import React from 'react';
import styled from 'styled-components';

const ProductSection = styled.section`
  padding: 80px 0;
  background: #f9f9f9;
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: #333;
`;

const ComparisonTable = styled.div`
  background: white;
  border-radius: 20px;
  padding: 40px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  margin: 40px 0;
  overflow-x: auto;

  table {
    width: 100%;
    border-collapse: collapse;
    
    th, td {
      padding: 15px;
      text-align: center;
      border-bottom: 1px solid #eee;
    }

    th {
      font-weight: 600;
      color: #333;
    }

    td {
      color: #666;
    }

    .check {
      color: #4ECCA3;
      font-size: 1.2rem;
    }

    .cross {
      color: #ff6b6b;
      font-size: 1.2rem;
    }
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-top: 60px;
`;

const FeatureCard = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  text-align: center;

  .icon {
    font-size: 2rem;
    margin-bottom: 1rem;
    color: #4ECCA3;
  }

  h3 {
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    color: #666;
    line-height: 1.6;
  }
`;

const Products = () => {
  return (
    <ProductSection id="products">
      <Container>
        <SectionTitle>Good for the Gut. Great for the Gram.</SectionTitle>

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

        <FeaturesGrid>
          <FeatureCard>
            <div className="icon">🌱</div>
            <h3>Low Sugar</h3>
            <p>All the sweetness you love, none of the sugar crash you don't.</p>
          </FeatureCard>
          <FeatureCard>
            <div className="icon">🦠</div>
            <h3>Prebiotic</h3>
            <p>Packed with gut-friendly ingredients for better digestion.</p>
          </FeatureCard>
          <FeatureCard>
            <div className="icon">🌿</div>
            <h3>Natural Ingredients</h3>
            <p>Real Nannari root and clean ingredients you can trust.</p>
          </FeatureCard>
          <FeatureCard>
            <div className="icon">✨</div>
            <h3>Zero Preservatives</h3>
            <p>No artificial preservatives or harmful additives.</p>
          </FeatureCard>
        </FeaturesGrid>
      </Container>
    </ProductSection>
  );
};

export default Products; 