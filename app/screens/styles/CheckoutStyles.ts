"use client";
import styled from "styled-components";

export const MainCheckoutContainer = styled.div`
  display: grid;
  width: 100%;
  background-color: #2196f3;
  grid-template-columns: auto auto auto auto;
  grid-column-gap: 2rem;
  grid-row-gap: 1rem;
  padding: 20px;
  .grid-item {
    background-color: rgba(255, 255, 255, 0.8);
    border: 1px solid rgba(0, 0, 0, 0.8);
    padding: 20px;
    font-size: 30px;
    text-align: center;
  }
  .item1 {
    grid-row: 1 / 3;
    grid-column: 1 / 4;
  }
  item2 {
    grid-row: 4/ 5;
    grid-column: 1 / 4;
  }
`;
