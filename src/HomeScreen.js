import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import styles from "./styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Screen</Text>
      <Button title="Go to List" onPress={() => navigation.navigate("List")} />
      <Button title="About" onPress={() => navigation.navigate("About")} />
    </View>
  );
}
