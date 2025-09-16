import React from "react";
import { View, Text } from "react-native";
import styles from "./styles";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>About Screen</Text>
      <Text>This is a simple React Native starter template.</Text>
    </View>
  );
}
