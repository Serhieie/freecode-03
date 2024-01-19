import styled from "@emotion/styled";

export const RadioContainer = styled.div`
  outline: none;
  border: none;
  position: absolute;
  top: 58%;
  left: 48%;
  transform: translate(50%, -50%);
  margin: 0 auto;
  margin-top: 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  height: 80px;
  gap: 10px;

  @media (max-width: 768px) {
    position: static;
    width: 240px;
    top: 0%;
    left: 0%;
    transform: translate(0, 0);
    flex-direction: row;
    margin-top: 20px;
  }
`;

interface RadioInputProps {
  color: string;
  isTurnedOn: boolean;
}

export const RadioInput = styled.input<RadioInputProps>`
  background-color: #1e2e47;
  appearance: none;
  -webkit-appearance: none;
  outline: none;
  border: 1px solid #475569;
  border-radius: 50%;
  width: 8px;
  height: 8px;
  margin-right: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:checked {
    background-color: ${(props) => `${props.isTurnedOn ? props.color : "#1e2e47"}`};
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.5);
  }
`;

export const RadioLabel = styled.label`
  display: flex;
  align-items: baseline;
  color: #a0a6af;
  cursor: pointer;
  user-select: none;
`;
