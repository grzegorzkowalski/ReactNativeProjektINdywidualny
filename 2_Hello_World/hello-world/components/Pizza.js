import React from "react";
import { Text, StyleSheet } from "react-native";

const Pizza = () => {
    return (
        <Text>
            "<Text style={styles.italic}>Pizza</Text> to bardzo smaczne włoskie danie.
            Robi się ją z ciasta drożdżowego.
            Na ciasto wylewa się sos pomidorowy. Na niego układa się składniki:
            <Text style={styles.bold}>kiełbasę, ser żółty, oliwki, paprykę</Text>.
            Jest wiele rodzajów <Text style={styles.italic}>pizzy</Text>, może być z mięsem, bez mięsa, rybna,
            na słodko z <Text style={styles.color}>ananasem</Text>."
        </Text>
    );
};

const styles = StyleSheet.create({
    bold: {
        fontWeight: "bold"
    },
    italic: {
        fontStyle: "italic"
    },
    color: {
        color: "yellow"
    }
})

export default Pizza;
