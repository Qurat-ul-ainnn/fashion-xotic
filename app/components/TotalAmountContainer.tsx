"use client";
import React from "react";
import styled from "styled-components";

const TotalAmountContainer = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 600;
  font-size: 20px;
  line-height: 32px;
  padding: 10px;
`;

const TotalAmountInfo: React.FC<{ label: string; value: string }> = ({
  label,
  value,
}) => {
  return (
    <TotalAmountContainer>
      <div>{label}</div>
      <div>{value}</div>
    </TotalAmountContainer>
  );
};

export default TotalAmountInfo;
