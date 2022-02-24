import React from "react";
import styled from "styled-components";
import PlantTypes from "../lib/PlantTypes";
import PlantStages from "../lib/PlantStages";

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
`;

export default ({ type, stage, position, onClick }) => {
  const style = {
    top: `${position[0]}%`,
    left: `${position[1]}%`,
  };
  if (stage == PlantStages.empty) style.background = "transparent";
  else {
    style.background = "url(/images/plants-sprite.png)";
    style.backgroundPosition = `-${stagePosition[stage]}px -${typePosition[type]}px`;
  }
  return <StyledPlant onClick={onClick} style={style} />;
};
