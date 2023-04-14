import React from "react";
import { Text } from "react-native";

const Calendar = () => {
    return (
        <Text>
            { new Date().toLocaleTimeString() } { new Date().toLocaleDateString() }
        </Text>
    );
};

export default Calendar;
