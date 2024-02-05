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
   .right-column {
    display: grid;
    gap: 1.5rem;
    width: 100%; /* Full width for smaller screens */
    max-width: 413px; /* Fixed width for larger screens */
    
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
    height:650px;
    max-height: 100%;
  

  
  }

  .card1,
  .card2,
  .card3 {
    height: auto;
  }
  


  /* Add these CSS rules to your stylesheet or style tag */

.buttons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.payment-button {
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
}

.payment-button.primary {
    background-color: #FFD600;
    color: #253B80;
}

.payment-button:not([data-order="3"]) {
    background-color: yellow; /* Replace with desired color for the third button */
    color: #000;
}

.third-button {
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
}

.third-button:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
}

/* Add these CSS rules to your stylesheet or style tag */

.input-container {
    display: grid;
    gap: 10px;
}

.input-row {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
}

.input-field {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}
/* Add these CSS rules to your stylesheet or style tag */

.address-container {
    display: grid;
    gap: 10px;
}

.address-row {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr;
}

.select-field,
.input-field {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
}

.checkbox-label {
    display: flex;
    align-items: center;
    gap: 5px;
    cursor: pointer;
}

.checkbox-input {
    margin: 0;
}
.input-field:focus,
.select-field:focus,
.checkbox-input:focus,
.coupon-input:focus,
.remarks:focus,
.select-card:focus,
.cardNO:focus {
  outline: none;
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
    width: 100%;
    display: flex;
    flex-direction: row;
    gap;4%;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  .SubtotalContainerr {
    width: 100%;
    display: flex;
    justify-content: space-between;
    font-weight: 400;
    font-size: 16px;
    line-height: 26px;
    padding: 10px;
    border-bottom: 1px solid #ccc;
  }
  .label{
    width: 20%;
  }
  .value{
    width: 80%;
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
    width: 100%;
    display: flex;
    flex-direction: row;
    gap: 2%;
    padding: 15px;
    border-bottom: 0.5px solid #ccc;
    width: 100%;
  }
  .price {
    font-size: 14px;
    font-weight: 400;
    line-height: 22px;
  }
  .product-img {
    height: 100px;
    width: 100px;
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
  .product {
    color: #6c7275;
    font-family: Inter;
    font-weight: 400;
    font-size: 12px;
    line-height: 20px;
  }
`;
