import React from "react";
import styled from "styled-components";

const StyledScore = styled.div`
  padding-top: 15px;
  width: 100%;
  text-align: center;
`;

export default ({ score }) => {
  return (
    <StyledScore>
      Your score: <b>{score}</b> <br />
    </StyledScore>
  );
};
