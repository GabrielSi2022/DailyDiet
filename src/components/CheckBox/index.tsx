import { TouchableOpacity, Text, View } from "react-native";

type ICheckBox = {
  title: string;
  colorIcon?: boolean;
};

export function CheckBox({ title, colorIcon }: ICheckBox) {
  return (
    <TouchableOpacity className="p-4 bg-colors-GRAY_6 flex-row items-center justify-center rounded-md mt-2 ">
      <View
        className={`w-2 h-2 ${
          colorIcon ? "bg-colors-GREEN_DARK" : "bg-colors-RED_DARK"
        }  rounded-full  `}
      ></View>
      <Text className="font-nunito_700 text-colors-GRAY_1 text-sm ml-[5px]">
        {title}
      </Text>
    </TouchableOpacity>
  );
}
