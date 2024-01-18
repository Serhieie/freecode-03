import { DrumMachineStyles } from "./App.styled";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DrumPadSquer } from "../DrumPadSquer/DrumPadSquer";
import SettingsPanel from "../SettingsPanel/SettingsPanel";
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

  //Key up
  useEffect(() => {
    const handleKeyDown = (e: React.KeyboardEvent) => {
      const audioId = e.code.toUpperCase();
      const audioElement = document.getElementById(audioId);

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
    };
    window.addEventListener("keydown", handleKeyDown as any);
    return () => {
      window.removeEventListener("keydown", handleKeyDown as any);
    };
  }, [color, dispatch, isTurnedOn]);

  //Key Down
  useEffect(() => {
    const handleKeyUp = (e: React.KeyboardEvent) => {
      const audioId = e.code.toUpperCase();
      const audioElement = document.getElementById(audioId);

      if (audioElement instanceof HTMLAudioElement) {
        const parentElement = audioElement.parentNode as HTMLElement;
        parentElement.style.backgroundColor = "#1e293b";
        parentElement.style.color = color;
        parentElement.style.boxShadow = `1px 0px 8px ${color}`;
      }
    };
    window.addEventListener("keyup", handleKeyUp as any);
    return () => {
      window.removeEventListener("keyup", handleKeyUp as any);
    };
  }, [color]);

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
