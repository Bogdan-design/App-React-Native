import {StyleSheet} from 'react-native';

import React from "react";
import {ThemedView} from '@/components/ThemedView';
import {MainApp} from "@/src/app/MainApp";
import {Provider} from "react-redux";
import {store} from '@/src/app/store'

export default function HomeScreen() {
    return (
        <Provider store={store}>
            <ThemedView style={styles.container}>
                <MainApp/>
            </ThemedView>
        </Provider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
