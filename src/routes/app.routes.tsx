import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Statics } from '../screens/Statics';
import { Home } from '../screens/Home';
import { NewRefeicao } from '../screens/NewRefeicao';
import { SuccesRegisterRefeicao } from '../screens/SuccesRegisterRefeicao';

const { Navigator, Screen } = createNativeStackNavigator();

export function AppRoutes() {
	return (
		<Navigator screenOptions={{ headerShown: false }}>
			<Screen name="home" component={Home} />

			<Screen name="statics" component={Statics} />

			<Screen name="refeicao" component={NewRefeicao} />

			<Screen name="success" component={SuccesRegisterRefeicao} />
		</Navigator>
	);
}
