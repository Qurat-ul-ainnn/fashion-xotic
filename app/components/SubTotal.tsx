"use client";

import React from "react";
import styled from "styled-components";

interface UserProps {
  price: string;
}

const StyledUserDiv = styled.div`
  font-size: 18px;
  font-family: Inter;
  font-weight: 600;
  line-height: 30px;
  align-items: right;
  width: 58px;
  height: 30px;
`;

const Subtotal: React.FC<UserProps> = ({ price }) => {
  return <StyledUserDiv>${price}</StyledUserDiv>;
};

export default Subtotal;
