import React, { useState, useEffect, useRef } from "react";
import { View, Text, Pressable, Alert } from "react-native";
import MapView, { Marker, Callout } from "react-native-maps";
import { MaterialCommunityIcons } from "@expo/vector-icons";
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
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          setErrorMsg("Tilladelse til lokation blev ikke givet");
          return;
        }
        const loc = await Location.getCurrentPositionAsync({});
        setLocation(loc.coords);
      } catch (e) {
        setErrorMsg("Kunne ikke hente din lokation");
      }
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
    } else {
      Alert.alert("Lokation", "Henter din lokation… prøv igen om et øjeblik.");
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

      {errorMsg ? (
        <Text style={{ color: "#6B705C", marginBottom: 8 }}>{errorMsg}</Text>
      ) : null}

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
            accessibilityLabel={`Marker for ${item.title}`}
          >
            {/* Custom marker-ikon i en lille badge */}
            <View
              style={{
                backgroundColor: "#F9F5E3",
                borderRadius: 24,
                padding: 8,
                alignItems: "center",
                justifyContent: "center",
                borderWidth: 2,
                borderColor: "#A3C4BC",
              }}
            >
              <MaterialCommunityIcons
                name="home-city"
                size={32}
                color="#A3C4BC"
              />
            </View>

            <Callout tooltip onPress={() => handleLejLokale(item.title)}>
              <View
                style={{
                  alignItems: "center",
                  padding: 12,
                  backgroundColor: "#fff",
                  borderRadius: 16,
                  minWidth: 140,
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

                <Pressable
                  onPress={() => handleLejLokale(item.title)}
                  accessibilityLabel={`Lej ${item.title}`}
                  style={({ pressed }) => [
                    {
                      backgroundColor: pressed ? "#6B705C" : "#A3C4BC",
                      paddingVertical: 8,
                      paddingHorizontal: 18,
                      borderRadius: 12,
                      marginTop: 2,
                    },
                  ]}
                >
                  <Text
                    style={{ color: "#fff", fontSize: 16, fontWeight: "600" }}
                  >
                    Lej lokale
                  </Text>
                </Pressable>
              </View>
            </Callout>
          </Marker>
        ))}
      </MapView>

      <Pressable
        onPress={goToUserLocation}
        accessibilityLabel="Gå til min lokation"
        style={({ pressed }) => [
          {
            backgroundColor: pressed ? "#6B705C" : "#A3C4BC",
            paddingVertical: 12,
            paddingHorizontal: 24,
            borderRadius: 16,
            alignSelf: "center",
            marginTop: 8,
            shadowColor: "#A3C4BC",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.15,
            shadowRadius: 4,
          },
        ]}
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
      </Pressable>
    </View>
  );
}
