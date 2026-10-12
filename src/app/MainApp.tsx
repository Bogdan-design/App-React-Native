import React from 'react'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {useAppDispatch, useAppSelector} from './store'
import {RequestStatusType, setAppErrorAC} from './app-reducer'
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {ActivityIndicator, StyleSheet, TouchableOpacity} from 'react-native';

export const MainApp = () => {
    const status = useAppSelector<RequestStatusType>((state) => state.app.status)
    const error = useAppSelector<string | null>((state) => state.app.error)
    const dispatch = useAppDispatch()

    return (
        <ThemedView style={{flex: 1}}>
            {status === 'loading' && <ActivityIndicator size="small" color="#0000ff" style={styles.loader} />}
            {error && (
                <ThemedView style={styles.errorContainer}>
                    <ThemedText style={styles.errorText}>{error}</ThemedText>
                    <TouchableOpacity
                        onPress={() => dispatch(setAppErrorAC(null))}
                        accessibilityLabel="Dismiss error"
                        accessibilityRole="button"
                    >
                        <ThemedText style={styles.dismissText}>✕</ThemedText>
                    </TouchableOpacity>
                </ThemedView>
            )}
            <ThemedView style={{flex: 1}}>
                <TodolistsList/>
            </ThemedView>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    loader: { paddingVertical: 8 },
    errorContainer: {
        backgroundColor: '#ff4d4f',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    errorText: { color: '#ffffff', fontWeight: 'bold' },
    dismissText: { color: '#ffffff', fontWeight: 'bold', fontSize: 16, paddingHorizontal: 8 }
})
