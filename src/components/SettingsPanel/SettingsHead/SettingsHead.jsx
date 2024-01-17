import { Switcher } from "../../Switcher/Switcher";
import { Title, TitleLine } from "./SettingsHead.styled";

export const SettingsHead = ({ togglePower, setIsTurnedOn, isTurnedOn, color }) => {
  return (
    <TitleLine>
      <Title>Serhieie Drum Machine </Title>
      <Switcher
        toggleVolume={togglePower}
        setIsTurnedOn={setIsTurnedOn}
        isTurnedOn={isTurnedOn}
        color={color}
      />
    </TitleLine>
  );
};
