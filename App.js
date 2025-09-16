import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./screens/HomeScreen";
import ListScreen from "./screens/ListScreen";
import AboutScreen from "./screens/AboutScreen";
import styles from "./styles";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Kort">
        <Tab.Screen name="Kort" component={HomeScreen} />
        <Tab.Screen name="Festlokaler" component={ListScreen} />
        <Tab.Screen name="Om" component={AboutScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
