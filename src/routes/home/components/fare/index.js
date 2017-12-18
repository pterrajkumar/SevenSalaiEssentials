import React from "react";
import { Text } from "react-native";
import { View } from "native-base";

import styles from "./farestyles";

const Fare = ({fare})=>{
    return (
        <View style={styles.fareContainer}>
            <Text style={styles.fareText}> FARE: RM</Text>
            <Text style={styles.amount}>{fare}</Text>
        </View>
    );
};

export default Fare;