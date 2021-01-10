import * as React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../constants/colors";

// style object for the ImageRest component
const styles = StyleSheet.create({
    container: {
        marginBottom: 7,
        marginTop: 3,
        backgroundColor: `${colors.surface}`,
        paddingLeft: 10,
    },
    text: {
        color: `gray`,
        fontFamily: "sans-serif-condensed",
    },
    imgContainer: {
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        borderRadius: 10,
        marginRight: 8,
        height: 400,
        width: 200,
    },
});

// ImageContainer Component
const ImageContainer = () => {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={styles.imgContainer}
        >
            <Image
                style={styles.img}
                source={{ uri: "https://source.unsplash.com/random" }}
            />
        </ScrollView>
    );
};

// ImageResult Component
const ImageResult = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Discovered images</Text>
            <ImageContainer />
        </View>
    );
};

export default ImageResult;
