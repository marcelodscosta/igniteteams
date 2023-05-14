import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  width: 380px;
  height: 96px;

  padding: 32px 24px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  border-radius: 6px;
  margin-bottom: 12px;
`;

export const IconGroup = styled(UsersThree).attrs(({ theme }) => ({
  color: theme.COLORS.GREEN_500,
  size: 32,
  weight: "fill",
}))`
  margin-right: 20px;
`;

export const TextGroup = styled.Text`
  font-family: ${({ theme }) => theme.FONT_FAMILY.REGULAR};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
`;
