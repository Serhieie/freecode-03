import { RadioContainer, RadioInput, RadioLabel } from "./RadioButtons.styled";
import {
  drumPadsDataFreeCode,
  drumPadsDataTom,
  drumPadsDataPerc,
} from "../../../constants/constants";

export const RadioButtons = ({ setDataSounds }) => {
  const handleDrumTypeChange = (e) => {
    const value = e.target.value;
    switch (value) {
      case "tom":
        return setDataSounds(drumPadsDataTom);
      case "perc":
        return setDataSounds(drumPadsDataPerc);
      default:
        return setDataSounds(drumPadsDataFreeCode);
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
          defaultChecked
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
        />
        Perc
      </RadioLabel>
    </RadioContainer>
  );
};
