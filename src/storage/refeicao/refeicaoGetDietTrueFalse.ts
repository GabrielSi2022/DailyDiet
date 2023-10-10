import AsyncStorage from "@react-native-async-storage/async-storage";
import { REFEICAO_COLLECTION } from "../storageConfig";
import { refeicaoGetAll } from "./refeicaoGetAll";




export async function refeicaoGetDietTrueFalse(){

    try {
        const storedRefeicao = await AsyncStorage.getItem('@daily-diet:refeicao');


        if (storedRefeicao !== null){

            const refeicaoCompleta = JSON.parse(storedRefeicao);

            const  refeicaoOnTheDiet = refeicaoCompleta.filter( (refeicao : any) => refeicao.onTheDiet === true)

            console.log(refeicaoOnTheDiet)
            
        }

    

    } catch (error) {
        throw error;
    }
}


