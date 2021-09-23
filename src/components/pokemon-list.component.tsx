import React, { useEffect, useState } from "react";
import {
  Text,
  FlatList,
  View,
  Image,
  StyleSheet,
  TouchableHighlight,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { PokemonService } from "../services/pokemon.service";
import { useNavigation } from "@react-navigation/native";

let pagination = {
  limit: 25,
  offset: 0,
};

const PokemonList = (props: any) => {
  let pokemoninterfaceList: PokemonInterface[] = [];
  const [pokemonList, setPokemonList] = useState<PokemonInterface[]>([]);
  let pokemonService = new PokemonService();
  const navigation = useNavigation();

  useEffect(() => {
    getPokemons(pagination.limit, pagination.offset);
  }, []);

  const getPokemons = (limit: number, offset: number) => {
    pokemonService
      .getAll(limit, offset)
      .then((result: any) => {
        for (const item of result.data.results) {
          const image = item.url.split("/");
          let pokemonModel: PokemonInterface = {
            id: parseInt(image[6]),
            name: item.name,
            urlImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${image[6]}.png`,
          };
          pokemoninterfaceList.push(pokemonModel);
        }
        setPokemonList(pokemoninterfaceList);
      })
      .catch((e) => {});
  };

  const actionNavigation = (offsetNumber: number) => {
    pagination.offset = pagination.offset + offsetNumber;
    if (pagination.offset < 0) pagination.offset = 0;
    getPokemons(25, pagination.offset);
  };

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          keyExtractor={(item) => item.id.toString()}
          data={pokemonList}
          ItemSeparatorComponent= {ItemSeprator}
          renderItem={({ item }) => (
            <View style={styles.itemList}>
              <View style={{ flex: 2 }}>
                <Image
                  source={{
                    uri: `${item.urlImage}`,
                  }}
                  style={{ width: 30, height: 30 }}
                ></Image>
              </View>
              <View style={{ flex: 4 }}>
                <Text style={{fontSize: 16}}>{item.name}</Text>
              </View>
              <View style={{ flex: 1 }}>
                <TouchableHighlight
                  onPress={() =>
                    navigation.navigate(
                      "DetailPokemon" as never,
                      { id: item.id } as never
                    )
                  }
                >
                  <FontAwesome name="info" size={20} color="#969696" />
                </TouchableHighlight>
              </View>
            </View>
          )}
        />
      </View>
      <View style={styles.footerContainer}>
        <View style={styles.navigateBefore}>
          <TouchableHighlight onPress={() => actionNavigation(-25)}>
            <MaterialIcons name="navigate-before" size={24} color="#969696" />
          </TouchableHighlight>
        </View>
        <View style={styles.navigateNext}>
          <TouchableHighlight onPress={() => actionNavigation(25)}>
            <MaterialIcons name="navigate-next" size={24} color="#969696" />
          </TouchableHighlight>
        </View>
      </View>
    </View>
  );
};

const ItemSeprator = () => <View style={{
  height: 1,
  width: "100%",
  backgroundColor: "#c4c4c4",
}} />

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  listContainer: {
    flex: 0.94,
  },
  footerContainer: {
    flex: 0.06,
    flexDirection: "row",
  },
  navigateBefore: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  navigateNext: {
    flex: 1,
    alignItems:'center',
    justifyContent:'center'
  },
  itemList: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
});

export default PokemonList;
