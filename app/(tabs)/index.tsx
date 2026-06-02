import {SafeAreaView, StyleSheet} from 'react-native';
import React from "react";
import {MainApp} from "@/src/core/MainApp";
import {Provider} from "react-redux";
import {store} from '@/src/core/store'

export default function HomeScreen() {
    return (
        <Provider store={store}>
            <SafeAreaView style={{flex: 1}}>
                <MainApp/>
            </SafeAreaView>
        </Provider>
    )
}

const styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'column',
        alignItems: 'center',
        gap: 8,
    },
});
