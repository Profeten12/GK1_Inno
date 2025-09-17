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

      {errorMsg ? <Text style={styles.errorText}>{errorMsg}</Text> : null}

      <MapView
        ref={mapRef}
        style={styles.map}
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
            <View style={styles.markerBadge}>
              <MaterialCommunityIcons
                name="home-city"
                size={32}
                color="#A3C4BC"
              />
            </View>

            <Callout tooltip onPress={() => handleLejLokale(item.title)}>
              <View style={styles.calloutContainer}>
                <Text style={styles.calloutTitle}>{item.title}</Text>

                <Pressable
                  onPress={() => handleLejLokale(item.title)}
                  accessibilityLabel={`Lej ${item.title}`}
                  style={({ pressed }) => [
                    styles.smallButton,
                    pressed && styles.smallButtonPressed,
                  ]}
                >
                  <Text style={styles.buttonText}>Lej lokale</Text>
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
          styles.actionButton,
          pressed && styles.actionButtonPressed,
        ]}
      >
        <Text style={styles.actionButtonText}>Gå til min lokation</Text>
      </Pressable>
    </View>
  );
}
