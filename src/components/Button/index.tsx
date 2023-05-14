import { TouchableOpacityProps } from "react-native";
import { Container, TextButton } from "./styles";
import { ButtonTypeStyleProps } from "./styles";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
  type?: ButtonTypeStyleProps;
}

export function Button({ title, type = "PRIMARY", ...rest }: ButtonProps) {
  return (
    <Container {...rest} type={type}>
      <TextButton>{title}</TextButton>
    </Container>
  );
}
