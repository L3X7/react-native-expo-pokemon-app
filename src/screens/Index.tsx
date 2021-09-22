import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import PokemonList from "../components/pokemon-list.component";

export default class Index extends Component {
  render() {
    return (
      <View style={styles.container}>
        <PokemonList></PokemonList>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
