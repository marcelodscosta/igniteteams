import { useState, useCallback } from "react";
import { GroupCard } from "../../components/GroupCard";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Container, TextFlatList } from "./styles";
import { FlatList } from "react-native";
import { Button } from "../../components/Button";

import { useNavigation, useFocusEffect } from "@react-navigation/native";
import { groupGetAll } from "../../storage/group/groupGetAll";

export function Groups() {
  const navigation = useNavigation();

  const [groups, setGroups] = useState<string[]>([]);

  const handleNewGroup = () => navigation.navigate("new");

  const fetchGroups = async () => {
    try {
      const data = await groupGetAll();
      setGroups(data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleOpenGroup = (group: string) => {
    navigation.navigate("players", { group });
  };

  useFocusEffect(
    useCallback(() => {
      fetchGroups();
    }, [])
  );

  return (
    <Container>
      <Header />
      <Highlight title="Turmas" subTitle="Jogue com a sua turma" />

      <FlatList
        style={{ width: "90%" }}
        data={groups}
        keyExtractor={(groups) => groups}
        renderItem={({ item }) => (
          <GroupCard title={item} onPress={() => handleOpenGroup(item)} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <TextFlatList>
            Nenhum grupo cadastrado, seja o primeiro a cadastrar um grupo!!! .
          </TextFlatList>
        }
      />

      <Button title="Criar Nova Turma" onPress={handleNewGroup} />
    </Container>
  );
}
