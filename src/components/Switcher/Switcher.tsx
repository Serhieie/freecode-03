import { SwitcherStyles, SwitchButton } from "./Switcher.styles";
import { LuPowerOff, LuPower } from "react-icons/lu";
import { ReactNode } from "react";

interface SwitcherProps {
  toggleVolume: () => void;
  setIsTurnedOn?: () => void;
  isTurnedOn: boolean;
  color: string;
  children?: ReactNode;
}

export const Switcher: React.FC<SwitcherProps> = ({
  toggleVolume,
  isTurnedOn,
  color,
}) => {
  return (
    <SwitcherStyles isTurnedOn={isTurnedOn} color={color}>
      <SwitchButton onClick={toggleVolume} color={color}>
        {isTurnedOn ? (
          <LuPowerOff className="volumeMute" size={14} />
        ) : (
          <LuPower className="volumeHigh" size={14} />
        )}
        <div className="indicator" />
      </SwitchButton>
    </SwitcherStyles>
  );
};
