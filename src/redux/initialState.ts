import { drumPadsDataFreeCode } from "../constants/constants";

export interface Sound {
  id: string;
  key: string;
  audioSrc: string;
  keyToCheck: string;
}

export interface DrumMachineState {
  oldColor: string;
  color: string;
  volume: number;
  isTurnedOn: boolean;
  isPressed: boolean;
  activeDrumPad: string;
  dataSounds: Sound[];
  checkedRadio: string;
}

export const initialState: DrumMachineState = {
  oldColor: "",
  color: "lightgreen",
  volume: 0.5,
  isTurnedOn: true,
  isPressed: false,
  activeDrumPad: "",
  dataSounds: drumPadsDataFreeCode,
  checkedRadio: "basic",
};
