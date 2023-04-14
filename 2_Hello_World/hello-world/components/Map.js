import React from "react";
import { Image, StyleSheet } from "react-native";

const Map = () => {
    const url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMzYHPTzlMYxJas3_jdyXLoPEp6A1k0TZoLDaiB7QhP9FiHeX7f1xSVeu13UL33BNVWx8&usqp=CAU";
    return (
        <Image
            source={url}
            style={style.mapStyle}
        />
    );
};

const style = StyleSheet.create({
    mapStyle: {
        width: 200,
        height: 300
    }
})

export default Map;
