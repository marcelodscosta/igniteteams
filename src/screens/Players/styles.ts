import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  align-items: center;
`;

export const Form = styled.View`
  width: 90%;
  flex-direction: row;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  border-radius: 6px;
  padding: 0px 12px;
`;
