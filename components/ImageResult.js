import * as React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { colors } from "../constants/colors";

// style object for the ImageRest component
const styles = StyleSheet.create({
    container: {
        marginBottom: 7,
        marginTop: 3,
        backgroundColor: `${colors.backdrop}`,
    },
    text: {
        color: `gray`,
        fontFamily: "sans-serif-condensed",
        paddingLeft: 10,
    },
    imgContainer: {
        marginTop: 15,
        justifyContent: "center",
        alignItems: "center",
    },
    img: {
        borderRadius: 10,
        marginHorizontal: 6,
        height: 280,
        width: 150,
    },
});

const anArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// ImageContainer Component
const ImageContainer = ({ imgData }) => {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={styles.imgContainer}
        >
            {imgData.map((item) => (
                <Image
                    style={styles.img}
                    key={item.id}
                    source={{ uri: `${item.webformatURL}` }}
                />
            ))}
        </ScrollView>
    );
};

// ImageResult Component
const ImageResult = ({ imgArr }) => {
    const firstImgRow = imgArr.splice(0, imgArr.length / 3);
    const secondImgRow = imgArr.splice(
        imgArr.length / 3,
        imgArr.length / 3 + imgArr.length / 3
    );
    const thirdImgRow = imgArr.splice(
        imgArr.length / 3 + imgArr.length / 3,
        imgArr.length / 3 + imgArr.length / 3 + imgArr.length / 3
    );

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Discovered images</Text>
            <ImageContainer imgData={firstImgRow} />
            <ImageContainer imgData={secondImgRow} />
            <ImageContainer imgData={thirdImgRow} />
        </View>
    );
};

export default ImageResult;
