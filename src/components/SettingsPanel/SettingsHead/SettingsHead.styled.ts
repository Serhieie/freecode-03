import styled from "@emotion/styled";

interface TitleProps {
  color: string;
  isTurnedOn: boolean;
}

export const Title = styled.h1<TitleProps>`
  margin: 0;
  padding: 0;
  font-size: 16px;
  color: ${(props) => `${props.isTurnedOn ? props.color : "#a0a6af"}`};
`;

export const TitleLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
