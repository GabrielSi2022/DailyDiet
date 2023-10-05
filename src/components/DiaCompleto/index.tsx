import { View, Text, FlatList } from 'react-native';
import { Refeicao } from '../Refeicao';

export function DiaCompleto() {
	const refeicao = [
		{ title: 'X-tudo', horas: '20:00' },
		{ title: 'Whey protein com leite', horas: '16:00' },
		{ title: 'Salada cesar com frango grelhado', horas: '12:30' },
		{ title: 'Vitamina de banana com abacate', horas: '09:30' },
	];
	return (
		<View className="mt-8">
			<Text className="text-colors-GRAY_1 font-nunito_700 text-lg">
				12.08.22
			</Text>
			<FlatList
				data={refeicao}
				keyExtractor={(item) => item.title}
				renderItem={({ item }) => (
					<Refeicao title={item.title} horas={item.horas} diet />
				)}
				showsVerticalScrollIndicator={false}
				ListEmptyComponent={() => (
					<Text>Você não cadastrou nenhuma refeição ainda!</Text>
				)}
			/>
		</View>
	);
}
