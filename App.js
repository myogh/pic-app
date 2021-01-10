import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { colors } from "./constants/colors";
import Category from "./components/Category";
import ImageResult from "./components/ImageResult";
import TopBar from "./components/TopBar";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: `${colors.backdrop}`,
    },
    searchbar: {
        marginHorizontal: 10,
        marginTop: 20,
    },
});

export default function App() {
    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor={colors.backdrop} />
            <TopBar />
            <Searchbar style={styles.searchbar} />
            <Category />
            <ImageResult />
        </View>
    );
}
