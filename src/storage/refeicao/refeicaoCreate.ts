import AsyncStorage from "@react-native-async-storage/async-storage";
import { REFEICAO_COLLECTION } from "../storageConfig";
import { refeicaoGetAll } from "./refeicaoGetAll";

export async function refeicaoCreate(newRefeicao: object) {
  try {
    const storedRefeicao = await refeicaoGetAll();

    const items = [...storedRefeicao, newRefeicao];

    const storage = JSON.stringify(items);

    await AsyncStorage.setItem(REFEICAO_COLLECTION, storage);
  } catch (error) {
    throw error;
  }
}
