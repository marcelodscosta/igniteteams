import styled from "styled-components/native";

export const InputText = styled.TextInput`
  height: 56px;
  width: 90%;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 12px;
`;
