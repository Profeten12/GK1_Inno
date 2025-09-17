import React, { useState } from "react";
import { View, Text, FlatList, Pressable, Alert } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import styles from "../styles";

export default function ListScreen() {
  const data = [
    { id: "1", title: "Festlokale A" },
    { id: "2", title: "Festlokale B" },
    { id: "3", title: "Festlokale C" },
  ];

  const handleLejLokale = (title) => {
    Alert.alert(
      "Lokale lejet!",
      `Lokalet '${title}' er nu lejet til din fest 🎉`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Festlokaler</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listCard}>
            <View style={styles.listLeft}>
              <MaterialCommunityIcons
                name="home-city"
                size={32}
                color="#A3C4BC"
                style={styles.iconRightMargin}
              />
              <Text style={styles.listTitle}>{item.title}</Text>
            </View>
            <Pressable
              onPress={() => handleLejLokale(item.title)}
              style={({ pressed }) => [
                styles.smallButton,
                { marginLeft: 12 },
                pressed && styles.smallButtonPressed,
              ]}
            >
              <Text style={styles.buttonText}>Lej lokale</Text>
            </Pressable>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
