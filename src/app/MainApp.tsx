import React from 'react'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {useAppDispatch, useAppSelector} from './store'
import {RequestStatusType, setAppErrorAC} from './app-reducer'
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {TouchableOpacity} from "react-native";


export const MainApp = () => {
    const status = useAppSelector<RequestStatusType>((state) => state.app.status)
    const error = useAppSelector<string | null>((state) => state.app.error)
    const dispatch = useAppDispatch()

    return (
        <ThemedView style={{ flex: 1 }}>
            {error && (
                <ThemedView style={{ backgroundColor: 'crimson', padding: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                    <ThemedText style={{ color: 'white' }}>{error}</ThemedText>
                    <TouchableOpacity onPress={() => dispatch(setAppErrorAC(null))}>
                        <ThemedText style={{ color: 'white', fontWeight: 'bold' }}>✕</ThemedText>
                    </TouchableOpacity>
                </ThemedView>
            )}
            {status === 'loading' && (
                <ThemedView style={{ padding: 5, backgroundColor: '#e0e0e0' }}>
                    <ThemedText style={{ fontSize: 12, color: '#333' }}>Loading...</ThemedText>
                </ThemedView>
            )}
            <ThemedView style={{ flex: 1 }}>
                <TodolistsList/>
            </ThemedView>
        </ThemedView>
    )
}
