import React, { Component } from "react";
import { SafeAreaView, View, Text, StyleSheet } from "react-native";

export default function DetailPokemon({
  route,
  navigation,
}: {
  route: any;
  navigation: any;
}) {
  const { id } = route.params;
  console.log(id);

  return (
    <View style={styles.container}>
      <Text>My text</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
