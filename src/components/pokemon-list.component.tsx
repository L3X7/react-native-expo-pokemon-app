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
import { TextInput } from "react-native-gesture-handler";

let pagination = {
  limit: 25,
  offset: 0,
};

const PokemonList = (props: any) => {
  let pokemoninterfaceList: PokemonInterface[] = [];
  const [pokemonList, setPokemonList] = useState<PokemonInterface[]>([]);
  const [loadingData, setLoadingData] = useState<boolean>(true);
  const [searchTimer, setSearchTimer] = useState<any>(null);
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
        setLoadingData(false);
      })
      .catch((e) => {
        setLoadingData(false);
      });
  };

  const getPokemon = (text: string) => {
    if (searchTimer) {
      clearTimeout(searchTimer);
    }
    setSearchTimer(
      setTimeout(() => {
        pokemonService
          .getByName(text)
          .then((result: any) => {
            pokemoninterfaceList = [];
            if (result.data.length != 0) {
              let pokemonModel: PokemonInterface = {
                id: result.data.id,
                name: result.data.name,
                urlImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${result.data.id}.png`,
              };

              pokemoninterfaceList.push(pokemonModel);
            }
            setPokemonList(pokemoninterfaceList);
            setLoadingData(false);
          })
          .catch((e) => {
            setLoadingData(false);
          });
      }, 2000)
    );
  };

  const actionNavigation = (offsetNumber: number) => {
    pagination.offset = pagination.offset + offsetNumber;
    if (pagination.offset < 0) pagination.offset = 0;
    getPokemons(25, pagination.offset);
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TextInput
          style={styles.headerContainerInput}
          placeholder="Busqueda..."
          onChangeText={(text) => getPokemon(text)}
        ></TextInput>
      </View>
      <View style={styles.listContainer}>
        {loadingData ? (
          <View style={styles.containerLoading}>
            <Text>Loading...</Text>
          </View>
        ) : (
          <FlatList
            keyExtractor={(item) => item.id.toString()}
            data={pokemonList}
            ItemSeparatorComponent={ItemSeprator}
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
                  <Text style={{ fontSize: 16 }}>{item.name}</Text>
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
        )}
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

const ItemSeprator = () => (
  <View
    style={{
      height: 1,
      width: "100%",
      backgroundColor: "#c4c4c4",
    }}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  containerLoading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainer: {
    flex: 0.1,
    borderWidth: 1,
    borderColor: "#dfdfdf",
    borderTopColor: "transparent",
    borderRightColor: "transparent",
    borderLeftColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  headerContainerInput: {
    height: "80%",
    borderWidth: 1,
    borderRadius: 2,
    borderColor: "#969696",
    padding: 10,
  },
  listContainer: {
    flex: 0.84,
  },
  footerContainer: {
    flex: 0.06,
    flexDirection: "row",
  },
  navigateBefore: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navigateNext: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  itemList: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
  },
});

export default PokemonList;
