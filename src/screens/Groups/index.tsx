import { useState } from "react";
import { GroupCard } from "../../components/GroupCard";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Container, TextFlatList } from "./styles";
import { FlatList } from "react-native";
import { Button } from "../../components/Button";

export function Groups() {
  const [groups, setGroups] = useState([
    "Galera do Futebol",
    "Galera RocketSeat",
    "Galera do Comercial",
    "Galera da Faculdade",
    "Galera do Curso técnico",
  ]);

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subTitle="Jogue com a sua turma" />

      <FlatList
        style={{ width: "90%" }}
        data={groups}
        keyExtractor={(groups) => groups}
        renderItem={({ item }) => <GroupCard title={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <TextFlatList>
            Nenhum grupo cadastrado, seja o primeiro a cadastrar um grupo!!! .
          </TextFlatList>
        }
      />

      <Button title="Criar Nova Turma" />
    </Container>
  );
}
