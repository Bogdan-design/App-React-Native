import React from 'react'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {useAppDispatch, useAppSelector} from './store'
import {RequestStatusType, setAppErrorAC} from './app-reducer'
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {ActivityIndicator, TouchableOpacity, StyleSheet} from "react-native";


export const MainApp = () => {
    const status = useAppSelector<RequestStatusType>((state) => state.app.status)
    const error = useAppSelector<string | null>((state) => state.app.error)
    const dispatch = useAppDispatch()

    return (
        <ThemedView style={styles.container}>
            {error && (
                <TouchableOpacity
                    style={styles.errorBanner}
                    onPress={() => dispatch(setAppErrorAC(null))}
                    accessibilityRole="button"
                    accessibilityLabel="Error message. Tap to dismiss."
                >
                    <ThemedText style={styles.errorText}>{error}</ThemedText>
                </TouchableOpacity>
            )}
            {status === 'loading' && (
                <ThemedView style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#0a7ea4" />
                </ThemedView>
            )}
            <ThemedView style={styles.content}>
                <TodolistsList/>
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    content: {
        flex: 1,
    },
    errorBanner: {
        backgroundColor: '#ff4d4f',
        padding: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    errorText: {
        color: '#ffffff',
        fontWeight: 'bold',
    },
    loadingContainer: {
        padding: 10,
        alignItems: 'center',
    },
})
