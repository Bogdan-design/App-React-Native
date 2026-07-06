import {StyleSheet} from 'react-native';

import React from "react";
import {ThemedView} from '@/components/ThemedView';
import {MainApp} from "@/src/state/MainApp";
import {Provider} from "react-redux";
import {store} from '@/src/state/store'

export default function HomeScreen() {
    return (
        <Provider store={store}>
            <ThemedView style={styles.container}>
                <MainApp/>
            </ThemedView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    titleContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
    },
    input: {
        backgroundColor: '#FFFFFF',
        fontSize: 18,
        width: 200,
        padding: 8,

    },
    boxTasks: {
        flexDirection: 'row',
        gap: 16
    },
    stepContainer: {
        gap: 8,
        marginBottom: 8,
    },
    reactLogo: {
        height: 178,
        width: 290,
        bottom: 0,
        left: 0,
        position: 'absolute',
    },
});
