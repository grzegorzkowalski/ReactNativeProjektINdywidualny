import {useState, useEffect} from "react";
import {StyleSheet, Text, View, Image} from "react-native";

const CityWeather = ({route}) => {
    const [weather, setWeather] = useState(false);
    const [image, setImage] = useState("");
    const {city} = route.params;
    console.log(city);

    useEffect(() => {
        console.log(city);
        const API_key = "5b2965ceb7056ac1cb87a3f4581e90b4";
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`)
            .then(res => res.json())
            .then(re => setWeather(re));
    }, []);

    useEffect(() => {
        if (weather) {
            fetch(`https://pixabay.com/api/?key=6799546-801a9e48e0e142c05114f0377&q=${city}+${weather.weather[0].main}&image_type=photo`)
                .then(res => res.json())
                .then(re => {
                    if (re?.hits[0]?.largeImageURL) {
                        setImage(re?.hits[0]?.largeImageURL)
                    } else {
                        setImage("https://cdn.pixabay.com/photo/2017/11/11/21/55/freedom-2940655_960_720.jpg");
                    }
                })
        }
    }, [weather]);

    return (
        <View style={styles.container}>
            <Text>To jest CityWeather komponent dla miasta {city}</Text>
            <View>
                { image ? <Image source={image} style={{width: 300, height: 400}} /> : <></> }
            </View>
            {
                weather && <View>
                    <Text>Temperatura: {weather.main.temp} C</Text>
                    <Text>Ciśnienie: {weather.main.pressure}</Text>
                    <Text>Opis: {weather.weather[0].main}, {weather.weather[0].description}</Text>
                </View>
            }
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

export default CityWeather;
