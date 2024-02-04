// informationPageStyle.js
"use client";
import styled from "styled-components";

export const InformationPageContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 35%;
  width: 95%;
  height: auto;
  padding: 80px;
  gap: 2rem;
  margin-right: 6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem 1rem; /* Adjusted padding for smaller screens */
  }

  .left-column {
    display: grid;
    gap: 1.5rem;
    width: 100%; /* Full width for smaller screens */
    max-width: 643px; /* Fixed width for larger screens */
  }

  .card {
    width: 100%;
    border: 0.5px solid #ccc;
    border-radius: 24px;
    padding: 2rem 1.5rem; /* Responsive padding */
    box-sizing: border-box;
    margin-bottom: 20px; /* Adjust the margin between cards */
  }
  .right-card {
    border: 0.5px solid #ccc;
    border-radius: 24px;
    padding: 2rem 1.5rem;
  }

  .card1,
  .card2,
  .card3 {
    height: auto;
  }
  .card3 {
    border: none;
  }
  .heading {
    font-size: 28px;
    font-weight: 500;
    line-height: 34px;
    padding: 11px;
  }
  .info-row {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

  .last-info-row {
    border-bottom: none; /* Remove bottom border for the last .info-row */
  }

  .SubtotalContainer {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

  .more {
    border: none;
  }

  .TotalAmountContainer {
    display: flex;
    justify-content: space-between;
    font-weight: 500;
    font-size: 20px;
    line-height: 28px;
    padding: 10px;
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

  .inputContainer {
    display: flex;
    justify-content: space-between;
    height: 52px;
    gap: 12px;
    margin: 15px;
  }

  .apply-btn {
    background-color: red;
    color: white;
    width: 95px;
    height: 52px;
    border-radius: 8px;
  }

  .coupon-input {
    border: 1px solid #ccc;
    height: 52px;
    width: 258px;
    padding: 10px;
  }

  .payment-details {
    padding: 15px;
  }

  .payment-method {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
  }

  .payment-img {
    height: 30px;
    width: 80px;
  }

  .payment-img-paypal {
    height: 40px;
    width: 140px;
  }

  .options {
    display: flex;
    gap: 8px;
  }

  .radio-input {
    height: 17px;
    width: 17px;
  }

  .pay-cards {
    display: flex;
    flex-direction: row;
  }

  .discount {
    font-size: 16px;
    font-weight: bold;
  }

  .discount-colour {
    color: blue;
    font-size: 16px;
    font-weight: bold;
  }

  .PlaceOrderButton {
    background-color: red;
    color: white;
    padding: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 90%;
    font-size: 18px;
    margin-top: 20px;

    @media (max-width: 1200px) {
      width: 100%;
    }
  }

  .BackToButton {
    background-color: white;
    color: red;
    padding: 15px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    width: 90%;
    font-size: 18px;
    margin-top: 20px;
    border: 1px solid red;

    @media (max-width: 1200px) {
      width: 100%;
    }
  }

  .title {
    margin-bottom: 10px;
    font-size: 20px;
    font-weight: 500;
    line-height: 34px;
    padding: 11px;
  }

  .remarks {
    width: 100%;
    height: 15vh;
    border: 0.5px solid #ccc;
    border-radius: 8px;
    padding: 12px;
    box-sizing: border-box;
    font-size: 16px;
    resize: vertical;
  }

  .ShipmentContainer {
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }

  .other-info {
    padding: 8px;
  }
  .payment-img.clicked {
    border: 2px solid red; /* Specify the border width */
  }
  .billing-options {
    display: flex;
    gap: 8px;
    padding: 8px;
    color: #6c7275;
  }
  .select-card {
    width: 100%;
    height: 50px;
    border: 0.5px solid #ccc;
    border-radius: 8px;
    padding: 5px;
  }
  .cardNO {
    width: 36%;
    height: 50px;
    border: 0.5px solid #ccc;
    border-radius: 8px;
    padding: 5px;
  }
  .card-details {
    display: flex;
    flex-direction: row;
    gap: 8px;
    padding: 15px;
  }
`;
