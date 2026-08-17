import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { setAppErrorAC } from '../../app/app-reducer';
import { useAppDispatch, useAppSelector } from '../../app/store';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export function ErrorSnackbar() {
    const error = useAppSelector<string | null>(state => state.app.error);
    const dispatch = useAppDispatch();

    if (!error) return null;

    const handleDismiss = () => {
        dispatch(setAppErrorAC(null));
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedText style={styles.errorText}>{error}</ThemedText>
            <TouchableOpacity onPress={handleDismiss} style={styles.dismissButton}>
                <ThemedText style={styles.dismissText}>✕</ThemedText>
            </TouchableOpacity>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ff4d4f',
        padding: 12,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderRadius: 6,
        margin: 10,
    },
    errorText: {
        color: '#ffffff',
        fontSize: 14,
        flex: 1,
    },
    dismissButton: {
        paddingLeft: 10,
    },
    dismissText: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
