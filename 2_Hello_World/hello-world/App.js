import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Name from "./components/Name";
import Surname from "./components/Surname";
import Boxes from "./components/Boxes";
import Calendar from "./components/Calendar";
import Map from "./components/Map";
import Pizza from "./components/Pizza";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Test WWSI 2023</Text>
      <Name name="Grzegorz 2" />
      <Surname />
      <Boxes />
      <Calendar />
      <Map />
      <Pizza />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
