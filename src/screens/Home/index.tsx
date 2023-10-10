import { FlatList, View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ArrowUpRight } from "phosphor-react-native";

import { Header } from "../../components/HeaderHome";
import { PercentagePanel } from "../../components/PercentagePanel";
import { TitleHome } from "../../components/TitleHome";
import { ButtonAddRefeicao } from "../../components/ButtonAddRefeicao";
import { DiaCompleto } from "../../components/DiaCompleto";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { refeicaoGetDietTrueFalse } from "../../storage/refeicao/refeicaoGetDietTrueFalse";

export function Home() {
  const navigation = useNavigation();

  function handleNavigateStatics() {
    navigation.navigate("statics");
  }

  function handleNewRefeicao() {
    navigation.navigate('refeicao');
  }

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
        data={["20/10/2023"]}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <DiaCompleto date={item} />}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text>Você não cadastrou nenhuma refeição ainda!</Text>
        )}
      />
    </SafeAreaView>
  );
}
