import { ButtonIcon } from "../../components/ButtonIcon";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import theme from "../../theme";
import { Container, Form } from "./styles";

export function Players() {
  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da Turma"
        subTitle="Adicione a galera e separe os times"
      />

      <Form>
        <Input
          placeholder="Nome da Pessoa"
          placeholderTextColor={theme.COLORS.GRAY_300}
        />
        <ButtonIcon icon="add" />
      </Form>
    </Container>
  );
}
