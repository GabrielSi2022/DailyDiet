import { ArrowLeft } from "phosphor-react-native";
import { HeaderRegister } from "../../components/HeaderRegister";
import { View, Text } from "react-native";
import { Input } from "../../components/Input";
import { CheckBox } from "../../components/CheckBox";
import { ButtonAddRefeicao } from "../../components/ButtonAddRefeicao";

export function NewRefeicao() {
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
            />
          </View>

          <View className="flex-row gap-5 pt-6">
            <View className="flex-1">
              <Input
                inputProps={{
                  multiline: false,
                }}
                label="Data"
              />
            </View>
            <View className="flex-1">
              <Input
                inputProps={{
                  multiline: false,
                }}
                label="Hora"
              />
            </View>
          </View>

          <View className="pt-6">
            <Text className="font-nunito_700 text-sm leading-[18.2px] text-colors-GRAY_2">
              Está dento da dieta?
            </Text>

            <View className="flex-row gap-2">
              <View className="flex-1">
                <CheckBox title="Sim" colorIcon />
              </View>

              <View className="flex-1">
                <CheckBox title="Não" />
              </View>
            </View>
          </View>
        </View>
        <View>
          <ButtonAddRefeicao text="Cadastrar refeição" />
        </View>
      </View>
    </View>
  );
}
