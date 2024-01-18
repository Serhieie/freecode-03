import React from "react";
import { SettingsPanelStyled, Display, ChangeColorButton } from "./SettingsPanel.styled";
import { generateRandomColor } from "../../helpers/randomColor";
import { SettingsHead } from "./SettingsHead/SettingsHead";
import { RadioButtons } from "./RadioButtons/RadioButtons";
import { VolumeBar } from "./VolumeBar/VolumeBar";
import { changeColor } from "../../redux/drumMachineSlice";
import { useSelector, useDispatch } from "react-redux";
import { getVolume } from "../../redux/drumMachineSlice";
import { DrumMachineState } from "../../redux/initialState";

type RootState = {
  drumMachine: DrumMachineState;
};

interface SettingsPanelProps {
  color: string;
  isTurnedOn: boolean;
  activeDrumPad: string;
}

const SettingsPanel: React.FC<SettingsPanelProps> = ({
  color,
  isTurnedOn,
  activeDrumPad,
}) => {
  const dispatch = useDispatch();
  const volume = useSelector((state: RootState) => getVolume(state));

  const handleColorChangeForDrumPads = (newColor: string) => {
    const drumPads = document.querySelectorAll(".drum-pad");
    drumPads.forEach((drumPad) => {
      (drumPad as HTMLElement).style.boxShadow = `1px 0px 8px ${newColor}`;
      (drumPad as HTMLElement).style.backgroundColor = "#1e293b";
      (drumPad as HTMLElement).style.color = newColor;
    });
  };

  const handleChangeColor = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.currentTarget.style.boxShadow = "1px 1px 2px rgba(0, 0, 0, 0.8)";
    const newColor = generateRandomColor();
    dispatch(changeColor(newColor));
    handleColorChangeForDrumPads(newColor);

    setTimeout(() => {
      if (!e.currentTarget) {
        return;
      }
      e.currentTarget.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.6)";
    }, 50);
  };

  return (
    <SettingsPanelStyled
      id="settings"
      color={color}
      volume={volume}
      isTurnedOn={isTurnedOn}
    >
      <SettingsHead color={color} />
      <Display id="display" isTurnedOn={isTurnedOn}>
        {activeDrumPad}
      </Display>
      <RadioButtons />
      <VolumeBar isTurnedOn={isTurnedOn} volume={volume} color={color} />
      <ChangeColorButton onClick={handleChangeColor} type="button">
        Change Color
      </ChangeColorButton>
    </SettingsPanelStyled>
  );
};

export default SettingsPanel;
