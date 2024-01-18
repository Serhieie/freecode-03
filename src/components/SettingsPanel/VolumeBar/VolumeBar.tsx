import { VolumeInput, VerticalSliderContainer } from "./VolumeBar.styled";
import { FaVolumeHigh, FaVolumeXmark } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { addActiveDrumPad, changeVolume } from "../../../redux/drumMachineSlice";
import { VolumeBarProps } from "./VolumeBar.types";

export const VolumeBar: React.FC<VolumeBarProps> = ({ isTurnedOn, volume, color }) => {
  const dispatch = useDispatch();

  const onVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let displayVol = Math.ceil(volume * 100);
    if (displayVol >= 96) {
      displayVol = 100;
    } else if (displayVol <= 5) {
      displayVol = 0;
    }

    if (isTurnedOn) {
      dispatch(addActiveDrumPad(`Volume: ${displayVol}`));
    }
    dispatch(changeVolume(Number(e.target.value)));
    setTimeout(() => {
      dispatch(addActiveDrumPad(""));
    }, 700);
  };

  return (
    <VerticalSliderContainer color={color} volume={volume}>
      <FaVolumeXmark
        className="volumeDown"
        size={20}
        style={{ color: volume <= 0.1 ? color : "#a0a6af" }}
      />

      <VolumeInput
        onChange={onVolumeChange}
        type="range"
        min={0}
        max={1}
        step={0.02}
        value={volume}
      />
      <FaVolumeHigh
        className="volumeUp"
        size={20}
        style={{ color: volume >= 0.9 ? color : "#a0a6af" }}
      />
    </VerticalSliderContainer>
  );
};
