import { View, Text } from "react-native";
import { Refeicao } from "../Refeicao";

export function DiaCompleto() {
  return (
    <View className="mt-8">
      <Text className="text-colors-GRAY_1 font-nunito_700 text-lg">
        12.08.22
      </Text>

      <Refeicao title="X-tudo" horas="20:00" />
      <Refeicao title="X-tudo" horas="20:00" />
      <Refeicao title="X-tudo" horas="20:00" />
    </View>
  );
}
