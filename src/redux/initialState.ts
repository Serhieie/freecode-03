import { drumPadsDataFreeCode } from "../constants/constants";

export interface Sound {
  id: string;
  key: string;
  audioSrc: string;
  keyToCheck: string;
}

export interface DrumMachineState {
  color: string;
  volume: number;
  isTurnedOn: boolean;
  activeDrumPad: string;
  dataSounds: Sound[];
  checkedRadio: string;
}

export const initialState: DrumMachineState = {
  color: "lightgreen",
  volume: 0.6,
  isTurnedOn: true,
  activeDrumPad: "",
  dataSounds: drumPadsDataFreeCode,
  checkedRadio: "basic",
};
