import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";
import { Avatar, Button } from "react-native-paper";

const { width, height } = Dimensions.get("window");

// style object for the app component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `${colors.backdrop}`,
    },
    scrollView: {
        justifyContent: "flex-start",
        alignItems: "center",
    },
    userContainer: {
        marginTop: 50,
        paddingLeft: 10,
        width: width * 0.8,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center",
    },
    userText: {
        color: `${colors.text}`,
        marginLeft: 10,
        fontSize: 18,
        fontFamily: "sans-serif-condensed",
    },
    img: {
        marginTop: 20,
        borderRadius: 10,
        marginHorizontal: 6,
        height: height * 0.5,
        width: width * 0.8,
    },

    badgesContainer: {
        marginTop: 20,
        width: width * 0.8,
        height: 40,
        flexDirection: "row",
        justifyContent: "space-between",
    },
    badges: {
        flex: 1 / 4,
        backgroundColor: `${colors.accent}`,
    },
});

// main App component
export default function Profile({ route }) {
    // ------------- Rendering the elements -----------
    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor={colors.backdrop} />
            <ScrollView contentContainerStyle={styles.scrollView}>
                <View style={styles.userContainer}>
                    <Avatar.Image
                        size={40}
                        source={
                            route.params.imgData.userImageURL
                                ? { uri: `${route.params.imgData.userImageURL}` }
                                : require("../assets/user-placeholder.png")
                        }
                    />
                    <Text style={styles.userText}>{route.params.imgData.user}</Text>
                </View>
                <Image
                    resizeMode="cover"
                    style={styles.img}
                    source={{ uri: `${route.params.imgData.webformatURL}` }}
                />
                <View style={styles.badgesContainer}>
                    <Button
                        style={styles.badges}
                        icon="thumb-up"
                        mode="contained"
                        uppercase={false}
                        labelStyle={{ fontSize: 13 }}
                    >
                        {route.params.imgData.likes}
                    </Button>
                    <Button
                        style={styles.badges}
                        icon="comment"
                        mode="contained"
                        uppercase={false}
                        labelStyle={{ fontSize: 13 }}
                    >
                        {route.params.imgData.comments}
                    </Button>
                    <Button
                        style={styles.badges}
                        icon="download-circle"
                        mode="contained"
                        uppercase={false}
                        labelStyle={{ fontSize: 13 }}
                    >
                        {route.params.imgData.downloads}
                    </Button>
                </View>
            </ScrollView>
        </View>
    );
}
