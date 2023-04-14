import React, { useState } from "react";
import { View, Button } from "react-native";

const RandomNumber = () => {
    function getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    const [random, setRandom] = useState(getRandomInt(1,10));

    return (
        <View>
            <View>{random}</View>
            <Button title="Klik" onPress={() => setRandom(getRandomInt(1,10))}>Klik</Button>
        </View>
    );
};

export default RandomNumber;
