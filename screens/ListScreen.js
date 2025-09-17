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
          <View
            style={{
              backgroundColor: "#F9F5E3",
              borderRadius: 18,
              padding: 18,
              marginBottom: 18,
              shadowColor: "#A3C4BC",
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.12,
              shadowRadius: 6,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <MaterialCommunityIcons
                name="home-city"
                size={32}
                color="#A3C4BC"
                style={{ marginRight: 12 }}
              />
              <Text
                style={{ fontSize: 20, color: "#6B705C", fontWeight: "600" }}
              >
                {item.title}
              </Text>
            </View>
            <Pressable
              onPress={() => handleLejLokale(item.title)}
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#6B705C" : "#A3C4BC",
                  paddingVertical: 8,
                  paddingHorizontal: 18,
                  borderRadius: 12,
                  marginLeft: 12,
                  shadowColor: "#A3C4BC",
                  shadowOffset: { width: 0, height: 1 },
                  shadowOpacity: 0.12,
                  shadowRadius: 2,
                },
              ]}
            >
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
                Lej lokale
              </Text>
            </Pressable>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
