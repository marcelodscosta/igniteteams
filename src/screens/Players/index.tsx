import { Alert, FlatList, Text } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import theme from "../../theme";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { useState } from "react";
import { PlayerCard } from "../../components/PlayerCard";
import { TextFlatList } from "../Groups/styles";
import { Button } from "../../components/Button";
import { useRoute } from "@react-navigation/native";
import { playerAddByGroup } from "../../storage/player/playerAddByGroup";
import { AppError } from "../../utils/AppError";
import { playerGetByGroup } from "../../storage/player/playerGetByGroup";

type RouteParams = {
  group: string;
};

export function Players() {
  const route = useRoute();

  const { group } = route.params as RouteParams;

  const [newPlayername, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState([]);

  const teams = ["Time A", "Time B"];

  async function handleAddPlayer() {
    if (newPlayername.trim().length === 0) {
      return Alert.alert(
        "Nova Pessoa",
        "Informe o nome da Pessoa para adicionar"
      );
    }
    try {
      const newPlayer = { name: newPlayername, team };

      await playerAddByGroup(newPlayer, group);

      const player = await playerGetByGroup(group);
      console.log(player);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova Pessoa", error.message);
      }
      Alert.alert("Nova Pessoa", "Não foi possível Adicionar");
      console.log(error);
    }
  }

  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subTitle="Adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome da Pessoa"
          placeholderTextColor={theme.COLORS.GRAY_300}
          onChangeText={setNewPlayerName}
        />
        <ButtonIcon icon="add" onPress={handleAddPlayer} />
      </Form>

      <HeaderList>
        <FlatList
          data={teams}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
        style={{ width: "98%", marginLeft: 40 }}
        ListEmptyComponent={() => (
          <TextFlatList>Que tal cadatrar a primeira turma?</TextFlatList>
        )}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={[
          { paddingBottom: 100 },
          players.length === 0 && { flex: 1 },
        ]}
      />

      <Button title="Remover Turma" type="SECUNDARY" />
    </Container>
  );
}
