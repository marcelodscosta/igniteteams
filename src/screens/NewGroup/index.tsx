import { useTheme } from "styled-components/native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { Container, IconNewGroup } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "../../storage/group/groupCreate";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const theme = useTheme();

  const navitation = useNavigation();

  const handleNew = async () => {
    try {
      await groupCreate(group);
      navitation.navigate("players", { group });
    } catch (error) {
      console.log(error);
    }
  };

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
          onChangeText={setGroup}
        />
        <Button title="Criar" onPress={handleNew} />
      </Container>
    </>
  );
}
