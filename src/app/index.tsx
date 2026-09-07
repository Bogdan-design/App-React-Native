import React from "react";
import { ThemedView } from '@/components/ThemedView';
import { MainApp } from "@/src/app/MainApp";
import { Provider } from "react-redux";
import { store } from '@/src/app/store';

export default function Index() {
    return (
        <Provider store={store}>
            <ThemedView style={{ flex: 1 }}>
                <MainApp />
            </ThemedView>
        </Provider>
    );
}
