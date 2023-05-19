import AsyncStorage from "@react-native-async-storage/async-storage";

import { PLAYER_COLLECTION, GROUP_COLLECTION } from "../storageConfig";
import { groupGetAll } from "./groupGetAll";

export async function groupRemoveByName(groupDeleted: string) {
  try {
    const storedGroups = await groupGetAll();
    const filtered = storedGroups.filter((group) => group !== groupDeleted);

    await AsyncStorage.setItem(`${GROUP_COLLECTION}`, JSON.stringify(filtered));
    await AsyncStorage.removeItem(`${PLAYER_COLLECTION}-${groupDeleted}`);
  } catch (error) {
    throw error;
  }
}
