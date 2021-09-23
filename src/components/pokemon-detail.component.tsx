import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";
import { PokemonService } from "../services/pokemon.service";
import PokemonTypeDetail from "./pokemon-type-detail.component";
import pokemonTypeDetail from "./pokemon-type-detail.component";


const PokemonDetail = ({ idPokemon }: { idPokemon: number }) => {


    let pokemonService = new PokemonService();
    const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailInterface>();

    const getPokemon = (id: number) => {
        pokemonService
            .get(id)
            .then((result: any) => {

                var types = result.data.types.map((value: any) => {
                    return value.type.name;
                })

                let pokemonDetailInterface: PokemonDetailInterface = {

                    id: id,
                    name: result.data.name,
                    urlImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                    types: types,
                    weight: result.data.weight,
                    height: result.data.height
                };
                setPokemonDetail(pokemonDetailInterface);
            })
            .catch((e) => { });
    };

    useEffect(() => {
        getPokemon(idPokemon);
    }, []);



    return (
        <View>
            <Card>
                <View>
                    <Card.Title><Text style={style.cardTextTitle}>{pokemonDetail?.name}</Text> # <Text style={style.cardTextSubTitle}>{pokemonDetail?.id}</Text></Card.Title>
                    <Card.Divider />
                </View>
                <View style={style.cardBody}>
                    <View style={style.cardBodyImage}>
                        <Image source={{ uri: pokemonDetail?.urlImage }} style={style.imageCard}></Image>
                    </View>
                </View>
                <View>
                    {
                        renderRowType('Tipo', pokemonDetail?.types)
                    }
                    {
                        renderRow('Peso', pokemonDetail?.weight)
                    }
                    {
                        renderRow('Altura', pokemonDetail?.height)
                    }
                </View>
            </Card>
        </View>
    );
}

const renderRow = (title: any, description: any) =>
    <View style={style.cardBodyDetail}>
        <View style={style.cardBodyDetailChild} >
            <Text>{title}:</Text>
        </View>
        <View style={style.cardBodyDetailChild} >
            <Text style={{fontSize: 18, fontWeight: 'bold'}}>{description}</Text>
        </View>
    </View>

const renderRowType = (title: any, description?: string[]) =>
    <View style={style.cardBodyDetail}>
        <View style={style.cardBodyDetailChild} >
            <Text>{title}:</Text>
        </View>
        <View style={style.cardBodyDetailChildType} >
            {
                description?.map((value, index) => <View style={{ flex: 1 }} key={index}>
                    <PokemonTypeDetail typeName={value}></PokemonTypeDetail>
                </View>)
            }
        </View>
    </View>

const style = StyleSheet.create({
    cardTextTitle: {
        fontSize:18,
        fontWeight: 'bold'
    },
    cardTextSubTitle: {
        color: '#969696'
    },
    cardBody: {
        flex: 1,
        flexDirection: 'column'
    },
    cardBodyImage: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'

    },
    imageCard: {
        width: 250,
        height: 250
    },
    cardBodyDetail: {
        flex: 1,
        marginTop: 25,
        flexDirection: 'row'
    },
    cardBodyDetailChild: {
        flex: 1
    },
    cardBodyDetailChildType: {
        flex: 1,
        flexDirection: 'column'
    }
});

export default PokemonDetail;