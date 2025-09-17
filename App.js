import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import AboutScreen from "./screens/AboutScreen";
import styles from "./styles";
import { MaterialCommunityIcons, Feather, AntDesign } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Kort"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            if (route.name === "Kort") {
              return (
                <MaterialCommunityIcons name="map" size={size} color={color} />
              );
            } else if (route.name === "Festlokaler") {
              return <Feather name="list" size={size} color={color} />;
            } else if (route.name === "Om") {
              return <AntDesign name="infocirlce" size={size} color={color} />;
            }
            return null;
          },
          tabBarActiveTintColor: "#A3C4BC",
          tabBarInactiveTintColor: "#6B705C",
        })}
      >
        <Tab.Screen name="Kort" component={HomeScreen} />
        <Tab.Screen name="Festlokaler" component={ListScreen} />
        <Tab.Screen name="Om" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
