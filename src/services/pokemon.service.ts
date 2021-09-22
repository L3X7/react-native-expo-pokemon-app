import {fetchApi} from '../helpers/fetch-api.helper'
import { Alert } from "react-native";
import env from '../environments/dev.environment';

export class PokemonService{
    get = async(limit = 10, offset= 0) => {
        try{
            const result = await fetchApi(
                env.urlPokemonList.concat(`?limit=${limit}&offset=${offset}`),
                'GET'
            )
            return result;
        }catch(error){
            Alert.alert('Error', 'Error service');
        }
    }
}