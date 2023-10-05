import { View, Text } from 'react-native';

interface ITitleHome {
	title: string;
}

export function TitleHome({ title }: ITitleHome) {
	return (
		<View>
			<Text className="font-nunito_400 text-base text-colors-GRAY_1">
				{title}
			</Text>
		</View>
	);
}
