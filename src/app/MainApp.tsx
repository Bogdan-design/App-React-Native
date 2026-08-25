import React from 'react';
import './App.css';
import { TodolistsList } from '../features/TodolistsList/TodolistsList';
import { useAppDispatch, useAppSelector } from './store';
import { RequestStatusType, setAppErrorAC } from './app-reducer';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Pressable, StyleSheet } from 'react-native';

export const MainApp = () => {
    const status = useAppSelector<RequestStatusType>((state) => state.app.status);
    const error = useAppSelector<string | null>((state) => state.app.error);
    const dispatch = useAppDispatch();

    return (
        <ThemedView style={{ flex: 1 }}>
            {error ? (
                <ThemedView style={styles.errorBanner}>
                    <ThemedText style={styles.errorText}>{error}</ThemedText>
                    <Pressable
                        onPress={() => dispatch(setAppErrorAC(null))}
                        accessibilityLabel="Dismiss error"
                        accessibilityRole="button"
                    >
                        <ThemedText style={styles.dismissText}>✕</ThemedText>
                    </Pressable>
                </ThemedView>
            ) : null}
            <ThemedView style={{ flex: 1 }}>
                <TodolistsList />
            </ThemedView>
        </ThemedView>
    );
};

const styles = StyleSheet.create({
    errorBanner: {
        backgroundColor: '#ff4d4f',
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    errorText: {
        color: '#ffffff',
        fontSize: 14,
        flex: 1,
    },
    dismissText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        paddingHorizontal: 8,
    },
});
