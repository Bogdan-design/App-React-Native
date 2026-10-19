import React from 'react';
import { MainApp } from '@/src/MainApp';
import { Provider } from 'react-redux';
import { store } from '@/src/store';
import { ThemedView } from '@/components/ThemedView';

export default function IndexPage() {
    return (
        <Provider store={store}>
            <ThemedView style={{ flex: 1 }}>
                <MainApp />
            </ThemedView>
        </Provider>
    );
}
