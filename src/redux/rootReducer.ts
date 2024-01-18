import { combineReducers } from "redux";
import drumMachineSlice from "./drumMachineSlice";

const rootReducer = combineReducers({
  drumMachine: drumMachineSlice,
});

export default rootReducer;
