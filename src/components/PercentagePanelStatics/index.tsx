import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";
import { colors } from "../../../colors";

type IconProps = {
  size: number;
  weight: string;
};

type PercentagePanelStatics = TouchableOpacityProps & {
  valor: number;
  text: string;
  icon: React.ReactNode;
  iconProps: IconProps;
};

export function PercentagePanelStatics({
  valor = 0,
  text,
  icon,
  iconProps,
  ...rest
}: PercentagePanelStatics) {
  const isOffTheDiet = valor < 50;

  return (
    <View>
      <TouchableOpacity
        {...rest}
        className={`w-full px-4  pt-5 pb-9 
           ${isOffTheDiet ? "bg-colors-RED_LIGHT" : "bg-colors-GREEN_LIGHT"}`}
      >
        <View className="relative">
          <View className="absolute left-[0px] top-[50px]">
            {React.cloneElement(icon as React.ReactElement, {
              size: iconProps.size,
              weight: iconProps.weight,
              color: isOffTheDiet
                ? String(colors.RED_DARK)
                : String(colors.GREEN_DARK),
            })}
          </View>
          <View className="pt-20">
            <Text className="font-nunito_700 text-GRAY_1 text-3xl text-center">
              {String(valor)}%
            </Text>
            <Text className="font-nunito_400 text-GRAY_2 text-sm text-center">
              {text}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
