"use client";

import React from "react";
import styled from "styled-components";

interface UserProps {
  name: string;
}

const StyledUserDiv = styled.div`
  font-family: "Poppins", sans-serif;
  font-weight: 500;
  font-size: 20px;
  line-height: 28px;
  Width:365px
  Height:28px
`;

const UserComponent: React.FC<UserProps> = ({ name }) => {
  return <StyledUserDiv>{name}</StyledUserDiv>;
};

export default UserComponent;
