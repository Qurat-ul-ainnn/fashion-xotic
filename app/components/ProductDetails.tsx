"use client";

import React, { useState } from "react";
import styled from "styled-components";

interface ProductDetailsProps {
  imageSrc: string;
  paragraph: string;
  color: string;
  size: string;
  price: string;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  imageSrc,
  paragraph,
  color,
  size,
  price,
}) => {
  const [quantity, setQuantity] = useState(1);

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <ProductCard>
      <ProductDetailsContainer>
        <img src={imageSrc} alt="Product" />
        <div className="product-description">
          <div>
            <div>{paragraph}</div>
            <div>
              <span>Color:{color},</span>
              <span>Size:{size}</span>
            </div>
            <div>
              <button className="btn">X Remove</button>
            </div>
          </div>
        </div>
      </ProductDetailsContainer>
      <div className="quantity-container">
        <button className="quantity-button" onClick={handleDecrement}>
          -
        </button>
        <div className="quantity-value">{quantity}</div>
        <button className="quantity-button" onClick={handleIncrement}>
          +
        </button>
      </div>
      <StyledUserDiv>${price}</StyledUserDiv>

      <StyledUserDiv>${price}</StyledUserDiv>
    </ProductCard>
  );
};

export const ProductCard = styled.div`
  max-width: 643px; /* Adjusted to allow flexibility */
  width: 100%; /* Full width */
  height: 152px;
  border: 0px 0px 1px 0px;
  display: flex;
  justify-content: space-between;
  padding: 24px 0px; /* Adjusted padding */
  .quantity-container {
    display: flex;
    align-items: center;
    max-width: 80px; /* Set a maximum width for the quantity container */
    margin-right: auto; /* Move the quantity container to the left */
    height: 32px;
    border: 0.5px solid #6c7275;
    border-radius: 6px;
    padding: 0 8px;
    margin-top: 2.5rem;
  }

  .quantity-button {
    display: flex;
    font-size: 14px;
    cursor: pointer;
    height: 16px;
    width: 16px;
    text-align: center;
    justify-content: center;
  }

  .quantity-value {
    font-size: 14px;
    font-weight: 600;
    margin: 0 8px; /* Add margin to separate quantity and price */
  }
`;

const ProductDetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 15px;
  width: 316px;
  height: 110px;
  img {
    border-radius: 5px;
    height: 110px;
    width: 80px;
  }
  .btn {
    color: #6c7275;
    font-family: Inter;
    font-weight: 600;
    font-size: 14px;
    line-height: 20px;
    background-color: white;
  }

  .product-description {
    display: flex;
    justify-content: space-between;
    height: 110px;
    width: 220px;

    span {
      margin-right: 10px;
      color: #6c7275;
      font-family: Inter;
      font-weight: 400;
      font-size: 12px;
      line-height: 20px;
    }
  }
`;
const StyledUserDiv = styled.div`
  font-size: 18px;
  font-family: Inter;
  font-weight: 400;
  line-height: 30px;
  align-items: center;
  width: 58px;
  height: 30px;
  display: flex;
  justify-content: center; /* Align the text to the right */
  margin-top: 2.5rem;
  padding: 8px;
`;

export default ProductDetails;
