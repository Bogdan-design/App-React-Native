import React from "react";
import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { MainApp } from "@/src/app/MainApp";
import { Provider } from "react-redux";
import { store } from '@/src/app/store';

export default function HomeScreen() {
    return (
        <Provider store={store}>
            <ThemedView style={styles.titleContainer}>
                <MainApp />
            </ThemedView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    titleContainer: {
        flex: 1,
        padding: 16,
    },
});
