import * as React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet, Text } from "react-native";
import { colors } from "../constants/colors";

const styles = StyleSheet.create({
    topContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 130,
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 20,
        paddingHorizontal: 14,
        borderRadius: 10,
        backgroundColor: `${colors.primary}`,
    },

    topBarTitle: {
        fontSize: 29,
        fontFamily: "sans-serif-condensed",
        fontWeight: "700",
        color: `${colors.text}`,
    },

    topBarText: {
        fontSize: 15,
        fontFamily: "sans-serif-condensed",
        fontWeight: "500",
        color: `${colors.text}`,
    },
});

const TopBar = () => {
    return (
        <Appbar style={styles.topContainer}>
            <Text style={styles.topBarTitle}>Pictour</Text>
            <Appbar.Action
                icon="billiards-rack"
                onPress={() => console.log("Pressed")}
            />
        </Appbar>
    );
};

export default TopBar;
