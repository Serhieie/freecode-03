import { RadioContainer, RadioInput, RadioLabel } from "./RadioButtons.styled";
import {
  drumPadsDataFreeCode,
  drumPadsDataTom,
  drumPadsDataPerc,
  drumPadsDataClap,
  drumPadsDataOpenhat,
  drumPadsDataMixed,
} from "../../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  changeDataSounds,
  getCheckedRadio,
  changeCheckedRadio,
  getColor,
  getIsTurnedOn,
} from "../../../redux/drumMachineSlice";

export const RadioButtons: React.FC = () => {
  const dispatch = useDispatch();
  const activeRadio = useSelector(getCheckedRadio);
  const color = useSelector(getColor);
  const isTurnedOn = useSelector(getIsTurnedOn);

  const handleDrumTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    switch (value) {
      case "tom":
        dispatch(changeCheckedRadio(value));
        return dispatch(changeDataSounds(drumPadsDataTom));
      case "perc":
        dispatch(changeCheckedRadio(value));
        return dispatch(changeDataSounds(drumPadsDataPerc));
      case "clap":
        dispatch(changeCheckedRadio(value));
        return dispatch(changeDataSounds(drumPadsDataClap));
      case "openhat":
        dispatch(changeCheckedRadio(value));
        return dispatch(changeDataSounds(drumPadsDataOpenhat));
      case "mixed":
        dispatch(changeCheckedRadio(value));
        return dispatch(changeDataSounds(drumPadsDataMixed));
      default:
        dispatch(changeCheckedRadio(value));
        return dispatch(changeDataSounds(drumPadsDataFreeCode));
    }
  };

  const sets = ["Basic", "Tom", "Perc", "Clap", "Openhat", "Mixed"];

  return (
    <RadioContainer>
      {sets.map((set, i) => (
        <RadioLabel key={set + i}>
          <RadioInput
            onChange={handleDrumTypeChange}
            id={set.toLowerCase()}
            type="radio"
            name="drumType"
            value={set.toLowerCase()}
            checked={activeRadio === set.toLowerCase()}
            color={color}
            isTurnedOn={isTurnedOn}
          />
          {set}
        </RadioLabel>
      ))}
    </RadioContainer>
  );
};
