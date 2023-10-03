import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
const colors = require("../../../colors");
type PanelTypeStyleProps = "PRIMARY" | "SECONDARY";

type IconProps = {
  size: number;
  weight: string;
};

interface PercentagePanel {
  valor: number;
  text: string;
  type: PanelTypeStyleProps;
  icon: React.ReactNode;
  iconProps: IconProps;
}

export function PercentagePanel({
  valor = 0,
  text,
  icon,
  iconProps,
  type = "PRIMARY",
  ...rest
}: PercentagePanel) {
  const isOffTheDiet = valor < 50;
  return (
    <View>
      <TouchableOpacity
        {...rest}
        className={`w-full  px-4 py-5 rounded-lg my-10
         ${isOffTheDiet ? "bg-RED_LIGHT" : "bg-GREEN_LIGHT"}`}
      >
        <View className="relative">
          <View className="absolute right-[-5px] top-[-10px]">
            {React.cloneElement(icon as React.ReactElement, {
              size: iconProps.size,
              weight: iconProps.weight,
              color: isOffTheDiet
                ? String(colors.RED_DARK)
                : String(colors.GREEN_DARK),
            })}
          </View>
          <Text className="font-nunito_700 text-GRAY_1 text-3xl text-center">
            {String(valor)}%
          </Text>
          <Text className="font-nunito_400 text-GRAY_2 text-sm text-center">
            {text}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}
