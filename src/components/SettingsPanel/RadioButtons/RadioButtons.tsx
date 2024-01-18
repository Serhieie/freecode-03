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
      <RadioLabel>
        <RadioInput
          onChange={handleDrumTypeChange}
          id="Clap"
          type="radio"
          name="drumType"
          value="clap"
          checked={activeRadio === "clap"}
        />
        Clap
      </RadioLabel>
      <RadioLabel>
        <RadioInput
          onChange={handleDrumTypeChange}
          id="Openhat"
          type="radio"
          name="drumType"
          value="openhat"
          checked={activeRadio === "openhat"}
        />
        Openhat
      </RadioLabel>
      <RadioLabel>
        <RadioInput
          onChange={handleDrumTypeChange}
          id="Mixed"
          type="radio"
          name="drumType"
          value="mixed"
          checked={activeRadio === "mixed"}
        />
        Mixed
      </RadioLabel>
    </RadioContainer>
  );
};
