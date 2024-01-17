import styled from "@emotion/styled";

export const DrumPad = styled.div`
  background-color: #1e293b;
  font-family: "Bebas Neue", sans-serif;
  font-size: 26px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90px;
  height: 90px;
  border-radius: 12px;
  box-shadow: 1px 0px 8px ${(props) => `${props.color}`};
  cursor: pointer;
  user-select: none;

  @media (max-width: 768px) {
    margin: 0;
    width: 90px;
    height: 90px;
  }
`;

export const DrumPadsDisplay = styled.div`
  background-color: #334155;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 300px;
  height: 300px;
  border-radius: 10px;
  margin: 80px auto;
  padding: 20px;
  gap: 12px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.6);

  @media (max-width: 768px) {
    margin: 0;
    margin-top: 20px;
    padding: 0;
    gap: 4px;
    padding: 10px;
  }
`;
