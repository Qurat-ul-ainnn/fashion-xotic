"use client";
import React, { useState } from "react";

import { InformationPageContainer } from "./informationPageStyle";

const InformationPage: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageClick = (image: string) => {
    setSelectedImage((prev) => (prev === image ? null : image));
  };
  return (
    <InformationPageContainer>
      <div className="left-column">
        <div className="card card1">
          <div className="title">Contact Information</div>
          <div className="SubtotalContainer">
            <div className="label">Email to</div>
            <div className="vlaue">muzammirafique007@gmail.com</div>
          </div>
          <div className="SubtotalContainer more">
            <div className="label">Ship to</div>
            <div className="value">Boota Street, Kot Radha Kishen, Kasur</div>
          </div>
        </div>
        <div className="card card2">
          <div className="SubtotalContainer more">
            <div>Expideted Shipping</div>
            <div>US$ 135.57</div>
          </div>
          <p>
            Not including process time, transportation time:3-7days （Member
            Exclusive Items can only be shipped by Standard Shipping due to
            customs problem）
          </p>
          <div className="paymentinfo">
            <div className="payment-details">
              <div className="payment-method">
                <div>
                  <div className="options">
                    <input
                      className="radio-input"
                      type="radio"
                      id="paypal"
                      name="paypal"
                      value="paypal"
                    />
                    <label>Paypal</label>
                  </div>
                </div>
                <div className="discount">USD$ 6.26</div>
              </div>
              <div className="pay-cards">
                <img
                  className={`payment-img-payment ${
                    selectedImage === "/images/PayPalLogo.png" ? "clicked" : ""
                  }`}
                  onClick={() => handleImageClick("/images/PayPalLogo.png")}
                  src="/images/PayPalLogo.png"
                  alt="oki"
                  width={140}
                  height={40}
                />
              </div>
              <div className="discount">0.3 + 3% Fee </div>
              <div className="discount-colour">The safe easier way to pay </div>
              <div>Be sure to login to your PAYPAL account before you pay</div>
            </div>
            <div className="payment-details">
              <div className="payment-method">
                <div>
                  <div className="options">
                    <input
                      className="radio-input"
                      type="radio"
                      id="paypal"
                      name="paypal"
                      value="paypal"
                    />
                    <label>Debit/Credit Card 1</label>
                  </div>
                </div>
                <div className="discount">USD$ 6.26</div>
              </div>
              <div className="discount">0.3 + 3% Fee </div>
              <div className="pay-cards">
                <img
                  className={`payment-img ${
                    selectedImage === "/images/visa.jpg" ? "clicked" : ""
                  }`}
                  onClick={() => handleImageClick("/images/visa.jpg")}
                  src="/images/visa.jpg"
                  alt="oki"
                />
                <img
                  className={`payment-img ${
                    selectedImage === "/images/mc.jpg" ? "clicked" : ""
                  }`}
                  onClick={() => handleImageClick("/images/mc.jpg")}
                  src="/images/mc.jpg"
                  alt="oki"
                />
                <img
                  className={`payment-img ${
                    selectedImage === "/images/jcb.png" ? "clicked" : ""
                  }`}
                  onClick={() => handleImageClick("/images/jcb.png")}
                  src="/images/jcb.png"
                  alt="oki"
                />
                <img
                  className={`payment-img ${
                    selectedImage === "/images/discover.png" ? "clicked" : ""
                  }`}
                  onClick={() => handleImageClick("/images/discover.png")}
                  src="/images/discover.png"
                  alt="oki"
                />
                <img
                  className={`payment-img ${
                    selectedImage === "/images/americanExpress.jpg"
                      ? "clicked"
                      : ""
                  }`}
                  onClick={() =>
                    handleImageClick("/images/americanExpress.jpg")
                  }
                  src="/images/americanExpress.jpg"
                  alt="oki"
                />
              </div>
            </div>
            <div className="payment-details">
              <div className="payment-method">
                <div>
                  <div className="options">
                    <input
                      className="radio-input"
                      type="radio"
                      id="paypal"
                      name="paypal"
                      value="paypal"
                    />
                    <label>Credit/Debit Card 3</label>
                  </div>
                </div>
                <div className="discount">USD$ 6.26</div>
              </div>
              <div className="discount">0.3 + 3% Fee </div>
              <div className="pay-cards">
                <img
                  className={`payment-img ${
                    selectedImage === "/images/visa.jpg" ? "clicked" : ""
                  }`}
                  onClick={() => handleImageClick("/images/visa.jpg")}
                  src="/images/visa.jpg"
                  alt="oki"
                />
                <img
                  className={`payment-img ${
                    selectedImage === "/images/mc.jpg" ? "clicked" : ""
                  }`}
                  onClick={() => handleImageClick("/images/mc.jpg")}
                  src="/images/mc.jpg"
                  alt="oki"
                />
                <img
                  className={`payment-img ${
                    selectedImage === "/images/jcb.png" ? "clicked" : ""
                  }`}
                  onClick={() => handleImageClick("/images/jcb.png")}
                  src="/images/jcb.png"
                  alt="oki"
                />
                <img
                  className={`payment-img ${
                    selectedImage === "/images/discover.png" ? "clicked" : ""
                  }`}
                  onClick={() => handleImageClick("/images/discover.png")}
                  src="/images/discover.png"
                  alt="oki"
                />
                <img
                  className={`payment-img ${
                    selectedImage === "/images/americanExpress.jpg"
                      ? "clicked"
                      : ""
                  }`}
                  onClick={() =>
                    handleImageClick("/images/americanExpress.jpg")
                  }
                  src="/images/americanExpress.jpg"
                  alt="oki"
                />
                <img
                  className={`payment-img ${
                    selectedImage === "/images/diners.jfif" ? "clicked" : ""
                  }`}
                  onClick={() => handleImageClick("/images/diners.jfif")}
                  src="/images/diners.jfif"
                  alt="oki"
                />
                <img
                  className={`payment-img ${
                    selectedImage === "/images/unionPay.png" ? "clicked" : ""
                  }`}
                  onClick={() => handleImageClick("/images/unionPay.png")}
                  src="/images/unionPay.png"
                  alt="oki"
                />
              </div>
            </div>
            <div className="payment-details">
              <div className="payment-method">
                <div>
                  <div className="options">
                    <input
                      className="radio-input"
                      type="radio"
                      id="paypal"
                      name="paypal"
                      value="paypal"
                    />
                    <label>Credit/Debit Card 4</label>
                  </div>
                </div>
                <div className="discount">USD$ 6.26</div>
              </div>
              <div className="discount">0.3 + 3% Fee </div>
              <div className="pay-cards">
                <img
                  className={`payment-img ${
                    selectedImage === "/images/visa.jpg" ? "clicked" : ""
                  }`}
                  onClick={() => handleImageClick("/images/visa.jpg")}
                  src="/images/visa.jpg"
                  alt="oki"
                />
                <img
                  className={`payment-img ${
                    selectedImage === "/images/mc.jpg" ? "clicked" : ""
                  }`}
                  onClick={() => handleImageClick("/images/mc.jpg")}
                  src="/images/mc.jpg"
                  alt="oki"
                />
                <img
                  className={`payment-img ${
                    selectedImage === "/images/americanExpress.jpg"
                      ? "clicked"
                      : ""
                  }`}
                  onClick={() =>
                    handleImageClick("/images/americanExpress.jpg")
                  }
                  src="/images/americanExpress.jpg"
                  alt="oki"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="card card3">
          <div className="title">Other Information</div>
          <div className="other-info">
            <label htmlFor="remarks"></label>
            <textarea
              id="remarks"
              className="remarks"
              placeholder="Remarks"
            ></textarea>
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
