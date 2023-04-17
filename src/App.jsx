import React, { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Plant from "./components/Plant";
import positions from "./lib/Positions";
import timings from "./lib/Timings";
import Overlay from "./components/Overlay";
import Bg from "./components/Bg";
import Score from "./components/Score";
import GameOver from "./components/GameOver";
import { cloneDeep } from "lodash";
import colors from "./colors";


const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background:${colors.white};
    font-family: Open-Sans, Helvetica, Sans-Serif;
    h2{
      text-align: center;
      font-size: 15px;
    }
  }
`;

const StyledApp = styled.div``;

export default () => {
  const [name, setName] = useState("");
  const [timeLeft, setTimeLeft] = useState(5);
  const [error, setError] = useState(false);
  const [started, setStarted] = useState(false);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const [plantsState, setPlantsState] = useState(
    Object.keys(timings).reduce((a, v) => {
      a[v] = {
        currentStage: 0,
        currentStageTiming: timings[v][0],
        stateDefaultTimings: { ...timings[v] },
      };
      return a;
    }, {})
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setPlantsState((plantsState) => {
        for (const type in plantsState) {
          plantsState[type].currentStageTiming--;
          if (!plantsState[type].currentStageTiming) {
            plantsState[type].currentStage++;
            if (
              plantsState[type].currentStage ==
              Object.keys(plantsState[type].stateDefaultTimings).length
            )
              plantsState[type].currentStage = 0;
            plantsState[type].currentStageTiming =
              plantsState[type].stateDefaultTimings[
                plantsState[type].currentStage
              ];
          }
        }
        return cloneDeep(plantsState);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      if(started && !gameOver) {
        if(timeLeft > 0 ) {
          setTimeLeft(timeLeft-1)
        } else{
          const obToSend = {}
          obToSend[name] = score;

          await fetch(`${import.meta.env.VITE_FIREBASE_BASE_URL}/lederboard.json`, {
            method: "PATC", 
            body: JSON.stringify(obToSend)
          })
          setGameOver(true);
        }
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, [started, timeLeft, gameOver]);

  const plantClick = (type, stage) => async () => {
    if (stage == 3) {
      plantsState[type].currentStage = 0;
      plantsState[type].currentStageTiming =
        plantsState[type].stateDefaultTimings[plantsState[type].currentStage];
      setScore(score + 1);
      setPlantsState(cloneDeep(plantsState));
    }
  };

  return (
    <StyledApp>
      <GlobalStyle />
      <Overlay
        name={name}
        started={started}
        error={error}
        changeName={(name) => setName(name)}
        changeStarted={(started) => setStarted(started)}
        changeError={(error) => setError(error)}
      />
      {Object.values(plantsState).map((stage, type) => (
        <Plant
          key={type}
          type={type}
          stage={stage.currentStage}
          position={positions[type]}
          onClick={plantClick(type, stage.currentStage)}
        />
      ))}

      {gameOver && <GameOver/>}

      <Score score={score} />
      <h2>Time Left: {timeLeft}</h2>
      <Bg />
    </StyledApp>
  );
};
