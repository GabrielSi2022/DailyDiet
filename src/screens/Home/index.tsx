import { Header } from '../../components/HeaderHome';

import { SafeAreaView } from 'react-native-safe-area-context';
import { ArrowUpRight } from 'phosphor-react-native';
import { PercentagePanel } from '../../components/PercentagePanel';

export function Home() {
	return (
		<SafeAreaView className="px-6">
			<Header />
			<PercentagePanel
				valor={90.86}
				text="das refeições dentro da dieta"
				icon={<ArrowUpRight />}
				iconProps={{
					size: 24,
					weight: 'light',
				}}
			/>
		</SafeAreaView>
	);
}
