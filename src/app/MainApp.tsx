import React from 'react'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {useAppDispatch, useAppSelector} from './store'
import {RequestStatusType, setAppErrorAC} from './app-reducer'
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {TouchableOpacity, ActivityIndicator} from "react-native";

export const MainApp = () => {
    const status = useAppSelector<RequestStatusType>((state) => state.app.status)
    const error = useAppSelector<string | null>((state) => state.app.error)
    const dispatch = useAppDispatch()

    return (
        <ThemedView style={{ flex: 1 }}>
            {status === 'loading' && <ActivityIndicator size="small" color="#0a7ea4" style={{ marginVertical: 8 }} />}
            {error && (
                <TouchableOpacity
                    onPress={() => dispatch(setAppErrorAC(null))}
                    style={{ backgroundColor: '#ff4d4f', padding: 8, marginVertical: 4, borderRadius: 4 }}
                >
                    <ThemedText style={{ color: '#fff', textAlign: 'center' }}>{error} (tap to dismiss)</ThemedText>
                </TouchableOpacity>
            )}
            <ThemedView style={{ flex: 1 }}>
                <TodolistsList/>
            </ThemedView>
        </ThemedView>
    )
}
