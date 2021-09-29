import React, { Component } from "react";
import { StyleSheet, SafeAreaView, Platform, StatusBar } from "react-native";
import PokemonList from "../components/pokemon-list.component";

export default class Index extends Component {
  render() {
    return (
      <SafeAreaView  style={styles.container}>
        <PokemonList></PokemonList>
      </SafeAreaView >
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
