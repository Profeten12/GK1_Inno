import React from "react";
import { View, Text } from "react-native";
import styles from "../styles";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Om denne app</Text>
      <Text style={styles.aboutParagraph}>
        Denne app er lavet til GK1 - Innovation og ny teknologi på Copenhagen
        Business School.
      </Text>
    </View>
  );
}
