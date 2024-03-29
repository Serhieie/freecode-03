import { Switcher } from "../../Switcher/Switcher";

import { Title, TitleLine } from "./SettingsHead.styled";
import { useDispatch, useSelector } from "react-redux";
import {
  getIsTurnedOn,
  toggleIsTurnedOn,
  addActiveDrumPad,
} from "../../../redux/drumMachineSlice";

interface SettingsHeadProps {
  color: string;
}

export const SettingsHead: React.FC<SettingsHeadProps> = ({ color }) => {
  const dispatch = useDispatch();
  const isTurnedOn = useSelector(getIsTurnedOn);

  const togglePower = () => {
    if (isTurnedOn) {
      dispatch(addActiveDrumPad(""));
    }
    dispatch(toggleIsTurnedOn());
  };

  return (
    <TitleLine>
      <Title isTurnedOn={isTurnedOn} color={color}>
        Serhieie Drum Machine{" "}
      </Title>
      <Switcher togglePower={togglePower} isTurnedOn={isTurnedOn} color={color} />
    </TitleLine>
  );
};
