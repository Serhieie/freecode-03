import { VolumeInput, VerticalSliderContainer } from "./VolumeBar.styled";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";

export const VolumeBar = ({ volume, isTurnedOn, setActiveDrumPad, setVolume }) => {
  const onVolumeChange = (e) => {
    let displayVol = Math.ceil(volume * 100);
    if (displayVol >= 96) {
      displayVol = 100;
    } else if (displayVol <= 5) {
      displayVol = 1;
    }

    if (isTurnedOn) {
      setActiveDrumPad(`Volume: ${displayVol}`);
    }
    setVolume(e.target.value);
    setTimeout(() => {
      setActiveDrumPad("");
    }, 3000);
  };

  return (
    <VerticalSliderContainer>
      <FaVolumeXmark className="volumeDown" size={20} value={volume} />

      <VolumeInput
        onChange={onVolumeChange}
        type="range"
        min="0"
        max="1"
        step="0.02"
        value={volume}
      />
      <FaVolumeHigh className="volumeUp" size={20} value={volume} />
    </VerticalSliderContainer>
  );
};
