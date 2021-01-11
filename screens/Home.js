import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { Button, Dialog, Paragraph, Portal, Searchbar } from "react-native-paper";
import { colors } from "../constants/colors";
import ImageResult from "../components/ImageResult";
import Header from "../components/Header";

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
        marginTop: 150,
        marginHorizontal: 10,
        backgroundColor: `${colors.accent}`,
    },
    searchText: {
        color: `${colors.text}`,
        fontSize: 16,
    },
});

// main App component
export default function Home({ navigation }) {
    // ----------- State Management ----------------
    const [queryValue, setQueryValue] = useState("");
    const [imgArr, setImgArr] = useState([]);
    const [visible, setVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        async function fetchData() {
            try {
                setLoading(true);
                const data = await fetch(
                    `https://pixabay.com/api/?key=12631229-fef6f39bd3564e30b7b9baa1a&q=blue&&image_type=all&per_page=24`
                );
                const dataJSON = await data.json();
                setImgArr(dataJSON.hits);
                setLoading(false);
            } catch {
                console.log(error);
            }
        }
        fetchData();
    }, []);

    const onChangeSearch = (query) => {
        setQueryValue(query);
    };

    const openDialog = () => {
        setVisible(true);
    };

    const hideDialog = () => {
        setVisible(false);
    };

    const handleSearch = async () => {
        try {
            setLoading(true);
            const data = await fetch(
                `https://pixabay.com/api/?key=12631229-fef6f39bd3564e30b7b9baa1a&q=${queryValue}&image_type=all&per_page=24`
            );
            const dataJSON = await data.json();
            setImgArr(dataJSON.hits);
            setLoading(false);
        } catch {
            console.log(error);
        }
    };
    // ------------- Rendering the elements -----------
    return (
        <View style={styles.container}>
            <StatusBar style="light" backgroundColor={colors.backdrop} />
            <Header openDialog={openDialog} />
            <ScrollView contentContainerStyle={styles.scrollView}>
                <Portal>
                    <Dialog visible={visible} onDismiss={hideDialog}>
                        <Dialog.Title>Pictour</Dialog.Title>
                        <Dialog.Content>
                            <Paragraph>
                                Pictour is an image browsing react native app with
                                the utilization of Pixerbay API. Created by @aungmcs
                            </Paragraph>
                        </Dialog.Content>
                        <Dialog.Actions>
                            <Button onPress={hideDialog}>Done</Button>
                        </Dialog.Actions>
                    </Dialog>
                </Portal>
                <Searchbar
                    placeholder="Search for images..."
                    onChangeText={onChangeSearch}
                    style={styles.searchbar}
                    inputStyle={styles.searchText}
                    iconColor={`${colors.text}`}
                    value={queryValue}
                    onSubmitEditing={handleSearch}
                />
                <ImageResult
                    imgArr={imgArr}
                    navigation={navigation}
                    loading={loading}
                />
            </ScrollView>
        </View>
    );
}
