import { css } from "styled-components";
import styled from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
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

export const HeaderList = styled.View`
  width: 80%;
  flex-direction: row;
  align-items: center;
  margin-left: 30px;
`;

export const NumbersOfPlayers = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_200};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
