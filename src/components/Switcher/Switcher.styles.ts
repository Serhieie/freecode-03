import styled from "@emotion/styled";

interface SwitcherStylesProps {
  isTurnedOn: boolean;
}

export const SwitcherStyles = styled.div<SwitcherStylesProps>`
  margin-left: auto;
  background-color: #1e293b;
  width: 50px;
  height: 20px;
  border-radius: 12.5px;
  padding: 1px;
  transition: background-color 0.3s;
  z-index: 99;
  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.5);

  .indicator {
    background-color: #334155;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
    transition: transform 0.3s;
    transform: translateX(${(props) => (props.isTurnedOn ? "26px" : "-4px")});
  }
`;

interface SwitchButtonProps {
  color: string;
  isTurnedOn: boolean;
}

export const SwitchButton = styled.button<SwitchButtonProps>`
  outline: none;
  transition: all 300ms ease-in-out;
  color: #475569;
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  cursor: pointer;

  svg {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    transition: all 300ms ease-in-out;
  }

  svg.volumeHigh {
    color: ${(props) => `${props.isTurnedOn ? props.color : "#a0a6af"}`};
    right: 4px;
  }

  svg.volumeMute {
    color: ${(props) => `${props.color}`};
    left: 5px;
  }
`;
