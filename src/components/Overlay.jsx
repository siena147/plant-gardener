import React from "react";
import styled from "styled-components";
import colors from "../colors";

const StyledOverlay = styled.div`
  .overlay-wrapper {
    &.hide {
      display: none;
    }
    color: ${colors.white};
    position: fixed;
    top: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    .overlay {
      .nameInput {
        &.error {
          color: red;
        }
        display: flex;
        flex-direction: column;
        align-items: center;
        input {
          border-radius: 10px;
          height: 20px;
        }
      }
      .start {
        background: ${colors.white};
        color: ${colors.main};
        border-radius: 10px;
        padding: 10px;
        cursor: pointer;
      }
      border-radius: 20px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-around;
      width: 300px;
      height: 300px;
      background: ${colors.main};
    }
  }
`;

export default ({ name, started, error, changeName, changeStarted, changeError }) => {
  return (
    <StyledOverlay>
      <div className={`overlay-wrapper ${started ? "hide" : ""}`}>
        <div className="overlay">
          <h3 className="title">Plant Grower</h3>
          <div className={`nameInput ${error ? "error" : ""}`}>
            <div>Enter Name</div>
            <input value={name} type="text" onChange={(e)=>{changeName(e.target.value)}} />
          </div>
          <div
            className="start"
            onClick={() => {
              if (name) changeStarted(true);
              else changeError(true);
            }}
          >
            Start Game
          </div>
        </div>
      </div>
    </StyledOverlay>
  );
};
