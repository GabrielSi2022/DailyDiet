import { TouchableOpacity, Text } from "react-native";
import React from "react";
import { Plus } from "phosphor-react-native";

interface IButton {
  text: string;
  showIconButton?: boolean;
}

export function ButtonAddRefeicao({ showIconButton, text }: IButton) {
  return (
    <TouchableOpacity className=" bg-colors-GRAY_2 w-full px-6 py-4 rounded-md flex-row justify-center items-center ">
      {showIconButton && <Plus size={18} color="#ffffff" />}

      <Text className="text-colors-WHITE font-nunito_700 text-sm"> {text}</Text>
    </TouchableOpacity>
  );
}
