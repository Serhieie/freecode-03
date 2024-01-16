import styled from "@emotion/styled";

export const EditorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 2px;
  padding: 0px 20px;
  margin-bottom: 20px;
  margin-top: 20px;
  box-shadow: 0px 0px 10px rgb(54, 103, 54);

  @media (max-width: 768px) {
    gap: 4px;
    padding: 0px 10px;
  }
`;
