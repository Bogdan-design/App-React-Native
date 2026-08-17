import React from 'react'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {useAppSelector} from './store'
import {RequestStatusType} from './app-reducer'
import {ThemedView} from "@/components/ThemedView";
import {ErrorSnackbar} from "@/src/components/ErrorSnackbar/ErrorSnackbar";

export const MainApp = () => {
    const status = useAppSelector<RequestStatusType>((state) => state.app.status)
    return (
        <ThemedView style={{ flex: 1 }}>
            <ErrorSnackbar />
            <ThemedView style={{ flex: 1 }}>
                <TodolistsList/>
            </ThemedView>
        </ThemedView>
    )
}
