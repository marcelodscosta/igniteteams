import { playerGetByGroup } from "./playerGetByGroup";

type Props = {
  group: string;
  team: string;
};

export async function playerGetByGroupAndTeam({ group, team }: Props) {
  try {
    const storage = await playerGetByGroup(group);
    const players = storage.filter((item) => item.team === team);
    return players;
  } catch (error) {
    throw error;
  }
}
