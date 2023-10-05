import { useState } from 'react';
import {
	TouchableOpacity,
	Text,
	View,
	TouchableOpacityProps,
} from 'react-native';

type ICheckBox = TouchableOpacityProps & {
	title: string;
	colorIcon?: boolean;
};

export function CheckBox({ title, colorIcon }: ICheckBox) {
	const [isChecked, setIsChecked] = useState(false);

	function handleChange() {
		setIsChecked(!isChecked);
		console.log(isChecked);
	}

	return (
		<TouchableOpacity
			className={`p-4 bg-colors-GRAY_6 flex-row items-center justify-center rounded-md mt-2 border-none 
    ${
		isChecked === colorIcon
			? 'bg-colors-GREEN_LIGHT border border-colors-GREEN_DARK'
			: 'bg-colors-RED_LIGHT border border-r-colors-RED_MID'
		} 
    `}
			onPress={handleChange}
		>
			<View
				className={`w-2 h-2 ${
					colorIcon ? 'bg-colors-GREEN_DARK' : 'bg-colors-RED_DARK'
				}  rounded-full  `}
			></View>
			<Text className="font-nunito_700 text-colors-GRAY_1 text-sm ml-[5px]">
				{title}
			</Text>
		</TouchableOpacity>
	);
}
