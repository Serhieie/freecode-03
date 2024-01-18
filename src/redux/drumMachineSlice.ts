import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { initialState, DrumMachineState, Sound } from "./initialState";

const drumMachineSlice = createSlice({
  name: "drumMachine",
  initialState,
  reducers: {
    changeColor(state, action: PayloadAction<string>) {
      state.color = action.payload;
    },
    changeVolume(state, action: PayloadAction<number>) {
      state.volume = action.payload;
    },
    toggleIsTurnedOn(state) {
      state.isTurnedOn = !state.isTurnedOn;
    },
    addActiveDrumPad(state, action: PayloadAction<string>) {
      state.activeDrumPad = action.payload;
    },
    changeDataSounds(state, action: PayloadAction<Sound[]>) {
      state.dataSounds = action.payload || [];
    },
    changeCheckedRadio(state, action: PayloadAction<string>) {
      state.checkedRadio = action.payload;
    },
  },
});

const persistConfig = {
  key: "drumMachine",
  storage,
  // blacklist: ["dataSounds"],
};

export const persistedDrumMachineReducer = persistReducer(
  persistConfig,
  drumMachineSlice.reducer
);

export const {
  changeColor,
  changeVolume,
  toggleIsTurnedOn,
  addActiveDrumPad,
  changeDataSounds,
  changeCheckedRadio,
} = drumMachineSlice.actions;

export const getColor = (state: { drumMachine: DrumMachineState }) =>
  state.drumMachine.color;
export const getVolume = (state: { drumMachine: DrumMachineState }) =>
  state.drumMachine.volume;
export const getIsTurnedOn = (state: { drumMachine: DrumMachineState }) =>
  state.drumMachine.isTurnedOn;
export const getActiveDrumPad = (state: { drumMachine: DrumMachineState }) =>
  state.drumMachine.activeDrumPad;
export const getDataSound = (state: { drumMachine: DrumMachineState }) =>
  state.drumMachine.dataSounds;
export const getCheckedRadio = (state: { drumMachine: DrumMachineState }) =>
  state.drumMachine.checkedRadio;
export default drumMachineSlice.reducer;
