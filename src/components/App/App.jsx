import { drumPadsDataFreeCode } from "../../constants/constants";
import { DrumMachineStyles } from "./App.styled";
import { generateRandomColor } from "../../helpers/randomColor";
import { useState, useEffect } from "react";
import { DrumPadSquer } from "../DrumPadSquer/DrumPadSquer";
import { SettingsPanel } from "../SettingsPanel/SettingsPanel";
const body = document.body;

export const App = () => {
  const [color, setColor] = useState(generateRandomColor());
  const [volume, setVolume] = useState(0.5);
  const [isTurnedOn, setIsTurnedOn] = useState(true);
  const [activeDrumPad, setActiveDrumPad] = useState("");
  const [dataSounds, setDataSounds] = useState(drumPadsDataFreeCode);
  body.style.color = color;

  const handleClick = (id) => {
    const drumPad = document.getElementById(id);
    const audioElement = drumPad.querySelector("audio");
    if (!isTurnedOn) {
      setActiveDrumPad("");
      drumPad.style.boxShadow = "1px 1px 2px rgba(0, 0, 0, 0.8)";
    } else if (audioElement) {
      setActiveDrumPad(id);
      drumPad.style.backgroundColor = color;
      drumPad.style.color = "white";
      audioElement.currentTime = 0;
      audioElement.play();
    }

    setTimeout(() => {
      drumPad.style.boxShadow = `1px 0px 8px ${color}`;
      drumPad.style.backgroundColor = "#1e293b";
      drumPad.style.color = color;
    }, 50);
  };

  const handleKeyDown = (e) => {
    const audioId = e.key.toUpperCase();
    const audioElement = document.getElementById(audioId);
    if (!isTurnedOn && audioElement) {
      setActiveDrumPad("");
      const parentElement = audioElement.parentNode;
      parentElement.style.boxShadow = "1px 1px 2px rgba(0, 0, 0, 0.8)";
      return;
    }
    if (audioElement) {
      const parentElement = audioElement.parentNode;
      setActiveDrumPad(parentElement.id);
      parentElement.style.backgroundColor = color;
      parentElement.style.color = "white";
      audioElement.currentTime = 0;
      audioElement.play();
    }
  };

  const handleKeyUp = (e) => {
    const audioId = e.key.toUpperCase();
    const audioElement = document.getElementById(audioId);
    if (audioElement) {
      const parentElement = audioElement.parentNode;
      parentElement.style.backgroundColor = "#1e293b";
      parentElement.style.color = color;
      parentElement.style.boxShadow = `1px 0px 8px ${color}`;
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  useEffect(() => {
    window.addEventListener("keyup", handleKeyUp);
    return () => {
      window.removeEventListener("keyup", handleKeyUp);
    };
  });

  return (
    <DrumMachineStyles achineStyles id="drum-machine" color={color}>
      <DrumPadSquer
        handleClick={handleClick}
        color={color}
        volume={volume}
        drumPadsData={dataSounds}
      />
      <SettingsPanel
        color={color}
        volume={volume}
        isTurnedOn={isTurnedOn}
        activeDrumPad={activeDrumPad}
        setActiveDrumPad={setActiveDrumPad}
        setIsTurnedOn={setIsTurnedOn}
        setColor={setColor}
        setVolume={setVolume}
        setDataSounds={setDataSounds}
      />
    </DrumMachineStyles>
  );
};
