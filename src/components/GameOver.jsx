import React from "react";
import styled from "styled-components";
import colors from "../colors";
import LeaderBoard from "./LeaderBoard";

const StyledGameOver = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  background: ${colors.main};
  z-index: 20;
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content:center;
`;

export default () => {
  return (
    <StyledGameOver>
      <h1>Game Over !</h1>
      <LeaderBoard></LeaderBoard>
    </StyledGameOver>
  );
};
