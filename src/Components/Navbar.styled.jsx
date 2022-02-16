import styled from "styled-components";

export const NavbarWrapper = styled.div`
  background-color: black;
  position: relative;
  height: 5rem;
  color: white;
`;

export const Button = styled.button`
  color: white;
  text-align: center;
  margin: 1rem;
  border: 2px solid blueviolet;
  border-radius: 10px;
  position: inherit;
  padding: 1rem;
  float: right;
  background: black;

  &:hover {
    transform: scale(1.1);
    box-shadow: 2px 5px blueviolet;
  }
`;
