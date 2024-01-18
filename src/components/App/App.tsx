import { DrumMachineStyles } from "./App.styled";
import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DrumPadSquer } from "../DrumPadSquer/DrumPadSquer";
import SettingsPanel from "../SettingsPanel/SettingsPanel";
import { useKeyPress } from "../../hooks/useKeyPress";
import {
  getColor,
  getIsTurnedOn,
  getActiveDrumPad,
  addActiveDrumPad,
} from "../../redux/drumMachineSlice";

const body = document.body;

export const App: React.FC = () => {
  const dispatch = useDispatch();
  const color = useSelector(getColor);
  const isTurnedOn = useSelector(getIsTurnedOn);
  const activeDrumPad = useSelector(getActiveDrumPad);

  body.style.color = color;

  // Key Up
  const handleKeyUp = useCallback(
    (e: React.KeyboardEvent) => {
      const audioId = e.code.toUpperCase();
      const audioElement = document.querySelector(`audio[data-id="${audioId}"]`);

      if (audioElement instanceof HTMLAudioElement) {
        const parentElement = audioElement.parentNode as HTMLElement;
        parentElement.style.backgroundColor = "#1e293b";
        parentElement.style.color = color;
        parentElement.style.boxShadow = `1px 0px 8px ${color}`;
      }
    },
    [color]
  );

  useKeyPress("keyup", handleKeyUp, [handleKeyUp]);

  // Key Down
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      const audioId = e.code.toUpperCase();
      const audioElement = document.querySelector(`audio[data-id="${audioId}"]`);

      if (!isTurnedOn && audioElement) {
        dispatch(addActiveDrumPad(""));
        const parentElement = audioElement.parentNode as HTMLElement;
        parentElement.style.boxShadow = "1px 1px 2px rgba(0, 0, 0, 0.8)";
        return;
      }

      if (audioElement instanceof HTMLAudioElement) {
        const parentElement = audioElement.parentNode as HTMLElement;
        dispatch(addActiveDrumPad(parentElement.id));
        parentElement.style.backgroundColor = color;
        parentElement.style.color = "white";
        audioElement.currentTime = 0;
        audioElement.play();
      }
    },
    [color, dispatch, isTurnedOn]
  );

  useKeyPress("keydown", handleKeyDown, [handleKeyDown]);

  return (
    <DrumMachineStyles id="drum-machine" color={color}>
      <DrumPadSquer />
      <SettingsPanel
        color={color}
        isTurnedOn={isTurnedOn}
        activeDrumPad={activeDrumPad}
      />
    </DrumMachineStyles>
  );
};
