import React, { Component } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="One">
        <Stack.Screen name="One" component={PageOne} />
        <Stack.Screen name="Two" component={PageTwo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function PageOne({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: "limegreen" }]}>
      <Button
        title="go to Page two"
        onPress={() => navigation.navigate("Two")}
      />
    </View>
  );
}

function PageTwo({ navigation }) {
  return (
    <View style={[styles.container, { backgroundColor: "lightblue" }]}>
      <Button title="go to Page One" onPress={() => navigation.goBack()} />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
