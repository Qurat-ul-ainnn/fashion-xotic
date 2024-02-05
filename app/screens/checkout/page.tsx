"use client";
import React, { useState } from "react";

import { InformationPageContainer } from "./CheckoutStyles";
import Title from "@/app/components/Title";

const InformationPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage((prev) => (prev === image ? null : image));
  };
  return (
    <InformationPageContainer>
      <div className="left-column">
        <div className="card card1">
          <Title name="Payment Method" />
          <div className="buttons-container">
            <button className="payment-button primary">Pay with Paypal</button>
            <button className="payment-button primary">Pay Later</button>
            <button className="third-button"></button>
          </div>
        </div>
        <div className="card card2">
          <Title name="Contact Infromation" />

          <div className="input-container">
            <div className="input-row">
              <input
                className="input-field"
                type="text"
                placeholder="First Name"
              />
              <input
                className="input-field"
                type="text"
                placeholder="Last Name"
              />
            </div>
            <input
              className="input-field"
              type="tel"
              placeholder="Phone Number"
            />
            <input
              className="input-field"
              type="email"
              placeholder="Your Email"
            />
          </div>
        </div>
        <div className="card card3">
          <Title name="Shipping Address" />
          <div className="address-container">
            <input
              className="input-field"
              type="text"
              placeholder="Street Address"
            />
            <select className="select-field" defaultValue="">
              <option disabled>Country</option>
              {/* Add country options here */}
            </select>
            <input
              className="input-field"
              type="text"
              placeholder="Town/City"
            />
            <div className="address-row">
              <input className="input-field" type="text" placeholder="State" />
              <input
                className="input-field"
                type="text"
                placeholder="Zipcode"
              />
            </div>
            <label className="checkbox-label">
              <input className="checkbox-input" type="checkbox" />
              Use a different Billing Address (Optional)
            </label>
          </div>
        </div>
      </div>
      <div className="right-column">
        <div className="right-card">
          <div className="heading">Order Summary</div>
          <div className="prouct-details">
            <img src="/images/pic2.jpg" alt="oki" width={75} height={50} />
            <div className="product-description">
              <div>
                <div>
                  Black Elegant Solid Patchwork Buckle Off the Shoulder Long...
                </div>
                <div className="product">Color:Black Size:M</div>
              </div>
              <div className="price">$38.00</div>
            </div>
          </div>
          <div className="prouct-details">
            <img src="/images/pic1.jpg" alt="oki" width={75} height={25} />
            <div className="product-description">
              <div>
                <div>
                  Black Elegant Solid Patchwork Buckle Off the Shoulder Long...
                </div>
                <div className="product">Color:Black Size:M</div>
              </div>
              <div>$38.00</div>
            </div>
          </div>
          <div className="inputContainer">
            <input className="coupon-input" type="text" placeholder="Input" />
            <button className="apply-btn">Apply</button>
          </div>

          <div className="ShipmentContainer">
            <div>Shipping</div>
            <div>Free</div>
          </div>
          <div className="SubtotalContainerr">
            <div>Subtotal</div>
            <div>$99.00</div>
          </div>
          <div className="TotalAmountContainer">
            <div>Total </div>
            <div>$234.00</div>
          </div>
        </div>
      </div>
      <div className="btns">
        <button className="PlaceOrderButton">Place Order</button>
        <button className="BackToButton">Back to Change</button>
      </div>
    </InformationPageContainer>
  );
};

export default InformationPage;
