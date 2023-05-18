import styled from "styled-components/native";
import { UsersThree } from "phosphor-react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export const Container = styled(SafeAreaView)`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  align-items: center;
`;

export const IconNewGroup = styled(UsersThree).attrs(({ theme }) => ({
  size: 56,
  color: theme.COLORS.GREEN_700,
}))`
  margin-top: 70px;
`;

export const TextInputGroup = styled.TextInput`
  height: 56px;
  width: 90%;
  border-radius: 6px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  padding: 12px;
`;
