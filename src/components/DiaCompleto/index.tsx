import { View, Text, FlatList } from "react-native";
import { Refeicao } from "../Refeicao";

export function DiaCompleto() {
  const refeicao = [""];
  return (
    <View className="mt-8">
      <Text className="text-colors-GRAY_1 font-nunito_700 text-lg">
        12.08.22
      </Text>
      <FlatList
        data={refeicao}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Refeicao title="X-tudo" horas="20:00" />}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
