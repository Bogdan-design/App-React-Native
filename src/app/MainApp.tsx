import React from 'react'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {useAppSelector} from './store'
import {RequestStatusType} from './app-reducer'
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";


export const MainApp =()=> {
    const status = useAppSelector<RequestStatusType>((state) => state.app.status)
    const error = useAppSelector<string | null>((state) => state.app.error)

    return (
        <ThemedView style={{ flex: 1 }}>
            {error && (
                <ThemedView style={{ backgroundColor: '#ff3b30', padding: 12, alignItems: 'center', justifyContent: 'center' }}>
                    <ThemedText style={{ color: '#ffffff', fontWeight: 'bold', fontSize: 14 }}>{error}</ThemedText>
                </ThemedView>
            )}
            <ThemedView style={{ flex: 1 }}>
                <TodolistsList/>
            </ThemedView>
        </ThemedView>
    )
}
