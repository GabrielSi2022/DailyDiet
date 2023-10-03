import { View, Image, TouchableOpacity } from 'react-native';

export function Header() {
	return (
		<View className=" w-full flex-row justify-between">
			<TouchableOpacity>
				<Image source={require('../../../assets/Logo.png')} />
			</TouchableOpacity>

			<TouchableOpacity>
				<Image source={require('../../../assets/Ellipse.png')} />
			</TouchableOpacity>
		</View>
	);
}
