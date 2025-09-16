import React, { useState, useEffect, useRef } from "react";
import { View, Text, TouchableOpacity, Alert } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import * as Location from "expo-location";
import styles from "../styles";

export default function HomeScreen() {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const mapRef = useRef(null);

  const data = [
    { id: "1", title: "Festlokale A", latitude: 55.6761, longitude: 12.5683 },
    { id: "2", title: "Festlokale B", latitude: 55.678, longitude: 12.563 },
    { id: "3", title: "Festlokale C", latitude: 55.674, longitude: 12.57 },
  ];

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Tilladelse til lokation blev ikke givet");
        return;
      }
      const loc = await Location.getCurrentPositionAsync({});
      setLocation(loc.coords);
    })();
  }, []);

  const initialRegion = location
    ? {
        latitude: location.latitude,
        longitude: location.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      }
    : {
        latitude: 55.6761,
        longitude: 12.5683,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      };

  const goToUserLocation = () => {
    if (location && mapRef.current) {
      mapRef.current.animateToRegion(
        {
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        },
        1000
      );
    } else if (errorMsg) {
      Alert.alert("Lokation", errorMsg);
    }
  };

  const handleLejLokale = (title) => {
    Alert.alert(
      "Lokale lejet!",
      `Lokalet '${title}' er nu lejet til din fest 🎉`
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Festlokaler i nærheden</Text>

      <MapView
        ref={mapRef}
        style={{
          width: "100%",
          height: 350,
          borderRadius: 16,
          marginBottom: 24,
        }}
        initialRegion={initialRegion}
        showsUserLocation
      >
        {data.map((item) => (
          <Marker
            key={item.id}
            coordinate={{ latitude: item.latitude, longitude: item.longitude }}
            title={item.title}
          >
            <Callout tooltip onPress={() => handleLejLokale(item.title)}>
              <View
                style={{
                  alignItems: "center",
                  padding: 12,
                  backgroundColor: "#fff",
                  borderRadius: 16,
                  minWidth: 120,
                  elevation: 4,
                  shadowColor: "#A3C4BC",
                  shadowOffset: { width: 0, height: 2 },
                  shadowOpacity: 0.18,
                  shadowRadius: 6,
                  marginBottom: 32, // løft callout over pin
                }}
              >
                <Text
                  style={{
                    fontWeight: "bold",
                    marginBottom: 6,
                    color: "#6B705C",
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  style={{ color: "#A3C4BC", fontSize: 16, fontWeight: "600" }}
                >
                  Lej lokale
                </Text>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <TouchableOpacity
        style={{
          backgroundColor: "#A3C4BC",
          paddingVertical: 12,
          paddingHorizontal: 24,
          borderRadius: 16,
          alignSelf: "center",
          marginTop: 8,
          shadowColor: "#A3C4BC",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.15,
          shadowRadius: 4,
        }}
        onPress={goToUserLocation}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 16,
            fontWeight: "600",
            letterSpacing: 1,
          }}
        >
          Gå til min lokation
        </Text>
      </TouchableOpacity>
    </View>
  );
}
