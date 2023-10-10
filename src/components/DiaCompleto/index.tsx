import { View, Text, FlatList } from "react-native";
import uuid from "react-native-uuid";
import { IRefeicao, Refeicao } from "../Refeicao";
import { useState, useEffect, useCallback } from "react";
import { refeicaoGetAll } from "../../storage/refeicao/refeicaoGetAll";
import { useFocusEffect } from "@react-navigation/native";

type DiaCompleto = {
  date: string;
};

export function DiaCompleto({ date }: DiaCompleto) {
  const [refeicao, setRefeicao] = useState<string[]>([]);

  async function fetchRefeicao() {
    try {
      const data = await refeicaoGetAll();
      setRefeicao(data);
    } catch (error) {
      console.log(error);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchRefeicao();
    }, [])
  );

  return (
    <View className="mt-8">
      <Text className="text-colors-GRAY_1 font-nunito_700 text-lg">{date}</Text>
      <FlatList
        data={refeicao}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }: any) => {
          const value = item as IRefeicao;
          const { date, description, onTheDiet, horas, nome } = value;

          return (
            <Refeicao
              nome={nome}
              horas={horas}
              onTheDiet={onTheDiet}
              date={date}
              description={description}
            />
          );
        }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text>Você não cadastrou nenhuma refeição ainda!</Text>
        )}
      />
    </View>
  );
}
