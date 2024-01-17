import styled from "@emotion/styled";

export const DrumMachineStyles = styled.div`
  position: relative;
  background-color: #475569;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 700px;
  height: 360px;
  border-radius: 2px;
  margin: 150px auto;
  padding: 14px;
  gap: 10px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    margin: 20px auto;
    padding: 10px;
    height: 700px;
    width: 360px;
    gap: 4px;
    flex-direction: column-reverse;
  }
`;
