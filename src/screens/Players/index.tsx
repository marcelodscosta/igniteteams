import { FlatList, Text } from "react-native";
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

type RouteParams = {
  group: string;
};

export function Players() {
  const route = useRoute();

  const { group } = route.params as RouteParams;

  const [team, setTeam] = useState("Time A");
  const [players, setPlayers] = useState([
    "Marcelo",
    "Joaquim",
    "Viviane",
    "Murilo",
    "Antonio",
    "João",
    "Maria",
  ]);

  const teams = ["Time A", "Time B", "Time C"];
  return (
    <Container>
      <Header showBackButton />
      <Highlight title={group} subTitle="Adicione a galera e separe os times" />

      <Form>
        <Input
          placeholder="Nome da Pessoa"
          placeholderTextColor={theme.COLORS.GRAY_300}
        />
        <ButtonIcon icon="add" />
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
