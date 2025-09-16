import React, { useState } from "react";
import { View, Text, FlatList, TouchableOpacity, Alert } from "react-native";
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
          <View style={{ marginBottom: 12 }}>
            <Text style={styles.listItem}>{item.title}</Text>
            <TouchableOpacity
              style={{
                backgroundColor: "#A3C4BC",
                paddingVertical: 8,
                paddingHorizontal: 18,
                borderRadius: 12,
                alignSelf: "center",
                marginTop: 6,
                shadowColor: "#A3C4BC",
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.12,
                shadowRadius: 2,
              }}
              onPress={() => handleLejLokale(item.title)}
            >
              <Text style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}>
                Lej lokale
              </Text>
            </TouchableOpacity>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
