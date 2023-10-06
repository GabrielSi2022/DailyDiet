import {
	KeyboardType,
	Text,
	TextInput,
	TextInputProps,
	View,
} from 'react-native';

type InputProps = {
	keyboardType?: KeyboardType;
	multiline?: boolean;
	numberOfLines?: number;
	maxLength?: number;
};

type IInput = TextInputProps & {
	label: string;
	inputProps: InputProps;
};

export function Input({ label, inputProps, ...rest }: IInput) {
	return (
		<View>
			<Text className="text-sm leading-[18px] font-nunito_700 text-colors-GRAY_1">
				{label}
			</Text>
			<TextInput
				{...rest}
				multiline={inputProps.multiline}
				numberOfLines={inputProps.numberOfLines}
				maxLength={inputProps.maxLength}
				keyboardType={inputProps.keyboardType}
				className="border border-colors-GRAY_5 rounded-md p-[14px]"
			></TextInput>
		</View>
	);
}
