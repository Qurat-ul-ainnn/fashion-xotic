"use client";
import React, { useState } from "react";
import { InformationPageContainer } from "../informationPageStyle";

const PaymentPage: React.FC = () => {
  return (
    <InformationPageContainer>
      <div className="left-column">
        <div className="card card1">
          <div className="title">Contact Information</div>
          <div className="SubtotalContainer">
            <div>Email to</div>
            <div>muzammirafique007@gmail.com</div>
          </div>
          <div className="SubtotalContainer">
            <div>Ship to</div>
            <div>Boota Street, Kot Radha Kishen, Kasur</div>
          </div>
          <div className="SubtotalContainer">
            <div>Shipping Method</div>
            <div>Expidited Shipping</div>
          </div>
          <div className="SubtotalContainer more">
            <div>Payment Method</div>
            <div>Credit/Debit Card 1</div>
          </div>
        </div>

        <div className="card ">
          <div className="title">Billing Address</div>
          <p>
            Please Make sure the billing address matches the credit card you are
            about to use
          </p>
          <div className="billing-options">
            <input
              className="check-input"
              type="checkbox"
              id="biiing-adress"
              name="billing"
              value=""
            />
            <label>Same as shipping</label>
          </div>
          <div className="billing-options">
            <input
              className="check-input"
              type="checkbox"
              id="billing-adress"
              name="billing"
              value=""
            />
            <label>Use a different billing address</label>
          </div>
        </div>

        <div className="card ">
          <p className="cardInformation">
            We accept following credit cards:VISA、Mastercard、JCB、Discover
            Card、American Express. Pls check the type of your card , if payment
            failed, try another payment method"Debit Card 2/3" or try another
            card
          </p>
          <div className="title">Credit Card</div>
          <select
            className="select-card"
            name="
          "
            id=""
          >
            <option value="">Card</option>
          </select>
          <div className="card-details">
            <select
              className="cardNO"
              name="
          "
              id=""
            >
              <option value="">MM</option>
            </select>
            <select
              className="cardNO"
              name="
          "
              id=""
            >
              <option value="">YYYY</option>
            </select>
            <select
              className="cardNO"
              name="
          "
              id=""
            >
              <option value="">CVV</option>
            </select>
          </div>
          <div className="billing-options">
            <input
              className="check-input"
              type="checkbox"
              id="billing-adress"
              name="billing"
              value=""
            />
            <label>Use a different billing address(optional)</label>
          </div>
          <button className="PlaceOrderButton">Pay Us $19</button>
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
                  Black Elegant Solid Patchwork Buckle Off the Shoulder Long...
                </div>
                <div>Color:Black Size:M</div>
              </div>
              <div>$38.00</div>
            </div>
          </div>

          <div className="ShipmentContainer">
            <div>Shipping</div>
            <div>Free</div>
          </div>
          <div className="SubtotalContainer">
            <div>Subtotal</div>
            <div>$99.00</div>
          </div>
          <div className="TotalAmountContainer">
            <div>Total </div>
            <div>$234.00</div>
          </div>
        </div>
      </div>
    </InformationPageContainer>
  );
};

export default PaymentPage;
