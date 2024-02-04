"use client";
import React from "react";
import styled from "styled-components";

interface ShippingInfoProps {
  label: string;
  value: string;
}

const ShipmentContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 500;
  line-height: 26px;
  padding: 10px;
  border-bottom: 1px solid #ccc;
  .label {
    font-weight: 400;
  }
  .value {
    font-weight: 600;
  }
`;

const ShippingInfo: React.FC<ShippingInfoProps> = ({ label, value }) => {
  return (
    <ShipmentContainer>
      <div className="label">{label}</div>
      <div className="value">{value}</div>
    </ShipmentContainer>
  );
};

export default ShippingInfo;
