import { DrumPad, DrumPadsDisplay } from "./DrumPadSquer.styled";
import React, { useEffect } from "react";
export const DrumPadSquer = ({ handleClick, color, volume, drumPadsData }) => {
  useEffect(() => {
    const setVolumeForAllAudioElements = () => {
      const audioElements = document.querySelectorAll(".drum-pad audio");
      audioElements.forEach((audioElement) => {
        audioElement.volume = volume;
      });
    };
    setVolumeForAllAudioElements();
  }, [volume]);

  return (
    <DrumPadsDisplay color={color}>
      {drumPadsData.map(({ id, key, audioSrc }) => (
        <DrumPad
          className="drum-pad"
          key={id}
          onClick={() => handleClick(id)}
          id={id}
          color={color}
        >
          <audio className="clip" id={key} src={audioSrc} volume={volume}></audio>
          {key}
        </DrumPad>
      ))}
    </DrumPadsDisplay>
  );
};
