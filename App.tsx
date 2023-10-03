import { View } from 'react-native';
import { Home } from './src/screens/Home';
import {
	useFonts,
	Nunito_400Regular,
	Nunito_700Bold,
} from '@expo-google-fonts/nunito';
import { Loading } from './src/components/Loading';

export default function App() {
	const [fontsLoaded] = useFonts({ Nunito_400Regular, Nunito_700Bold });

	if (!fontsLoaded) {
		return <Loading />;
	} else {
		return (
			<View>
				<Home />
			</View>
		);
	}
}
