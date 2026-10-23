import React from 'react'
import './App.css'
import {TodolistsList} from '../features/TodolistsList/TodolistsList'
import {useAppDispatch, useAppSelector} from './store'
import {setAppErrorAC} from './app-reducer'
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {Pressable, StyleSheet} from "react-native";

export const MainApp = () => {
    const dispatch = useAppDispatch()
    const error = useAppSelector<string | null>((state) => state.app.error)

    return (
        <ThemedView style={styles.container}>
            {error && (
                <Pressable style={styles.errorBanner} onPress={() => dispatch(setAppErrorAC(null))}>
                    <ThemedText style={styles.errorText}>{error} (Tap to dismiss)</ThemedText>
                </Pressable>
            )}
            <TodolistsList/>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    errorBanner: {
        backgroundColor: '#ff4d4f',
        padding: 12,
        borderRadius: 8,
        marginBottom: 12,
    },
    errorText: {
        color: '#ffffff',
        fontWeight: 'bold',
        textAlign: 'center',
    },
})
