import { SwitcherStyles, SwitchButton } from "./Switcher.styles";
import { LuPowerOff, LuPower } from "react-icons/lu";

export const Switcher = ({ toggleVolume, isTurnedOn, color }) => {
  return (
    <SwitcherStyles isTurnedOn={isTurnedOn} color={color}>
      <SwitchButton onClick={toggleVolume}>
        {isTurnedOn ? (
          <LuPowerOff className="volumeMute" size={14} color={color} />
        ) : (
          <LuPower className="volumeHigh" size={14} color={color} />
        )}
        <div className="indicator" />
      </SwitchButton>
    </SwitcherStyles>
  );
};
