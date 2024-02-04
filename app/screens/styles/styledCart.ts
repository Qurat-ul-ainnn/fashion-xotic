"use client";
import styled from "styled-components";

export const CartContainer = styled.div`
  display: grid;
  grid-template-columns: 60% 35%;
  width: 95%;
  height: auto;
  padding: 80px;
  gap: 1.5rem;
  margin-right: 6rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 2rem 1rem; /* Adjusted padding for smaller screens */
  }

  @media (min-width: 769px) and (max-width: 1200px) {
    grid-template-columns: 1fr;
  }

  @media (min-width: 1201px) {
    grid-template-columns: 60% 35%;
  }

  .right-card {
    display: flex;
    flex-direction: column;
    border: 0.5px solid #ccc;
    border-radius: 24px;
    padding: 2rem 1.5rem;
    gap: 16px;
  }
  .left-column {
    display: grid;
    gap: 1.5rem;
    width: 100%; /* Full width for smaller screens */
    max-width: 643px;
  }
  .card {
    width: 100%;
    border-radius: 24px;
    padding: 2rem 1.5rem; /* Responsive padding */
    box-sizing: border-box;
    margin-bottom: 20px; /* Adjust the margin between cards */
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  .custom-div {
    width: 100%;
    height: 52px;
    border-radius: 8px;
    border: 0.5px solid #000;
    padding: 13px 16px;
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;
  }
  .text-div {
    width: 100%;
    font-size: 16px;
    display: flex;
    justify-content: space-between;
  }
  .checkout-button {
    background-color: #e6071f;
    border-radius: 8px;
    color: #ffffff;
    font-weight: bold;
    padding: 0.75rem;
    font-size: 16px;
    cursor: pointer;
    text-transform: uppercase;
    width: 100%;
    transition: background-color 0.3s ease;
    margin-top: 3rem;
    height: 52px;

    &:hover {
      background-color: white;
      color: #e6071f;
    }
  }

  .heading {
    font-size: 16px;
    font-weight: 600;
    line-height: 26px;
  }
  /* Add this CSS in your styles or component styles */

  .quantity-container {
    display: flex;
    align-items: center;
    width: 80px;
    height: 32px;
    border: 0.5px solid #6c7275;
    border-radius: 6px;
    justify-content: center;
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
    margin: 0 8px;
  }
  .productCard {
    width: 643px;
    height: 152px;
    border: 0px, 0px, 1px, 0px;
    display: flex;
    justify-content: space-between;
    padding: 24px, 0px, 24px, 0px;
  }
  .mainHeadings {
    display: flex;
    justify-content: space-between;

    border-bottom: 1px solid #ccc;
  }
  .head1 {
    width: 50%;
  }
  .head2 {
    display: flex;
    justify-content: space-between;
    width: 50%;
    padding: 5px;
  }
`;
