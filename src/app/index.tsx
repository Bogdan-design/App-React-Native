import React from 'react'
import {MainApp} from "@/src/app/MainApp";
import {Provider} from "react-redux";
import {store} from "@/src/app/store";

export default function IndexPage() {
    return (
        <Provider store={store}>
            <MainApp />
        </Provider>
    );
}
