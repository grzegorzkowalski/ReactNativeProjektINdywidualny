import * as React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import CityWeather from "./screens/CityWeather";

export default function App() {
  const Stack = createNativeStackNavigator();
  return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="CityWeather" component={CityWeather} />
        </Stack.Navigator>
      </NavigationContainer>
  );
};
