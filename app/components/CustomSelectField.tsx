"use client";

import React, { ReactNode } from "react";
import styled from "styled-components";

const StyledSelectField = styled.select`
  width: 100%;
  padding: 10px;
  padding-right: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  height: 52px;
  font-family:
Inter;
font-weight:
400;
font-size:
16px;
line-height
26px;
`;

interface CustomSelectFieldProps {
  defaultValue: string;
  children: ReactNode;
}

const CustomSelectField: React.FC<CustomSelectFieldProps> = ({
  defaultValue,
  children,
}) => {
  return (
    <StyledSelectField defaultValue={defaultValue}>
      {children}
    </StyledSelectField>
  );
};

export default CustomSelectField;
