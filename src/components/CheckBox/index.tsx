import {
	TouchableOpacity,
	Text,
	View,
	TouchableOpacityProps,
} from 'react-native';

type ICheckBox = TouchableOpacityProps & {
	title: string;

	isChecked: boolean;
	setSelected: () => void;

	colorIcon: 'green' | 'red';
};

export function CheckBox({
	title,
	setSelected,
	isChecked = false,
	colorIcon,
}: ICheckBox) {
	return (
		<TouchableOpacity
			className={`p-4 bg-colors-GRAY_6 border-none flex-row items-center justify-center rounded-md mt-2  
    ${
		isChecked &&
		(colorIcon === 'green'
			? 'bg-colors-GREEN_LIGHT border border-colors-GREEN_DARK'
			: 'bg-colors-RED_LIGHT border border-r-colors-RED_MID')
		} 
    `}
			onPress={setSelected}
		>
			<View
				className={`w-2 h-2 ${
					colorIcon === 'green'
						? 'bg-colors-GREEN_DARK'
						: 'bg-colors-RED_DARK'
				}  rounded-full  `}
			></View>
			<Text className="font-nunito_700 text-colors-GRAY_1 text-sm ml-[5px]">
				{title}
			</Text>
		</TouchableOpacity>
	);
}
