import { View } from 'react-native';
import { RefeicaoRegisterSucces } from '../../components/RefeicaoRegisterSucces';

export function SuccesRegisterRefeicao() {
	const dietClassification = true;

	return (
		<View>
			{dietClassification ? (
				<View>
					<RefeicaoRegisterSucces
						colorDiet="green"
						mainTitle="Continue assim!"
						titleOne="Você continua"
						titleBold="dentro da dieta."
						titleTwo="Muito bem!"
					/>
				</View>
			) : (
				<View>
					<RefeicaoRegisterSucces
						colorDiet="red"
						mainTitle="Que pena!"
						titleOne="Você"
						titleBold="saiu da dieta"
						titleTwo="dessa vez, mas continue se esforçando e não desista!"
					/>
				</View>
			)}
		</View>
	);
}
