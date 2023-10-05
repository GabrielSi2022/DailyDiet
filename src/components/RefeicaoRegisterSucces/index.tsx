import { useNavigation } from '@react-navigation/native';
import { Image, Text, TouchableOpacity, View } from 'react-native';

type IRefeicaoRegisterSucces = {
	colorDiet?: 'green' | 'red';
	mainTitle: string;
	titleOne: string;
	titleTwo: string;
	titleBold: string;
};

export function RefeicaoRegisterSucces({
	colorDiet = 'green',
	titleOne,
	titleTwo,
	titleBold,
	mainTitle,
}: IRefeicaoRegisterSucces) {

    const navigation = useNavigation();

    function handleNavigationHome(){
        navigation.navigate('home');
    }


	return (
		<View className="bg-colors-WHITE h-full items-center justify-center">
			<View>
				<Text
					className={`font-nunito_700  text-2xl ${
						colorDiet === 'green'
							? 'text-colors-GREEN_DARK'
							: 'text-colors-RED_DARK'
					}`}
				>
					{mainTitle}
				</Text>
			</View>

			<View>
				<Text className="text-base text-colors-GRAY_1 text-center">
					{titleOne}{' '}
					<Text className="font-nunito_700">{titleBold}</Text>{' '}
					{titleTwo}
				</Text>
			</View>

			<View>
				<Image
					className="w-[224px] h-[288px] mt-10"
					source={require('../../../assets/Illustration.png')}
				/>
			</View>

			<View>
				<TouchableOpacity  onPress={handleNavigationHome} className=" px-6 py-4 bg-colors-GRAY_1 rounded-md mt-6">
					<Text className="text-colors-WHITE">
						Ir para a página inicial
					</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}
