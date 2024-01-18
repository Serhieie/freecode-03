import { DrumPad, DrumPadsDisplay } from "./DrumPadSquer.styled";
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DrumMachineState } from "../../redux/initialState";
import {
  getVolume,
  getColor,
  getIsTurnedOn,
  addActiveDrumPad,
} from "../../redux/drumMachineSlice";

type RootState = {
  drumMachine: DrumMachineState;
};

export const DrumPadSquer: React.FC = () => {
  const dispatch = useDispatch();
  const color = useSelector(getColor);
  const dataSounds = useSelector((state: RootState) => state.drumMachine.dataSounds);
  const volume = useSelector(getVolume);
  const isTurnedOn = useSelector(getIsTurnedOn);

  const handleClick = (id: string): void => {
    const drumPad = document.getElementById(id);
    const audioElement = drumPad?.querySelector("audio") as HTMLAudioElement | null;

    if (!isTurnedOn) {
      dispatch(addActiveDrumPad(""));
      (drumPad as HTMLElement).style.boxShadow = "1px 1px 2px rgba(0, 0, 0, 0.8)";
    } else if (audioElement) {
      dispatch(addActiveDrumPad(id));
      (drumPad as HTMLElement).style.backgroundColor = color;
      (drumPad as HTMLElement).style.color = "white";
      audioElement.currentTime = 0;
      audioElement.play();
    }

    setTimeout(() => {
      (drumPad as HTMLElement).style.boxShadow = `1px 0px 8px ${color}`;
      (drumPad as HTMLElement).style.backgroundColor = "#1e293b";
      (drumPad as HTMLElement).style.color = color;
    }, 50);
  };

  useEffect(() => {
    const setVolumeForAllAudioElements = () => {
      const audioElements = document.querySelectorAll(".drum-pad audio");
      audioElements.forEach((audioElement) => {
        (audioElement as HTMLAudioElement).volume = volume;
      });
    };
    setVolumeForAllAudioElements();
  }, [volume, dataSounds]);

  return (
    <DrumPadsDisplay color={color}>
      {dataSounds.map(({ id, key, audioSrc, keyToCheck }) => (
        <DrumPad
          className="drum-pad"
          key={id}
          onClick={() => handleClick(id)}
          id={id}
          color={color}
        >
          <audio className="clip" id={keyToCheck} src={audioSrc}></audio>
          {key}
        </DrumPad>
      ))}
    </DrumPadsDisplay>
  );
};
