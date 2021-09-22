import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import Index from "./src/screens/Index";
import React from "react";
import { View, Text, SafeAreaView } from "react-native";
import DetailPokemon from "./src/screens/detail-pokemon";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Index">
        <Stack.Screen
          name="Index"
          component={Index}
          options={{ title: "Index", headerShown: false }}
        />
        <Stack.Screen
          name="DetailPokemon"
          component={DetailPokemon}
          options={{ title: "DetailPokemon"}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
