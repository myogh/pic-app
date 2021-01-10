import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet, Text } from "react-native";
import { colors } from "../constants/colors";
import Constants from "expo-constants";

const styles = StyleSheet.create({
    topContainer: {
        justifyContent: "space-between",
        height: 140,
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderRadius: 13,
        backgroundColor: `${colors.primary}`,
    },

    topBarText: {
        fontSize: 26,
        fontFamily: "sans-serif-condensed",
        fontWeight: "700",
    },
});

const TopBar = () => (
    <Appbar style={styles.topContainer}>
        <Text style={styles.topBarText}>Pictour</Text>
        <Appbar.Action
            icon="billiards-rack"
            onPress={() => console.log("Pressed archive")}
        />
    </Appbar>
);

export default TopBar;
