import AsyncStorage from "@react-native-async-storage/async-storage";
import { PlayerStorageDTO } from "./PlayerStorageDTO";
import { PLAYER_COLLECTION } from "../storageConfig";

export async function playerGetByGroup(group: string) {
  try {
    const storage = await AsyncStorage.getItem(`${PLAYER_COLLECTION}-${group}`);

    if (storage) {
      const players = JSON.parse(storage) as PlayerStorageDTO[];
      return players;
    } else {
      return [];
    }
  } catch (error) {
    throw error;
  }
}
