import React, { useEffect, useState } from "react";
import styled from "styled-components";

const StyledLederBoard = styled.div`
  position: absolute;
  top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  .inner {
    width: 300px;
  }v
`;

export default () => {
  const [lederBoard, setLederBoard] = useState([]);
  const update = async () => {
    const obLeader = await (
      await fetch(`${import.meta.env.VITE_FIREBASE_BASE_URL}/lederboard.json`)
    ).json();

    setLederBoard(
      Object.keys(obLeader)
        .map((key) => ({
          name: key,
          score: obLeader[key],
        }))
        .sort((a, b) => b.score - a.score)
        .filter((v, i) => i < 5)
    );
  };
  useEffect(async () => {
    await update();
    const interval = setInterval(update,5000);
    return ()=>{clearInterval(interval)}
  }, []);
  return (
    <StyledLederBoard>
      <div className="inner">
        <h4>Leader Board</h4>
        {lederBoard.map((account, i) => (
          <div key={account.name}>
            #{i + 1} <b>{account.name}</b> - {account.score}
          </div>
        ))}
      </div>
    </StyledLederBoard>
  );
};
