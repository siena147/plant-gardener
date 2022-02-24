const timings = {};

import PlantTypes from "./PlantTypes";
import PlantStages from "./PlantStages";

timings[PlantTypes.weat] = {};
timings[PlantTypes.corn] = {};
timings[PlantTypes.blue] = {};
timings[PlantTypes.cabbage] = {};
timings[PlantTypes.radish] = {};
timings[PlantTypes.face] = {};

timings[PlantTypes.weat][PlantStages.empty] = 2;
timings[PlantTypes.corn][PlantStages.empty] = 3;
timings[PlantTypes.blue][PlantStages.empty] = 1;
timings[PlantTypes.cabbage][PlantStages.empty] = 3;
timings[PlantTypes.radish][PlantStages.empty] = 1;
timings[PlantTypes.face][PlantStages.empty] = 2;

timings[PlantTypes.weat][PlantStages.small] = 1;
timings[PlantTypes.corn][PlantStages.small] = 2;
timings[PlantTypes.blue][PlantStages.small] = 1;
timings[PlantTypes.cabbage][PlantStages.small] = 3;
timings[PlantTypes.radish][PlantStages.small] = 2;
timings[PlantTypes.face][PlantStages.small] = 2;

timings[PlantTypes.weat][PlantStages.medium] = 2;
timings[PlantTypes.corn][PlantStages.medium] = 3;
timings[PlantTypes.blue][PlantStages.medium] = 1;
timings[PlantTypes.cabbage][PlantStages.medium] = 1;
timings[PlantTypes.radish][PlantStages.medium] = 3;
timings[PlantTypes.face][PlantStages.medium] = 1;

timings[PlantTypes.weat][PlantStages.ripe] = 2;
timings[PlantTypes.corn][PlantStages.ripe] = 2;
timings[PlantTypes.blue][PlantStages.ripe] = 2;
timings[PlantTypes.cabbage][PlantStages.ripe] = 2;
timings[PlantTypes.radish][PlantStages.ripe] = 2;
timings[PlantTypes.face][PlantStages.ripe] = 2;

timings[PlantTypes.weat][PlantStages.bad] = 3;
timings[PlantTypes.corn][PlantStages.bad] = 2;
timings[PlantTypes.blue][PlantStages.bad] = 1;
timings[PlantTypes.cabbage][PlantStages.bad] = 3;
timings[PlantTypes.radish][PlantStages.bad] = 2;
timings[PlantTypes.face][PlantStages.bad] = 1;

export default timings;