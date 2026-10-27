import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import { TodolistsList } from '../features/TodolistsList/TodolistsList'
import { useAppDispatch, useAppSelector } from './store'
import { RequestStatusType, setAppErrorAC } from './app-reducer'
import { ThemedView } from "@/components/ThemedView"
import { ThemedText } from "@/components/ThemedText"

export const MainApp = () => {
    const status = useAppSelector<RequestStatusType>((state) => state.app.status)
    const error = useAppSelector<string | null>((state) => state.app.error)
    const dispatch = useAppDispatch()

    const dismissError = () => {
        dispatch(setAppErrorAC(null))
    }

    return (
        <ThemedView style={styles.container}>
            {error && (
                <TouchableOpacity style={styles.errorBanner} onPress={dismissError}>
                    <ThemedText style={styles.errorText}>
                        Error: {error} (Tap to dismiss)
                    </ThemedText>
                </TouchableOpacity>
            )}
            {status === 'loading' && (
                <ThemedText style={styles.loadingText}>Loading...</ThemedText>
            )}
            <TodolistsList />
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    errorBanner: {
        backgroundColor: '#ff4d4f',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
    },
    errorText: {
        color: '#ffffff',
        textAlign: 'center',
        fontWeight: 'bold',
    },
    loadingText: {
        textAlign: 'center',
        paddingVertical: 8,
        color: '#1890ff',
    },
})
