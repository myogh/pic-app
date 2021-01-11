import * as React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { colors } from "../constants/colors";

// style object for the ImageRest component
const styles = StyleSheet.create({
    container: {
        marginBottom: 7,
        marginTop: 25,
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

// ImageContainer Component
const ImageContainer = ({ imgData }) => {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={styles.imgContainer}
        >
            {imgData.map((item) => (
                <TouchableRipple
                    key={item.id}
                    onPress={() => console.log("Pressed")}
                    rippleColor="#000000"
                    borderless={true}
                >
                    <Image
                        style={styles.img}
                        key={item.id}
                        source={{ uri: `${item.webformatURL}` }}
                    />
                </TouchableRipple>
            ))}
        </ScrollView>
    );
};

// ImageResult Component
const ImageResult = ({ imgArr }) => {
    const imgsInOneRow = imgArr.length / 3;
    const firstImgRow = imgArr.slice(0, imgsInOneRow);
    const secondImgRow = imgArr.slice(imgsInOneRow, 2 * imgsInOneRow);
    const thirdImgRow = imgArr.slice(2 * imgsInOneRow, 3 * imgsInOneRow);

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
