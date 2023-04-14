import React from "react";
import { View, Text } from "react-native";

const Name = (props) => {
    return (
        <View>
            <Text>Grzegorz</Text>
            <Text>{props.name}</Text>
        </View>
    );
};

export default Name;

//Zadanie 2
// Stwórz komponent funkcyjny, w którym utworzysz 3 komponenty
// funkcyjne z kwadratami różnych kolorów. Do tego każdy z nich ma mieć ustawiony margines na 10px.
