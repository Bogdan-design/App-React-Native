import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

type AddItemFormPropsType = {
    addItem: (title: string) => void
    disabled?: boolean
}

export const AddItemForm = React.memo(function AddItemForm({addItem, disabled = false}: AddItemFormPropsType) {
    const [title, setTitle] = useState('')
    const [error, setError] = useState<string | null>(null)

    const textColor = useThemeColor({}, 'text')
    const iconColor = useThemeColor({}, 'tint')

    const addItemHandler = () => {
        if (title.trim() !== '') {
            addItem(title.trim());
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

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { color: textColor }, error ? styles.inputError : null]}
                    value={title}
                    onChangeText={onChangeHandler}
                    placeholder="Add new item..."
                    placeholderTextColor="#888"
                    editable={!disabled}
                    onSubmitEditing={addItemHandler}
                    accessibilityLabel="Title input field"
                    aria-label="Title input field"
                />
                <TouchableOpacity
                    onPress={addItemHandler}
                    disabled={disabled}
                    accessibilityLabel="Add item"
                    aria-label="Add item"
                    accessibilityRole="button"
                    role="button"
                    style={styles.addButton}
                >
                    <Ionicons name="add-circle" size={32} color={disabled ? '#888' : iconColor} />
                </TouchableOpacity>
            </ThemedView>
            {error && <ThemedText style={styles.errorText}>{error}</ThemedText>}
        </ThemedView>
    )
})

AddItemForm.displayName = 'AddItemForm'

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 16,
    },
    inputError: {
        borderColor: '#ff4d4f',
    },
    addButton: {
        padding: 4,
    },
    errorText: {
        color: '#ff4d4f',
        fontSize: 12,
        marginTop: 4,
    },
})
