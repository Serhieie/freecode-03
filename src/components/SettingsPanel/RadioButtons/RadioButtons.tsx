import { RadioContainer, RadioInput, RadioLabel } from "./RadioButtons.styled";
import {
  drumPadsDataFreeCode,
  drumPadsDataTom,
  drumPadsDataPerc,
} from "../../../constants/constants";
import { useDispatch, useSelector } from "react-redux";
import {
  changeDataSounds,
  getCheckedRadio,
  changeCheckedRadio,
} from "../../../redux/drumMachineSlice";

export const RadioButtons: React.FC = () => {
  const dispatch = useDispatch();
  const activeRadio = useSelector(getCheckedRadio);

  const handleDrumTypeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    switch (value) {
      case "tom":
        dispatch(changeCheckedRadio(value));
        return dispatch(changeDataSounds(drumPadsDataTom));
      case "perc":
        dispatch(changeCheckedRadio(value));
        return dispatch(changeDataSounds(drumPadsDataPerc));
      default:
        dispatch(changeCheckedRadio(value));
        return dispatch(changeDataSounds(drumPadsDataFreeCode));
    }
  };
  return (
    <RadioContainer>
      <RadioLabel>
        <RadioInput
          onChange={handleDrumTypeChange}
          id="basic"
          type="radio"
          name="drumType"
          value="basic"
          checked={activeRadio === "basic"}
        />
        Basic
      </RadioLabel>
      <RadioLabel>
        <RadioInput
          onChange={handleDrumTypeChange}
          id="tom"
          type="radio"
          name="drumType"
          value="tom"
          checked={activeRadio === "tom"}
        />
        Tom
      </RadioLabel>
      <RadioLabel>
        <RadioInput
          onChange={handleDrumTypeChange}
          id="Perc"
          type="radio"
          name="drumType"
          value="perc"
          checked={activeRadio === "perc"}
        />
        Perc
      </RadioLabel>
    </RadioContainer>
  );
};
