import AsyncStorage from '@react-native-async-storage/async-storage';

import { REFEICAO_COLLECTION } from '../storageConfig';

export async function refeicaoGetAll() {
	try {
		const storage = await AsyncStorage.getItem(REFEICAO_COLLECTION);

		const refeicao: string[] = storage ? JSON.parse(storage) : [];

		// const refeicao: IRefeicao[] = [
		// 	{
		// 		date: '19/01/2001',
		// 		description: 'oi',
		// 		diet: true,
		// 		horas: '19:00',
		// 		title: 'title',
		// 	},
		// 	{
		// 		date: '19/01/2001',
		// 		description: 'oi',
		// 		diet: true,
		// 		horas: '19:00',
		// 		title: 'title',
		// 	},
		// 	{
		// 		date: '19/01/2001',
		// 		description: 'oi',
		// 		diet: true,
		// 		horas: '19:00',
		// 		title: 'title',
		// 	},
		// 	{
		// 		date: '19/01/2001',
		// 		description: 'oi',
		// 		diet: true,
		// 		horas: '19:00',
		// 		title: 'title',
		// 	},
		// ];

		return refeicao;
	} catch (error) {
		throw error;
	}
}
