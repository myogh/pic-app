import * as React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button } from "react-native-paper";
import { colors } from "../constants/colors";
import { categories } from "../constants/categories";

// style object for the Category component
const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        height: 70,
        backgroundColor: `${colors.backdrop}`,
    },
    scrollView: {
        justifyContent: "center",
        alignItems: "center",
    },
    button: {
        marginHorizontal: 5,
        borderRadius: 10,
        borderColor: `${colors.surface}`,
        paddingHorizontal: 3,
    },
    buttonText: {
        fontSize: 11,
        color: `${colors.text}`,
    },
});

// Category component
const Category = ({ handleCategory }) => {
    return (
        <View style={styles.container}>
            <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal={true}
                contentContainerStyle={styles.scrollView}
            >
                {categories.map((type, i) => {
                    return (
                        <Button
                            key={i}
                            style={styles.button}
                            labelStyle={styles.buttonText}
                            mode="outlined"
                            color={colors.primary}
                            onPress={() => handleCategory(type)}
                            title={type}
                            compact={true}
                        >
                            {type}
                        </Button>
                    );
                })}
            </ScrollView>
        </View>
    );
};

export default Category;
