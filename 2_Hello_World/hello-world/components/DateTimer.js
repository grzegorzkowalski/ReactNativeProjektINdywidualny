import React from "react";
import {Text} from "react-native";

const DateTimer = ({dateTime}) => {
    return (
        <Text>
            {dateTime.toLocaleDateString()} {dateTime.toLocaleTimeString()}
        </Text>
    );
};

export default DateTimer;
