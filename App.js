import "react-native-gesture-handler";
import React from "react";
import Home from "./screens/Home";
import { NavigationContainer } from "@react-navigation/native";
import Profile from "./screens/Profile";
import { createStackNavigator } from "@react-navigation/stack";
import { StyleSheet } from "react-native";
import { colors } from "./constants/colors";
import { color } from "react-native-reanimated";
import { Provider as PaperProvider } from "react-native-paper";

const Stack = createStackNavigator();

const styles = StyleSheet.create({
    header: {
        height: 130,
    },
});
// main App component
export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Stack.Navigator
                    headerMode="screen"
                    mode="card"
                    screenOptions={{
                        headerStyle: {
                            height: 130,
                            backgroundColor: colors.backdrop,
                        },
                        headerTintColor: "#fff",
                        headerTitleStyle: {
                            color: colors.text,
                        },
                    }}
                >
                    <Stack.Screen
                        name="Pictour"
                        component={Home}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen name="Profile" component={Profile} />
                </Stack.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}
