import { ArrowLeft } from "phosphor-react-native";
import { HeaderRegister } from "../../components/HeaderRegister";
import { View, Text } from "react-native";
import { Input } from "../../components/Input";
import { CheckBox } from "../../components/CheckBox";
import { ButtonAddRefeicao } from "../../components/ButtonAddRefeicao";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { refeicaoCreate } from "../../storage/refeicao/refeicaoCreate";

export function NewRefeicao() {
  const [isOnTheDiet, setOnTheDiet] = useState(false);

  const [nome, setNome] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");
  const [horas, setHoras] = useState("");

  const navigation = useNavigation();

  async function handleAddNewRefeicao() {
    try {
      const novaRefeicao = {
        nome,
        horas,
        description,
        date,
        onTheDiet: isOnTheDiet,
      };

      await refeicaoCreate(novaRefeicao);
      navigation.navigate("success");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View className="flex-1 bg-colors-GRAY_5">
      <HeaderRegister text="Nova refeição" icon={<ArrowLeft />} />

      <View className="bg-colors-WHITE px-6 flex-1 rounded-t-[20px] pt-10 justify-between pb-10">
        <View>
          <View>
            <Input
              inputProps={{
                multiline: false,
              }}
              label="Nome"
              onChangeText={setNome}
              value={nome}
            />
          </View>

          <View className="pt-6">
            <Input
              inputProps={{
                multiline: true,
                numberOfLines: 6,
                maxLength: 200,
              }}
              label="Descrição"
              onChangeText={setDescription}
              value={description}
            />
          </View>

          <View className="flex-row gap-5 pt-6">
            <View className="flex-1">
              <Input
                inputProps={{
                  multiline: false,
                }}
                label="Data"
                onChangeText={setDate}
                value={date}
              />
            </View>
            <View className="flex-1">
              <Input
                inputProps={{
                  multiline: false,
                }}
                label="Hora"
                onChangeText={setHoras}
                value={horas}
              />
            </View>
          </View>

          <View className="pt-6">
            <Text className="font-nunito_700 text-sm leading-[18.2px] text-colors-GRAY_2">
              Está dentro da dieta?
            </Text>

            <View className="flex-row gap-2">
              <View className="flex-1">
                <CheckBox
                  title="Sim"
                  setSelected={() => setOnTheDiet(true)}
                  colorIcon="green"
                  isChecked={isOnTheDiet}
                />
              </View>

              <View className="flex-1">
                <CheckBox
                  title="Não"
                  setSelected={() => setOnTheDiet(false)}
                  colorIcon="red"
                  isChecked={!isOnTheDiet}
                />
              </View>
            </View>
          </View>
        </View>
        <View>
          <ButtonAddRefeicao
            text="Cadastrar refeição"
            onPress={handleAddNewRefeicao}
          />
        </View>
      </View>
    </View>
  );
}
