import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { Card } from "react-native-elements";
import { PokemonService } from "../services/pokemon.service";
import PokemonTypeDetail from "./pokemon-type-detail.component";

const PokemonDetail = ({ idPokemon }: { idPokemon: number }) => {
  let pokemonService = new PokemonService();
  const [pokemonDetail, setPokemonDetail] = useState<PokemonDetailInterface>();
  const [loadingData, setLoadingData] = useState<boolean>(true);

  const getPokemon = (id: number) => {
    pokemonService
      .get(id)
      .then((result: any) => {
        var types = result.data.types.map((value: any) => {
          return value.type.name;
        });

        let pokemonDetailInterface: PokemonDetailInterface = {
          id: id,
          name: result.data.name,
          urlImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
          types: types,
          weight: result.data.weight,
          height: result.data.height,
        };
        setPokemonDetail(pokemonDetailInterface);
        setLoadingData(false);
      })
      .catch((e) => {
        setLoadingData(false);
      });
  };

  useEffect(() => {
    getPokemon(idPokemon);
  }, []);

  return (
    <View style={style.cardBody}>
      <View style={style.cardBodyHeader}>
        <Text style={style.cardTextTitle}>{pokemonDetail?.name}</Text>
      </View>
      <View style={style.cardBodyImage}>
        <Image
          source={{ uri: pokemonDetail?.urlImage }}
          style={style.imageCard}
        ></Image>
      </View>
      <View style={style.cardBodyDetailContainer}>
        {renderRowType("Tipo", pokemonDetail?.types)}
        {renderRow("Peso", pokemonDetail?.weight)}
        {renderRow("Altura", pokemonDetail?.height)}
      </View>
    </View>
  );
};

const renderRow = (title: any, description: any) => (
  <View style={style.cardBodyDetail}>
    <View style={style.cardBodyDetailChild}>
      <Text>{title}:</Text>
    </View>
    <View style={style.cardBodyDetailChild}>
      <Text style={style.cardBodyDetailChildText}>{description}</Text>
    </View>
  </View>
);

const renderRowType = (title: any, description?: string[]) => (
  <View style={style.cardBodyDetail}>
    <View style={style.cardBodyDetailChild}>
      <Text>{title}:</Text>
    </View>
    <View style={style.cardBodyDetailChildType}>
      {description?.map((value, index) => (
        <View style={style.cardBodyDetailChildTypeElement} key={index}>
          <PokemonTypeDetail typeName={value}></PokemonTypeDetail>
        </View>
      ))}
    </View>
  </View>
);

const style = StyleSheet.create({
  cardBody: {
    flex: 1,
    backgroundColor: "white",
    margin: 20,
    flexDirection: "column",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  cardBodyHeader: {
    flex: 0.1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardBodyImage: {
    flex: 0.5,
    justifyContent: "center",
    alignItems: "center",
  },
  imageCard: {
    width: 250,
    height: 250,
  },
  containerLoading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  cardTextTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  cardTextSubTitle: {
    color: "#969696",
  },
  cardBodyDetailContainer: {
    flex: 0.4,
  },
  cardBodyDetail: {
    flex: 1,
    flexDirection: "row",
  },
  cardBodyDetailChild: {
    flex: 1,
    padding: 5,
    marginLeft: 10,
  },
  cardBodyDetailChildText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  cardBodyDetailChildType: {
    flex: 1,
    flexDirection: "column",
  },
  cardBodyDetailChildTypeElement: {
    width: "100%",
    height: 20,
    marginBottom: 10,
  },
});

export default PokemonDetail;
