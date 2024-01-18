import styled from "@emotion/styled";

interface SettingsPanelStyledProps {
  color: string;
  volume: number;
  isTurnedOn: boolean;
}

export const SettingsPanelStyled = styled.div<SettingsPanelStyledProps>`
  background-color: #334155;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  margin: 80px auto;
  padding: 20px;
  gap: 10px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.6);
  user-select: none;

  @media (max-width: 768px) {
    margin: 0;
    gap: 4px;
    padding: 10px;
  }
`;

interface DisplayProps {
  isTurnedOn: boolean;
}

export const Display = styled.div<DisplayProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => (props.isTurnedOn ? "#a0a6af" : "#52565c")};
  border: 1px solid rgba(0, 0, 0, 0.4);
  border-radius: 4px;

  color: rgba(0, 0, 0, 0.6);

  box-shadow: inset 0 0 10px rgba(0, 0, 0, 0.7);

  font-size: 24px;
  width: 190px;
  height: 40px;

  margin: 0 auto;
  margin-top: 36px;
  padding: 0;
`;

export const ChangeColorButton = styled.button`
  font-family: "Electrolize", sans-serif;
  background-color: #1e293b;
  color: #a0a6af;
  border-radius: 4px;
  font-size: 10px;
  width: 80px;
  height: 28px;
  border: none;
  outline: none;
  user-select: none;
  cursor: pointer;
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.6);

  margin-top: auto;
  margin-left: auto;

  @media (max-width: 768px) {
    width: 120px;
    height: 40px;
    margin: 0 auto;
    margin-top: 30px;
  }
`;
