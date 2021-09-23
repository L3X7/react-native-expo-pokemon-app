import React, { Component, useState } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";
import PokemonDetail from "../components/pokemon-detail.component";

export default function DetailPokemon({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { id } = route.params;
  return (
    <View style={styles.container}>
      <PokemonDetail idPokemon={id}></PokemonDetail>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
