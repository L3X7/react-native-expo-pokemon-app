import {fetchApi} from '../helpers/fetch-api.helper'
import { Alert } from "react-native";
import env from '../environments/dev.environment';

export class PokemonService{
    getAll = async(limit = 10, offset= 0) => {
        try{
            const result = await fetchApi(
                env.urlPokemon.concat(`?limit=${limit}&offset=${offset}`),
                'GET'
            )
            return result;
        }catch(error){
            Alert.alert('Error', 'Error service');
        }
    }


    get = async(id: number) => {
        try{
            const result = await fetchApi(
                env.urlPokemon.concat(`${id}`),
                'GET'
            )
            return result;
        }catch(error){
            Alert.alert('Error', 'Error service');
        }
    }
}