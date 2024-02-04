"use client";
import React, { useState } from "react";
import { CartContainer } from "./styles/styledCart";
import Title from "@/app/components/Title";
import CustomSelectField from "@/app/components/CustomSelectField";
import ShippingInfo from "@/app/components/ShippingInfo";
import TotalAmountInfo from "@/app/components/TotalAmountContainer";
import ProductDetails from "@/app/components/ProductDetails";

const CartMainPage = () => {
  const [couponCode, setCouponCode] = useState("");

  const handleCouponCodeChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setCouponCode(event.target.value);
  };
  return (
    <CartContainer>
      <div className="left-column">
        <div className="card">
          <div className="mainHeadings">
            <div className="head1">
              <div className="heading">Product</div>
            </div>
            <div className="head2">
              <div className="heading">Quantity</div>
              <div className="heading">Price</div>
              <div className="heading">Subtotal</div>
            </div>
          </div>
          <div className="cart-products">
            <ProductDetails
              imageSrc="/images/pic1.jpg"
              paragraph="Black Elegant Solid Patchwork Buckle Off the Shoulder Long..."
              color="Black"
              size="M"
              price="38.00"
            />
          </div>
          <div className="cart-products">
            <ProductDetails
              imageSrc="/images/pic1.jpg"
              paragraph="Black Elegant Solid Patchwork Buckle Off the Shoulder Long..."
              color="Black"
              size="M"
              price="38.00"
            />
          </div>
        </div>
        <div
          style={{
            backgroundColor: "#f8f8f8",
            borderRadius: "12px",
            padding: "16px",
            marginTop: "20px",
          }}
        >
          <h3
            style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}
          >
            Have a Coupon?
          </h3>
          <p
            style={{ fontSize: "14px", color: "#6c7275", marginBottom: "12px" }}
          >
            Add your code for an instant cart discount
          </p>
          <div className="input">
            <input
              type="text"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={handleCouponCodeChange}
            />
            <button className="coupon-btn">Apply</button>
          </div>
        </div>
      </div>
      <div className="right-column">
        <div className="right-card">
          <Title name="Cart Summary" />
          <div className="custom-div">
            <input type="radio" />
            <div className="text-div">
              <div>Free Shipping</div>
              <div>$0.00</div>
            </div>
          </div>
          <CustomSelectField defaultValue="Country">
            <option disabled>Country</option>
          </CustomSelectField>
          <CustomSelectField defaultValue="Standard">
            <option disabled>Standard</option>
          </CustomSelectField>
          <ShippingInfo label="Subtotal" value="$1234.00" />
          <TotalAmountInfo label="Total" value="$234.00" />

          <button className="checkout-button">Checkout</button>
        </div>
      </div>
    </CartContainer>
  );
};

export default CartMainPage;
