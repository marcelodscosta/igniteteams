import { TouchableOpacityProps } from "react-native";
import {
    Container,
    IconGroup,
    TextGroup,
} from "./styles";

type GroupCardProps = TouchableOpacityProps & {
    title: string,
}

export function GroupCard({ 
    title, 
    ...rest 
}: GroupCardProps) {
    return (
        <Container {...rest}>
            <IconGroup />
            <TextGroup>
                {title}
            </TextGroup>
        </Container>
    )

};