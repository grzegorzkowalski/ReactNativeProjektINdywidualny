import React from "react";
import { View } from "react-native";
import ColorBox from "./ColorBox";

const Boxes = () => {
    return (
        <View>
            <ColorBox color="red" />
            <ColorBox color="green" />
            <ColorBox color="blue" />
        </View>
    );
};

export default Boxes;
