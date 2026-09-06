import React from "react";
import { StyleSheet } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { MainApp } from "./MainApp";
import { Provider } from "react-redux";
import { store } from './store';

export default function IndexScreen() {
    return (
        <Provider store={store}>
            <ThemedView style={styles.container}>
                <MainApp />
            </ThemedView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 16,
    },
});
