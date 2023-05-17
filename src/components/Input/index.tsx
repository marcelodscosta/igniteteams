import { TextInputProps } from "react-native";
import { InputText } from "./styles";

interface InputProps extends TextInputProps {
  placeholder: string;
}

export function Input({ placeholder, ...rest }: InputProps) {
  return <InputText placeholder={placeholder} {...rest} autoCorrect={false} />;
}
