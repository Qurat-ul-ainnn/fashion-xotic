"use client";
import React from "react";
import styled from "styled-components";

// Interface for the product details
interface ProductDetailsProps {
  imageSrc: string;
  paragraph: string;
  price: number;
  color: string;
  size: string;
}

// Functional component for ProductDetails
const OrderSummaryProduct: React.FC<ProductDetailsProps> = ({
  imageSrc,
  paragraph,
  price,
  color,
  size,
}) => {
  return (
    <ProductDetailsContainer>
      <img src={imageSrc} alt="Product" />
      <div className="product-description">
        <div>
          <div>{paragraph}</div>
          <div>
            <span>Color: {color},</span>
            <span>Size: {size}</span>
          </div>
        </div>
      </div>
    </ProductDetailsContainer>
  );
};

// Styled components for the ProductDetailsContainer
const ProductDetailsContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 24px;
  padding: 15px;
  img {
    border-radius: 5px;
    height: 110px;
    width: 80px;
  }

  .product-description {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 110px;
  }

  span {
    margin-right: 10px;
    color: #6c7275;
    font-family: Inter;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
  }
`;

// Export the component
export default OrderSummaryProduct;
