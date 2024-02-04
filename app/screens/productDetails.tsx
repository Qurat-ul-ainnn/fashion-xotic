// components/ProductDetails.tsx
"use client";
import React from "react";
import styled from "styled-components";

interface ProductDetailsProps {
  imageUrl: string;
  productName: string;
  description: string;
  color: string;
  size: string;
  price: string;
}
const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ProductDetailsContainer = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
`;

const ProductImage = styled.img`
  width: 80px;
  height: 96px;
  margin-right: 15px;
`;

const DescriptionContainer = styled.div`
  flex: 1;
`;

const ColorContainer = styled.div`
  text-align: center;
`;

const ProductDetails: React.FC<ProductDetailsProps> = ({
  imageUrl,
  productName,
  description,
  color,
  size,
  price,
}) => {
  return (
    <ProductContainer>
      <ProductDetailsContainer>
        <ProductImage src={imageUrl} alt="Product Image" />
        <DescriptionContainer>
          <h3>{productName}</h3>
          <p>{description}</p>
          <p>
            Color: {color} Size:{size}
          </p>
        </DescriptionContainer>
        <ColorContainer>
          <p>{price}</p>
        </ColorContainer>
        <ColorContainer>
          <p>{price}</p>
        </ColorContainer>
      </ProductDetailsContainer>
    </ProductContainer>
  );
};

export default ProductDetails;
