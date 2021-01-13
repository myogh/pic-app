import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Searchbar } from "react-native-paper";
import { colors } from "../constants/colors";
import ImageResult from "../components/ImageResult";
import Header from "../components/Header";
import DialogCard from "../components/DialogCard";

// style object for the home component
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: `${colors.backdrop}`,
    },
    scrollView: {
        justifyContent: "flex-start",
    },
    searchbar: {
        marginTop: 150,
        marginHorizontal: 10,
        backgroundColor: `${colors.accent}`,
    },
    searchText: {
        color: `${colors.text}`,
        fontSize: 16,
    },

    notiText: {
        textAlign: "center",
        fontSize: 20,
        justifyContent: "center",
        marginTop: 70,
        marginHorizontal: 30,
        color: `${colors.accent}`,
    },
});

// main 'Home' screen component
export default function Home({ navigation }) {
    // ----------- State Management ----------------
    const [queryValue, setQueryValue] = useState("");
    const [imgArr, setImgArr] = useState([]);
    const [visible, setVisible] = useState(false);
    const [err, setErr] = useState(false);
    const [loading, setLoading] = useState(false);

    // publically avaiable key for the pixabay api
    const API_KEY = "12631229-fef6f39bd3564e30b7b9baa1a";

    // image data fetching upon first app load
    useEffect(() => {
        async function fetchData() {
            try {
                setErr(false);
                setLoading(true);
                const data = await fetch(
                    `https://pixabay.com/api/?key=${API_KEY}&q=sky&&image_type=all&per_page=24`
                );
                const dataJSON = await data.json();
                setImgArr(dataJSON.hits);
                setLoading(false);
            } catch {
                setErr(true);
            }
        }
        fetchData();
    }, []);

    // handling the user search input change
    const onChangeSearch = (query) => {
        setQueryValue(query);
    };

    // setting the visibility state for the info dialog box
    const openDialog = () => {
        setVisible(true);
    };

    // setting the visibility state for the info dialog box
    const hideDialog = () => {
        setVisible(false);
    };

    // fetching image data from the api based on the user's input value
    const handleSearch = async () => {
        try {
            setErr(false);
            setLoading(true);
            const data = await fetch(
                `https://pixabay.com/api/?key=${API_KEY}&q=${queryValue}&image_type=all&per_page=24`
            );
            const dataJSON = await data.json();
            setImgArr(dataJSON.hits);
            setLoading(false);
        } catch {
            setErr(false);
        }
    };

    // ------------- Rendering the elements -----------
    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor={colors.backdrop} />
            <Header openDialog={openDialog} />
            <ScrollView contentContainerStyle={styles.scrollView}>
                <DialogCard visible={visible} hideDialog={hideDialog} />
                <Searchbar
                    placeholder="Search for images..."
                    onChangeText={onChangeSearch}
                    style={styles.searchbar}
                    inputStyle={styles.searchText}
                    iconColor={`${colors.text}`}
                    value={queryValue}
                    onSubmitEditing={handleSearch}
                />
                {/* Display components based on the app state: error, loading, fetch successful */}
                {err ? (
                    <Text style={styles.notiText}>Something Went Wrong.</Text>
                ) : imgArr.length > 0 ? (
                    <ImageResult
                        imgArr={imgArr}
                        navigation={navigation}
                        loading={loading}
                    />
                ) : loading ? (
                    <Text style={styles.notiText}>Loading...</Text>
                ) : (
                    <Text style={styles.notiText}>
                        No Image Found{"\n"} Try Different Keyword
                    </Text>
                )}
            </ScrollView>
        </View>
    );
}
