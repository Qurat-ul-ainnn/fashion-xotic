// OrderSummary.tsx
import React from "react";
import styled from "styled-components";

const OrderSummaryContainer = styled.div`
  border: 0.5px solid #ccc;
  border-radius: 24px;
  padding: 15px;
`;

const Heading = styled.div`
  font-size: 20px;
  font-weight: 500;
  line-height: 34px;
  padding: 11px;
`;

const ProductDetails = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  padding: 15px;
  border-bottom: 0.5px solid #ccc;
`;

const ProductImage = styled.img`
  border-radius: 5px;
`;

const ProductDescription = styled.div`
  display: flex;
  flex-direction: column;

  div {
    font-size: 16px;
  }
`;

const Price = styled.div`
  font-size: 16px;
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 52px;
  gap: 12px;
  margin: 15px;
`;

const CouponInput = styled.input`
  border: 1px solid #ccc;
  height: 52px;
  width: 258px;
  padding: 10px;
`;

const ApplyButton = styled.button`
  background-color: red;
  color: white;
  width: 95px;
  height: 52px;
  border-radius: 8px;
`;

const ShipmentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const SubtotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;

const TotalAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  padding: 10px;
`;

const OrderSummary: React.FC = () => {
  return (
    <OrderSummaryContainer>
      <Heading>Order Summary</Heading>
      <ProductDetails>
        <ProductImage
          src="/images/pic2.jpg"
          alt="Product"
          width={75}
          height={50}
        />
        <ProductDescription>
          <div>
            Black Elegant Solid Patchwork Buckle Off the Shoulder Long...
          </div>
          <div>Color:Black Size:M</div>
        </ProductDescription>
        <Price>$38.00</Price>
      </ProductDetails>
      <ProductDetails>
        <ProductImage
          src="/images/pic1.jpg"
          alt="Product"
          width={75}
          height={25}
        />
        <ProductDescription>
          <div>
            Black Elegant Solid Patchwork Buckle Off the Shoulder Long...
          </div>
          <div className="product">Color:Black Size:M</div>
        </ProductDescription>
        <Price>$38.00</Price>
      </ProductDetails>
      <InputContainer>
        <CouponInput type="text" placeholder="Input" />
        <ApplyButton>Apply</ApplyButton>
      </InputContainer>
      <ShipmentContainer>
        <div>Shipping</div>
        <div>Free</div>
      </ShipmentContainer>
      <SubtotalContainer>
        <div>Subtotal</div>
        <div>$99.00</div>
      </SubtotalContainer>
      <TotalAmountContainer>
        <div>Total</div>
        <div>$234.00</div>
      </TotalAmountContainer>
    </OrderSummaryContainer>
  );
};

export default OrderSummary;
