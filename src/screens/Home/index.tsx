import { Header } from "../../components/HeaderHome";
import { FlatList, View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowUpRight } from "phosphor-react-native";
import { PercentagePanel } from "../../components/PercentagePanel";
import { TitleHome } from "../../components/TitleHome";
import { ButtonAddRefeicao } from "../../components/ButtonAddRefeicao";
import { DiaCompleto } from "../../components/DiaCompleto";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();

  function handleNavigateStatics() {
    navigation.navigate("statics" as never);
  }

  function handleNewRefeicao() {
    navigation.navigate("refeicao" as never);
  }

  const dia = [""];
  return (
    <SafeAreaView className="px-6 py-3">
      <Header />
      <PercentagePanel
        valor={90.86}
        text="das refeições dentro da dieta"
        icon={<ArrowUpRight />}
        iconProps={{
          size: 24,
          weight: "light",
        }}
        onPress={handleNavigateStatics}
      />
      <TitleHome title="Refeições" />
      <View className="mt-3">
        <ButtonAddRefeicao
          text="Nova refeição"
          showIconButton
          onPress={handleNewRefeicao}
        />
      </View>

      <FlatList
        data={dia}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <DiaCompleto />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text>Você não cadastrou nenhuma refeição ainda!</Text>
        )}
      />
    </SafeAreaView>
  );
}
