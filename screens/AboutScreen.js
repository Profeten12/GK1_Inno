import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Om denne app</Text>
      <Text
        style={{
          color: "#6B705C",
          fontSize: 18,
          textAlign: "center",
          marginTop: 12,
        }}
      >
        Denne app er lavet til GK1 - Innovation og ny teknologi på Copenhagen
        Business School.
      </Text>
    </View>
  );
}
