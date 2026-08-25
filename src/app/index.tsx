import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { MainApp } from './MainApp';
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
