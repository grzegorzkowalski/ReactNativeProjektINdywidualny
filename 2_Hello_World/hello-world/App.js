import {useState, useEffect} from "react";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Name from "./components/Name";
import Surname from "./components/Surname";
import Boxes from "./components/Boxes";
import Calendar from "./components/Calendar";
import Map from "./components/Map";
import Pizza from "./components/Pizza";
import Invitation from "./components/Invitation";
import DateTimer from "./components/DateTimer";
import RandomNumber from "./components/RandomNumber";

export default function App() {
  const [date, setDate] = useState(new Date());
  const inviteData = {
      date: "01.05.2023",
      hour: "15:00",
      place: "garden party u Kowala",
      dressCode: "casual"
  }
  // const dataTime = new Date();
    useEffect(() => {
        const intervalID = setInterval(() => {
            setDate(new Date());
                return () => clearInterval(intervalID);
        }, 1000);
    }, []);

    return (
    <View style={styles.container}>
      {/*<Text>Open up App.js to start working on your app!</Text>*/}
      {/*<Text>Test WWSI 2023</Text>*/}
      {/*<Name name="Grzegorz 2" />*/}
      {/*<Surname />*/}
      {/*<Boxes />*/}
      {/*<Calendar />*/}
      {/*<Map />*/}
      {/*<Pizza />*/}
      {/*<Invitation invite={inviteData} />*/}
      {/*<StatusBar style="auto" />*/}
      <DateTimer dateTime={date} />
      <RandomNumber />
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
