import React from 'react';
import { MainApp } from './MainApp';
import { Provider } from 'react-redux';
import { store } from './store';

export default function Home() {
    return (
        <Provider store={store}>
            <MainApp />
        </Provider>
    );
}
