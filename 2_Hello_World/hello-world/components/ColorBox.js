import React from "react";
import { View } from "react-native";

const ColorBox = (props) => {
    return (
        <View style={{
          width: 200,
          height: 200,
          backgroundColor: props.color
        }} />
    );
};

export default ColorBox;
