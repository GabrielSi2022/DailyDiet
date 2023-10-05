import { View, Text } from "react-native";

interface IPanelStatics {
  valor: number;
  text: string;
}

export function PanelStatics({ valor, text }: IPanelStatics) {
  return (
    <View className="mb-3">
      <View className="bg-colors-GRAY_7 w-full max-h-[89px] justify-center items-center p-4 rounded-lg  flex-col">
        <Text className="font-nunito_700 text-2xl text-colors-GRAY_1 pb-2">
          {valor}
        </Text>
        <Text className="font-nunito_400 text-sm text-colors-GRAY_2">
          {text}
        </Text>
      </View>
    </View>
  );
}
