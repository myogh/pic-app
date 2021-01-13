import * as React from "react";
import { Appbar } from "react-native-paper";
import { Image, StyleSheet } from "react-native";
import { colors } from "../constants/colors";

// style object for the Header component
const styles = StyleSheet.create({
    headerContainer: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        height: 130,
        justifyContent: "space-between",
        alignItems: "center",
        paddingHorizontal: 14,
        borderRadius: 10,
        backgroundColor: `${colors.backdrop}`,
        paddingTop: 20,
        zIndex: 999,
    },

    headerIcon: {
        width: 120,
        height: 30,
        resizeMode: "contain",
    },
});

// App header component
const Header = ({ openDialog }) => {
    return (
        <Appbar style={styles.headerContainer}>
            <Image
                source={require("../assets/header-icon.png")}
                style={styles.headerIcon}
            />
            <Appbar.Action icon="mail" onPress={() => openDialog()} />
        </Appbar>
    );
};

export default Header;
