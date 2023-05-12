import {Button, StyleSheet, Text, View, FlatList} from "react-native";

const Home = ({routes, navigation}) => {
    const cities = [
        {
           id: 1,
           name: "Warsaw"
        },
        {
            id: 2,
            name: "London"
        },
        {
            id: 3,
            name: "Pekin"
        },
        {
            id: 4,
            name: "Chicago"
        },
        {
            id: 5,
            name: "Cairo"
        },
        {
            id: 6,
            name: "Sydney"
        }
    ]
    return (
        <View style={styles.container}>
            <Text>To jest Home komponent</Text>
            <FlatList
                data={cities}
                keyExtractor={item => item.id}
                renderItem={(item) => {
                    const name = item.item.name;
                    console.log(name);
                    return (
                        <Button
                            title={name}
                            onPress={() => {navigation.navigate("CityWeather",  {city: name})}}
                        />
                    )}}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;
