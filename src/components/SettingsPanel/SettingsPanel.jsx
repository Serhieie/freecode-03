import { generateRandomColor } from "../../helpers/randomColor";
import { SettingsPanelStyled, Display, ChangeColorButton } from "./SettingsPanel.styled";
import { SettingsHead } from "./SettingsHead/SettingsHead";
import { RadioButtons } from "./RadioButtons/RadioButtons";
import { VolumeBar } from "./VolumeBar/VolumeBar";

export const SettingsPanel = ({
  color,
  volume,
  isTurnedOn,
  activeDrumPad,
  setActiveDrumPad,
  setIsTurnedOn,
  setColor,
  setVolume,
  setDataSounds,
}) => {
  const togglePower = () => {
    if (isTurnedOn) {
      setActiveDrumPad(" ");
    }
    setIsTurnedOn(!isTurnedOn);
  };

  const handleColorChangeForDrumPads = (newColor) => {
    const drumPads = document.querySelectorAll(".drum-pad");
    drumPads.forEach((drumPad) => {
      drumPad.style.boxShadow = `1px 0px 8px ${newColor}`;
      drumPad.style.backgroundColor = "#1e293b";
      drumPad.style.color = newColor;
    });
  };

  const handleChangeColor = (e) => {
    e.target.style.boxShadow = "1px 1px 2px rgba(0, 0, 0, 0.8)";

    const newColor = generateRandomColor();
    setColor(newColor);
    handleColorChangeForDrumPads(newColor);

    setTimeout(() => {
      e.target.style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.6)";
    }, 50);
  };

  return (
    <SettingsPanelStyled
      id="settings"
      color={color}
      volume={volume}
      isTurnedOn={isTurnedOn}
    >
      <SettingsHead
        togglePower={togglePower}
        setIsTurnedOn={setIsTurnedOn}
        isTurnedOn={isTurnedOn}
        color={color}
      />
      <Display id="display" isTurnedOn={isTurnedOn}>
        {activeDrumPad}
      </Display>
      <RadioButtons setDataSounds={setDataSounds} />
      <VolumeBar
        volume={volume}
        isTurnedOn={isTurnedOn}
        setActiveDrumPad={setActiveDrumPad}
        setVolume={setVolume}
      />
      <ChangeColorButton onClick={handleChangeColor} type="button">
        Change Color
      </ChangeColorButton>
    </SettingsPanelStyled>
  );
};
