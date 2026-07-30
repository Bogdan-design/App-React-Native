import React from 'react'
import { TouchableOpacity, StyleSheet, ActivityIndicator } from 'react-native'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {useAppSelector, useAppDispatch} from './store'
import {RequestStatusType, setAppErrorAC} from './app-reducer'
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";


export const MainApp = () => {
    const status = useAppSelector<RequestStatusType>((state) => state.app.status)
    const error = useAppSelector<string | null>((state) => state.app.error)
    const dispatch = useAppDispatch()

    const handleCloseError = () => {
        dispatch(setAppErrorAC(null))
    }

    return (
        <ThemedView style={styles.container}>
            {error && (
                <ThemedView style={styles.errorBanner} accessibilityRole="alert">
                    <ThemedText style={styles.errorText}>{error}</ThemedText>
                    <TouchableOpacity
                        style={styles.closeButton}
                        onPress={handleCloseError}
                        accessibilityLabel="Dismiss error"
                        accessibilityRole="button"
                    >
                        <ThemedText style={styles.closeButtonText}>✕</ThemedText>
                    </TouchableOpacity>
                </ThemedView>
            )}
            {status === 'loading' && (
                <ThemedView style={styles.loadingContainer}>
                    <ActivityIndicator size="large" color="#0a7ea4" />
                </ThemedView>
            )}
            <ThemedView style={styles.contentContainer}>
                <TodolistsList/>
            </ThemedView>
        </ThemedView>
    )
}

MainApp.displayName = 'MainApp';

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    errorBanner: {
        backgroundColor: '#FF3B30',
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    errorText: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: 'bold',
        flex: 1,
    },
    closeButton: {
        padding: 6,
        marginLeft: 10,
    },
    closeButtonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: 'bold',
    },
    loadingContainer: {
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    contentContainer: {
        flex: 1,
    },
})
