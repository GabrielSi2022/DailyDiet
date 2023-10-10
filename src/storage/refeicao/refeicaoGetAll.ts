import AsyncStorage from "@react-native-async-storage/async-storage";

import { REFEICAO_COLLECTION } from "../storageConfig";

export async function refeicaoGetAll() {
  try {
    const storage = await AsyncStorage.getItem(REFEICAO_COLLECTION);

    const refeicao: string[] = storage ? JSON.parse(storage) : [];

    return refeicao;
  } catch (error) {
    throw error;
  }
}
