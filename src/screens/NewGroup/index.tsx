import { useTheme } from "styled-components/native";
import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import { Container, IconNewGroup } from "./styles";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import { groupCreate } from "../../storage/group/groupCreate";
import { AppError } from "../../utils/AppError";
import { Alert } from "react-native";

export function NewGroup() {
  const [group, setGroup] = useState("");

  const theme = useTheme();

  const navitation = useNavigation();

  const handleNew = async () => {
    try {
      if (group.trim().length === 0) {
        return Alert.alert("Novo Grupo, Informe o nome do grupo");
      }

      await groupCreate(group);
      navitation.navigate("players", { group });
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Novo Grupo", error.message);
      } else {
        Alert.alert("Novo Grupo", "Não foi possível criar o grupo");
      }
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
