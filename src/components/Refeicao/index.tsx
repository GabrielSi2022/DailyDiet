import { View, Text, TouchableOpacity } from "react-native";

interface IRefeicao {
  horas: string;
  title: string;
}

export function Refeicao({ horas, title }: IRefeicao) {
  return (
    <TouchableOpacity className="flex-row items-center justify-between border border-colors-GRAY_5 rounded-md px-3 py-[14px] mt-2">
      <View className="flex-row flex-1 items-center gap-3">
        <Text className="font-nunito_700 text-xs leading-[15.6px] text-colors-GRAY_1 ">
          {horas}
        </Text>
        <View className="w-[2px] h-4 bg-colors-GRAY_4"></View>
        <Text className="font-nunito_400 text-base leading-[20.8px] ">
          {title}
        </Text>
      </View>
      <View className="w-[14px] h-[14px] bg-colors-RED_MID rounded-full"></View>
    </TouchableOpacity>
  );
}
