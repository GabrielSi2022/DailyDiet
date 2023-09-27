import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import { Header } from "./src/components/Header";
import {
  useFonts,
  Nunito_400Regular,
  Nunito_700Bold,
} from "@expo-google-fonts/nunito";
import { Loading } from "./src/components/Loading";

export default function App() {
  const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

  if (!fontsLoaded) {
    return <Loading />;
  } else {
    return (
      <View className="items-center flex-1 justify-center  ">
        <Header />
      </View>
    );
  }
}
