import { ActivityIndicator, View } from "react-native";

export function Loading() {
  return (
    <View className=" flex-1 justify-center items-center  ">
      <ActivityIndicator className="text-GRAY_1"></ActivityIndicator>
    </View>
  );
}
