import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { colors } from "./constants/colors";
import Category from "./components/Category";
import ImageResult from "./components/ImageResult";
import TopBar from "./components/TopBar";

// style object for the app component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `${colors.backdrop}`,
    },
    scrollView: {
        justifyContent: "flex-start",
    },
    searchbar: {
        marginHorizontal: 10,
        marginTop: 150,
        backgroundColor: `${colors.accent}`,
    },
    searchText: {
        color: `${colors.text}`,
        fontSize: 16,
    },
});

// main App component
export default function App() {
    // ----------- State Management ----------------
    const [queryValue, setQueryValue] = useState("");
    const [categoryValue, setCategoryValue] = useState("");
    const [imgArr, setImgArr] = useState([]);

    useEffect(() => {
        async function fetchData() {
            try {
                const data = await fetch(
                    `https://pixabay.com/api/?key=12631229-fef6f39bd3564e30b7b9baa1a&q=boys&${categoryValue}&image_type=all&per_page=25`
                );
                const dataJSON = await data.json();
                setImgArr(dataJSON.hits);
            } catch {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const onChangeSearch = (query) => {
        setQueryValue(query);
    };

    const handleCateogryChange = (value) => {
        setCategoryValue(value);
    };

    const handleSearch = async () => {
        try {
            const data = await fetch(
                `https://pixabay.com/api/?key=12631229-fef6f39bd3564e30b7b9baa1a&q=${queryValue}&category=${categoryValue}&image_type=all&per_page=25`
            );
            const dataJSON = await data.json();
            setImgArr(dataJSON.hits);
            setCategoryValue("");
        } catch {
            console.log(error);
        }
    };
    // ------------- Rendering the elements -----------
    return (
        <View style={styles.container}>
            <StatusBar style="auto" backgroundColor={colors.accent} />
            <TopBar />
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Searchbar
                    placeholder="Search for images..."
                    onChangeText={onChangeSearch}
                    style={styles.searchbar}
                    inputStyle={styles.searchText}
                    iconColor={`${colors.text}`}
                    value={queryValue}
                    onSubmitEditing={handleSearch}
                />
                <Category handleCategory={handleCateogryChange} />
                <ImageResult imgArr={imgArr} />
            </ScrollView>
        </View>
    );
}
