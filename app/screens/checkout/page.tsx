// pages/index.tsx
"use client";
// pages/index.tsx
import React from "react";
import styled from "styled-components";
import Head from "next/head";
import Image from "next/image";

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  h1 {
    font-weight: 500;
    font-size: 54px;
    line-height: 58px;
    text-align: center;
    padding: 20px;
  }
  .product-description {
    display: flex;
    justify-content: space-between;
  }
  .prouct-details {
    display: flex;
    flex-direction: row;
    gap: 24px;
    padding: 15px;
    border-bottom: 0.5px solid #ccc;
  }
  img {
    border-radius: 5px;
  }
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  gap: 20px;
  grid-row-gap: 2rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr); /* Two columns on larger screens */
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(1, 1fr) repeat(1, 1fr); /* Two columns on even larger screens */
  }
`;

const Card = styled.div`
  background-color: #fff;
  border-radius: 24px;
 
  border: 1px solid #ccc

  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const CardContent = styled.div`
  padding: 20px;
`;

const Title = styled.h3`
  margin-bottom: 10px;
  font-size: 28px;
  font-weight: 500;
  line-height: 34px;
  padding: 20px;
`;

const Description = styled.p`
  color: #666;
`;
const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
interface PaymentButtonProps {
  primary?: boolean;
}
const PaymentButton = styled.button`
  background-color: ${(props) => (props.$primary ? "#FFD600" : "yellow")};
  color: ${(props) => (props.$primary ? "#253B80" : "#000")};
  padding: 10px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 60%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;

  /* Add specific color for the third button */
  &:not([data-order="3"]) {
    background-color: #yellow; /* Replace with the desired color for the third button */
    color: #000;
  }
`;
const ThirdButton = styled.button`
  position: relative;
  width: 60%;
  height: 40px;
  margin: 5px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: gray;
  background-image: url("https://s3-alpha-sig.figma.com/img/f9f4/729f/ffb4d5de73068b7c38ebee28e4d83c06?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TrwFZXF0z2rAl-JS9aqB2dS3SovQrcuVmSoth5P6yU4Ja2RW1OQxjS-QQ3mq2gmixjhjucUK1~HHaxsvePjmqeSsyBh5shaIMNJcEffj27sGIwt8ryi3n65OeLW7niJLBIh-BL0SyVLAbBcDnwDMKJ0WKs7LiL0ji6oIxIbsyW5gmEoIU4iAMzMYp5BVk~QqIIp6N4XNQbTiJCFzCceOTG6A1ANrUtFfOz~Wlp9vzAbGMDsdUZR3kKgcfT9IxJgDyhbIKzq66E1pTm8gfUCDLcPrNT1JPYnKkxChJya1pqxaGkfbFU67P2fVw4IosPsAjYcyg7u6FBh8r99XwFwPsQ__");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    z-index: -1;
  }
`;
//Card 2 style componets
const InputContainer = styled.div`
  display: grid;
  gap: 10px;
`;

const InputRow = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;
`;

const InputField = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;
//Card 3 style components
const AddressContainer = styled.div`
  display: grid;
  gap: 10px;
`;

const AddressRow = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;
`;

const SelectField = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

const CheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
`;

const CheckboxInput = styled.input`
  margin: 0;
`;

//Order-button style
const PlaceOrderButton = styled.button`
  background-color: red;
  color: white;
  padding: 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  width: 50%;
  font-size: 18px;
  margin-top: 20px;
  height: 50px;

  @media (max-width: 1200px) {
    width: 100%;
  }
`;

const ShipmentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 400px;
  font-size: 16px;
  line-height: 26px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;
const SubtotalContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 400px;
  font-size: 16px;
  line-height: 26px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;
const TotalAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500px;
  font-size: 20px;
  line-height: 28px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
`;
const IndexPage: React.FC = () => {
  return (
    <Container>
      <h1>Check Out</h1>
      <CardGrid>
        <div>
          <Card>
            <CardContent>
              <Title>Payment Methods</Title>
              <ButtonsContainer>
                <PaymentButton $primary>Pay with Paypal</PaymentButton>
                <PaymentButton $primary>Pay Later</PaymentButton>
                <ThirdButton></ThirdButton>;
              </ButtonsContainer>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Title>Contact Infromation</Title>
              <InputContainer>
                <InputRow>
                  <InputField type="text" placeholder="First Name" />
                  <InputField type="text" placeholder="Last Name" />
                </InputRow>
                <InputField type="tel" placeholder="Phone Number" />
                <InputField type="email" placeholder="Your Email" />
              </InputContainer>
            </CardContent>
          </Card>

          <Card>
            <CardContent>
              <Title>Shipping Address</Title>
              <AddressContainer>
                <InputField type="text" placeholder="Street Address" />
                <SelectField defaultValue="">
                  <option disabled>Country</option>
                  {/* Add country options here */}
                </SelectField>
                <InputField type="text" placeholder="Town/City" />
                <AddressRow>
                  <InputField type="text" placeholder="State" />
                  <InputField type="text" placeholder="Zipcode" />
                </AddressRow>
                <CheckboxLabel>
                  <CheckboxInput type="checkbox" />
                  Use a different Billing Address (Optional)
                </CheckboxLabel>
              </AddressContainer>
            </CardContent>
          </Card>
        </div>

        <div>
          <Card>
            <CardContent>
              <Title>Order Summary</Title>
              <div className="prouct-details">
                <img src="/images/pic2.jpg" alt="oki" width={75} height={25} />
                <div className="product-description">
                  <div>
                    <div>
                      Black Elegant Solid Patchwork Buckle Off the Shoulder
                      Long...
                    </div>
                    <div>Color:Black Size:M</div>
                  </div>
                  <div>$38.00</div>
                </div>
              </div>
              <div className="prouct-details">
                <img src="/images/pic1.jpg" alt="oki" width={75} height={25} />
                <div className="product-description">
                  <div>
                    <div>
                      Black Elegant Solid Patchwork Buckle Off the Shoulder
                      Long...
                    </div>
                    <div>Color:Black Size:M</div>
                  </div>
                  <div>$38.00</div>
                </div>
              </div>

              <ShipmentContainer>
                <div>Shipping</div>
                <div>Free</div>
              </ShipmentContainer>
              <SubtotalContainer>
                <div>Subtotal</div>
                <div>$99.00</div>
              </SubtotalContainer>
              <TotalAmountContainer>
                <div>Total </div>
                <div>$234.00</div>
              </TotalAmountContainer>
            </CardContent>
          </Card>
        </div>
      </CardGrid>
      <PlaceOrderButton>Place Order</PlaceOrderButton>
    </Container>
  );
};

export default IndexPage;
