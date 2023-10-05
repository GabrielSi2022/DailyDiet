import { View, Text } from "react-native";
import { PercentagePanelStatics } from "../../components/PercentagePanelStatics";
import { ArrowLeft } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { PanelStatics } from "../../components/PanelStatics";
import { PanelStaticsDietInsideOutside } from "../../components/PanelStaticsDietInsideOutside";

export function Statics() {
  const navigation = useNavigation();

  function handleNavigateHome() {
    navigation.navigate("home" as never);
  }

  return (
    <View className="flex-1 bg-colors-GREEN_LIGHT ">
      <PercentagePanelStatics
        valor={90.86}
        text="das refeições dentro da dieta"
        icon={<ArrowLeft />}
        iconProps={{
          size: 24,
          weight: "light",
        }}
        onPress={handleNavigateHome}
      />

      <View className="bg-colors-WHITE px-4 flex-1 rounded-t-[20px]">
        <Text className="font-nunito_700 text-sm text-center pt-8 pb-6">
          Estatísticas gerais
        </Text>

        <PanelStatics
          valor={22}
          text="melhor sequência de pratos dentro da dieta"
        />
        <PanelStatics valor={109} text="refeições registradas" />

        <View className="flex-row gap-3 justify-between ">
          <View className="flex-1">
            <PanelStaticsDietInsideOutside
              valor={99}
              text="refeições dentro da dieta"
            />
          </View>
          <View className="flex-1">
            <PanelStaticsDietInsideOutside
              valor={10}
              text="refeições fora da dieta"
              isOffTheDietValor
            />
          </View>
        </View>
      </View>
    </View>
  );
}
