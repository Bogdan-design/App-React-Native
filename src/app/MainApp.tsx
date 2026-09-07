import React from 'react'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {useAppDispatch, useAppSelector} from './store'
import {RequestStatusType, setAppErrorAC} from './app-reducer'
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {TouchableOpacity, ActivityIndicator, StyleSheet} from 'react-native';

export const MainApp = () => {
    const status = useAppSelector<RequestStatusType>((state) => state.app.status)
    const error = useAppSelector<string | null>((state) => state.app.error)
    const dispatch = useAppDispatch()

    return (
        <ThemedView style={{ flex: 1, padding: 16 }}>
            {status === 'loading' && (
                <ActivityIndicator size="large" color="#0a7ea4" style={{ marginVertical: 8 }} />
            )}
            {error && (
                <TouchableOpacity
                    style={styles.errorBanner}
                    onPress={() => dispatch(setAppErrorAC(null))}
                    accessibilityRole="button"
                    accessibilityLabel="Dismiss error"
                >
                    <ThemedText style={styles.errorText}>{error} (Tap to dismiss)</ThemedText>
                </TouchableOpacity>
            )}
            <ThemedView style={{ flex: 1 }}>
                <TodolistsList/>
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    errorBanner: {
        backgroundColor: '#ff4d4f',
        padding: 12,
        borderRadius: 6,
        marginBottom: 12,
    },
    errorText: {
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
