import React from "react";
import { View, Text } from "react-native";

const Invitation = ({invite : {place, date, hour, dressCode}}) => {
    return (
        <View>
            <Text>Zapraszam na przyjęcie w {place}.</Text>
            <Text>Data: {date}, godzina: {hour}.</Text>
            <Text>
                Obowiązujący strój: <Text style={{fontWeight: "bold"}}>{dressCode}</Text>.
            </Text>
        </View>
    );
};

export default Invitation;
