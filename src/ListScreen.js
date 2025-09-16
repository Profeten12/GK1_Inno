import React from "react";
import { View, Text, FlatList } from "react-native";
import styles from "./styles";

const DATA = [
  { id: "1", title: "Item 1" },
  { id: "2", title: "Item 2" },
  { id: "3", title: "Item 3" },
];

export default function ListScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>List Screen</Text>
      <FlatList
        data={DATA}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Text style={styles.item}>{item.title}</Text>}
      />
    </View>
  );
}
