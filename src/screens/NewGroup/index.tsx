import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import theme from "../../theme";
import { Container, IconNewGroup } from "./styles";

export function NewGroup() {
  return (
    <>
      <Container>
        <Header showBackButton />
        <IconNewGroup />
        <Highlight
          title="Nova Turma"
          subTitle="Crie uma turma para adicionar pessoas"
        />
        <Input
          placeholder="Nome da turma"
          placeholderTextColor={theme.COLORS.GRAY_300}
        />
        <Button title="Criar" />
      </Container>
    </>
  );
}
