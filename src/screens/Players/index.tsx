import { Alert, FlatList, Text, Keyboard } from "react-native";
import { ButtonIcon } from "../../components/ButtonIcon";
import { Filter } from "../../components/Filter";
import { Header } from "../../components/Header";
import { Highlight } from "../../components/Highlight";
import { Input } from "../../components/Input";
import theme from "../../theme";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";
import { useEffect, useState } from "react";
import { PlayerCard } from "../../components/PlayerCard";
import { TextFlatList } from "../Groups/styles";
import { Button } from "../../components/Button";
import { useNavigation, useRoute } from "@react-navigation/native";
import { playerAddByGroup } from "../../storage/player/playerAddByGroup";
import { AppError } from "../../utils/AppError";
import { playerGetByGroup } from "../../storage/player/playerGetByGroup";
import { playerGetByGroupAndTeam } from "../../storage/player/playersGetByGroupAndTeam";
import { PlayerStorageDTO } from "../../storage/player/PlayerStorageDTO";
import { playerRemoveByGroup } from "../../storage/player/playerRemoveByGroup";
import { groupRemoveByName } from "../../storage/group/groupRemoveByName";
import { Loading } from "../../components/Loading";

type RouteParams = {
  group: string;
};

export function Players() {
  const [isLoading, setIsLoading] = useState(true);

  const route = useRoute();

  const navigation = useNavigation();

  const { group } = route.params as RouteParams;

  const [newPlayername, setNewPlayerName] = useState("");
  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState<PlayerStorageDTO[]>([]);

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
      Keyboard.dismiss();
      fetchPlayerByTeam();
      setNewPlayerName("");

      const player = await playerGetByGroup(group);
    } catch (error) {
      if (error instanceof AppError) {
        Alert.alert("Nova Pessoa", error.message);
      }
      Alert.alert("Nova Pessoa", "Não foi possível Adicionar");
      console.log(error);
    }
  }

  const fetchPlayerByTeam = async () => {
    try {
      setIsLoading(true);
      const playersByTeam = await playerGetByGroupAndTeam({ group, team });
      setPlayers(playersByTeam);
    } catch (error) {
      console.log(error);
      Alert.alert(
        "Pessoas",
        "Não foi possível carregar as pessoas do time selecionado"
      );
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchPlayerByTeam();
  }, [team]);

  async function groupRemove() {
    try {
      await groupRemoveByName(group);
      navigation.navigate("groups");
    } catch (error) {
      throw error;
    }
  }

  async function handleGroupRemove() {
    Alert.alert("Remover", "Deseja Remover o grupo?", [
      { text: "Não", style: "cancel" },
      {
        text: "Sim",
        onPress: () => {
          groupRemove();
        },
      },
    ]);
  }

  async function handlePlayerRemove(playerName: string) {
    try {
      await playerRemoveByGroup(group, playerName);
      fetchPlayerByTeam();
    } catch (error) {
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
          value={newPlayername}
          onSubmitEditing={handleAddPlayer}
          returnKeyType="done"
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

      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={players}
          keyExtractor={(item) => item.name}
          renderItem={({ item }) => (
            <PlayerCard
              name={item.name}
              onRemove={() => {
                handlePlayerRemove(item.name);
              }}
            />
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
      )}

      <Button
        title="Remover Turma"
        type="SECUNDARY"
        onPress={handleGroupRemove}
      />
    </Container>
  );
}
