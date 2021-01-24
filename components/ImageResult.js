import * as React from "react";
import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { TouchableRipple } from "react-native-paper";
import { colors } from "../constants/colors";

// style object for the ImageResult component
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

// ImageContainer subcomponent
const ImageContainer = ({ imgData, navigation, loading }) => {
    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            contentContainerStyle={styles.imgContainer}
        >
            {imgData.map((item) => (
                <TouchableRipple
                    key={item.id}
                    onPress={() => navigation.navigate("Profile", { imgData: item })}
                    rippleColor="#000000"
                    borderless={true}
                >
                    <Image
                        style={styles.img}
                        key={item.id}
                        source={
                            loading
                                ? require("../assets/loading.jpg")
                                : { uri: `${item.webformatURL}` }
                        }
                    />
                </TouchableRipple>
            ))}
        </ScrollView>
    );
};

// ImageResult Component
const ImageResult = ({ imgArr, navigation, loading }) => {
    const imgsInOneRow = imgArr.length / 3;
    const firstImgRow = imgArr.slice(0, imgsInOneRow);
    const secondImgRow = imgArr.slice(imgsInOneRow, 2 * imgsInOneRow);
    const thirdImgRow = imgArr.slice(2 * imgsInOneRow, 3 * imgsInOneRow);

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Discovered images</Text>
            <ImageContainer
                imgData={firstImgRow}
                navigation={navigation}
                loading={loading}
            />
            <ImageContainer
                imgData={secondImgRow}
                navigation={navigation}
                loading={loading}
            />
            <ImageContainer
                imgData={thirdImgRow}
                navigation={navigation}
                loading={loading}
            />
        </View>
    );
};

export default ImageResult;
