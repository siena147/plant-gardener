import React from "react";
import styled from "styled-components";
import PlantTypes from "../lib/PlantTypes";
import PlantStages from "../lib/PlantStages";
import plantsSprite from "../images/plants-sprite.png";

let typePosition = {};
typePosition[PlantTypes.weat] = 70;
typePosition[PlantTypes.corn] = 220;
typePosition[PlantTypes.blue] = 360;
typePosition[PlantTypes.cabbage] = 480;
typePosition[PlantTypes.radish] = 610;
typePosition[PlantTypes.face] = 762;

let stagePosition = {};
stagePosition[PlantStages.small] = 45;
stagePosition[PlantStages.medium] = 160;
stagePosition[PlantStages.ripe] = 280;
stagePosition[PlantStages.bad] = 400;

const StyledPlant = styled.div`
  display: inline-block;
  width: 120px;
  height: 120px;
  position: absolute;
  cursor: pointer;
  :hover{
    border-radius: 50%;
  box-shadow: 0 0 11px rgba(33,33,33,.2); 
  }
`;

export default ({ type, stage, position, onClick }) => {
  const style = {
    top: `${position[0]}%`,
    left: `${position[1]}%`,
  };
  if (stage == PlantStages.empty) style.background = "transparent";
  else {
    style.background = `url(${plantsSprite})`;
    style.backgroundPosition = `-${stagePosition[stage]}px -${typePosition[type]}px`;
  }
  return <StyledPlant onClick={onClick} style={style} />;
};
