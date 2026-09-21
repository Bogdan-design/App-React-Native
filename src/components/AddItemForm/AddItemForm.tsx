import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

type AddItemFormPropsType = {
    addItem: (title: string) => void;
    disabled?: boolean;
};

export const AddItemForm = React.memo(function AddItemForm({ addItem, disabled = false }: AddItemFormPropsType) {
    const [title, setTitle] = useState('');
    const [error, setError] = useState<string | null>(null);

    const textColor = useThemeColor({}, 'text');
    const iconColor = useThemeColor({}, 'tint');

    const addItemHandler = () => {
        if (title.trim() !== '') {
            addItem(title.trim());
            setTitle('');
            setError(null);
        } else {
            setError('Title is required');
        }
    };

    const onChangeTextHandler = (text: string) => {
        if (error !== null) {
            setError(null);
        }
        setTitle(text);
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { color: textColor }, error ? styles.inputError : null]}
                    value={title}
                    onChangeText={onChangeTextHandler}
                    onSubmitEditing={addItemHandler}
                    editable={!disabled}
                    placeholder="Enter title..."
                    placeholderTextColor="#888"
                    accessibilityLabel="Item title input"
                />
                <TouchableOpacity
                    onPress={addItemHandler}
                    disabled={disabled}
                    style={styles.button}
                    accessibilityLabel="Add item"
                    accessibilityRole="button"
                >
                    <Ionicons name="add-circle" size={28} color={disabled ? '#888' : iconColor} />
                </TouchableOpacity>
            </ThemedView>
            {error ? <ThemedText style={styles.errorText}>{error}</ThemedText> : null}
        </ThemedView>
    );
});

AddItemForm.displayName = 'AddItemForm';

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
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 16,
        minHeight: 44,
    },
    inputError: {
        borderColor: '#d32f2f',
    },
    button: {
        minWidth: 44,
        minHeight: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: '#d32f2f',
        fontSize: 12,
        marginTop: 4,
    },
});
