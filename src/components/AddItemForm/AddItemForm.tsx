import React, { useState } from 'react';
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
import {TextInput, TouchableOpacity, StyleSheet} from "react-native";
import {Ionicons} from "@expo/vector-icons";
import {useThemeColor} from "@/hooks/useThemeColor";

type AddItemFormPropsType = {
    addItem: (title: string) => void
    disabled?: boolean
}

export const AddItemForm = React.memo(function ({addItem, disabled = false}: AddItemFormPropsType) {
    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)
    const color = useThemeColor({}, 'text');

    const addItemHandler = () => {
        if (title.trim() !== '') {
            addItem(title);
            setTitle('');
        } else {
            setError('Title is required');
        }
    }

    const onChangeHandler = (text: string) => {
        if (error !== null) {
            setError(null);
        }
        setTitle(text)
    }

    return <ThemedView style={styles.container}>
        <ThemedView style={styles.inputContainer}>
            <TextInput
                style={[styles.input, {color}, error ? styles.errorInput : null]}
                value={title}
                onChangeText={onChangeHandler}
                placeholder="Add new item..."
                placeholderTextColor="#999"
                editable={!disabled}
            />
            {error && <ThemedText style={styles.errorText}>{error}</ThemedText>}
        </ThemedView>
        <TouchableOpacity
            onPress={addItemHandler}
            disabled={disabled}
            accessibilityLabel="Add item"
            accessibilityRole="button"
            style={[styles.button, disabled ? styles.disabledButton : null]}
        >
            <Ionicons name="add-circle-outline" size={32} color={disabled ? "#ccc" : color} />
        </TouchableOpacity>
    </ThemedView>
})

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    inputContainer: {
        flex: 1,
    },
    input: {
        fontSize: 16,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
    },
    errorInput: {
        borderColor: 'red',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
    },
    button: {
        padding: 4,
    },
    disabledButton: {
        opacity: 0.5,
    }
})
