import {
	Text,
	TouchableOpacity,
	TouchableOpacityProps,
	View,
} from 'react-native';
import { colors } from '../../../colors';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

type PercentagePanelStatics = TouchableOpacityProps & {
	text: string;
	icon: React.ReactNode;
};

export function HeaderRegister({
	text,
	icon,
	...rest
}: PercentagePanelStatics) {
	const navigation = useNavigation();

	function navigationHome() {
		navigation.navigate('home' as never);
	}

	return (
		<View>
			<TouchableOpacity
				{...rest}
				className={'w-full px-6  pt-20 pb-6 bg-colors-GRAY_5 }'}
				onPress={navigationHome}
			>
				<View className="relative">
					<View className="absolute left-[0px] top-[0px]">
						{React.cloneElement(icon as React.ReactElement, {
							size: 24,
							weight: 'light',
							color: String(colors.GRAY_2),
						})}
					</View>

					<View>
						<Text className="font-nunito_700 text-colors-GRAY_1 text-lg text-center">
							{text}
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		</View>
	);
}
