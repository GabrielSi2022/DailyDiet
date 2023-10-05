import { View, Text } from "react-native";

interface IPanelStaticsDietInsideOutside {
  valor: number;
  text: string;
  isOffTheDietValor?: boolean;
}

export function PanelStaticsDietInsideOutside({
  valor,
  text,
  isOffTheDietValor,
}: IPanelStaticsDietInsideOutside) {
  return (
    <View
      className={` justify-center items-center max-w-1/2  px-5 py-4 rounded-lg
    ${isOffTheDietValor ? "bg-colors-RED_LIGHT" : "bg-colors-GREEN_LIGHT"}`}
    >
      <View className="max-w-full">
        <Text className="font-nunito_700 text-2xl text-center text-colors-GRAY_1 pb-2 ">
          {valor}
        </Text>
        <Text className="font-nunito_400 text-sm text-center text-colors-GRAY_2 ">
          {text}
        </Text>
      </View>
    </View>
  );
}
