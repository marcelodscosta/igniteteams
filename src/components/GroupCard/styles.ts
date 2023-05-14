import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 90px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_500};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 24px;
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
  color: ${({ theme }) => theme.COLORS.GRAY_200};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;
