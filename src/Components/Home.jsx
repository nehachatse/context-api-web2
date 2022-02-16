import React from "react";
import styled from "styled-components";
import { AuthContext } from "../Context/AuthContext";

const Headline = styled.h1`
  color: blueviolet;
  font-family: Georgia, "Times New Roman", Times, serif;
`;

const Para = styled.p`
  font-family: Georgia, "Times New Roman", Times, serif;
  font-size: 2rem;
  margin-top: 1rem;
`;

const Span = styled.span`
  color: orangered;
`;

export default function Home() {
  let { token, user } = React.useContext(AuthContext);

  return (
    <>
      <Headline>Welcome, {user} </Headline>
      <Para>
        Your token is : <Span>{token}</Span>{" "}
      </Para>
    </>
  );
}
