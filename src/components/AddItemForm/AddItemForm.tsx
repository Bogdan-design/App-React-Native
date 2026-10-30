import React, { useState } from 'react';
import { Pressable, StyleSheet, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from "@/hooks/useThemeColor";

type AddItemFormPropsType = {
    addItem: (title: string) => void
    disabled?: boolean
}

export const AddItemForm = React.memo(function AddItemForm({addItem, disabled = false}: AddItemFormPropsType) {
    const [title, setTitle] = useState('');
    const [error, setError] = useState<string | null>(null);
    const textColor = useThemeColor({}, 'text');
    const borderColor = useThemeColor({}, 'icon');

    const addItemHandler = () => {
        if (title.trim() !== '') {
            addItem(title.trim());
            setTitle('');
            setError(null);
        } else {
            setError('Title is required');
        }
    };

    const onChangeHandler = (text: string) => {
        setTitle(text);
        if (error !== null) {
            setError(null);
        }
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { color: textColor, borderColor: error ? 'red' : borderColor }]}
                    value={title}
                    onChangeText={onChangeHandler}
                    onSubmitEditing={addItemHandler}
                    placeholder="Title"
                    placeholderTextColor="#888"
                    editable={!disabled}
                    aria-label="Item title input"
                    accessibilityLabel="Item title input"
                />
                <Pressable
                    onPress={addItemHandler}
                    disabled={disabled}
                    style={({ pressed }) => [styles.button, { opacity: pressed || disabled ? 0.5 : 1 }]}
                    aria-label="Add item"
                    accessibilityLabel="Add item"
                    accessibilityRole="button"
                    role="button"
                >
                    <Ionicons name="add-circle" size={28} color="#2f95dc" />
                </Pressable>
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
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 16,
    },
    button: {
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: 44,
        minHeight: 44,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
    },
});
