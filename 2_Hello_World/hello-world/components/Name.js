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
