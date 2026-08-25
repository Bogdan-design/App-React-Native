import React, { useState } from 'react';
import { StyleSheet, TextInput, Pressable } from 'react-native';
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
    const placeholderColor = useThemeColor({ light: '#9BA1A6', dark: '#687076' }, 'text');
    const defaultBorderColor = useThemeColor({ light: '#ccc', dark: '#444' }, 'text');
    const borderColor = error ? '#ff4d4f' : defaultBorderColor;

    const addItemHandler = () => {
        if (title.trim() !== '') {
            addItem(title.trim());
            setTitle('');
            setError(null);
        } else {
            setError('Title is required');
        }
    };

    const onChangeText = (text: string) => {
        if (error) setError(null);
        setTitle(text);
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { color: textColor, borderColor }]}
                    value={title}
                    onChangeText={onChangeText}
                    onSubmitEditing={addItemHandler}
                    placeholder="Enter item title..."
                    placeholderTextColor={placeholderColor}
                    editable={!disabled}
                    accessibilityLabel="New item title input"
                />
                <Pressable
                    onPress={addItemHandler}
                    disabled={disabled}
                    style={({ pressed }) => [styles.button, pressed && styles.pressed, disabled && styles.disabled]}
                    accessibilityLabel="Add item"
                    accessibilityRole="button"
                    accessibilityHint="Adds the entered title to the list"
                    hitSlop={8}
                >
                    <Ionicons name="add-circle" size={28} color={disabled ? '#888' : '#0a7ea4'} />
                </Pressable>
            </ThemedView>
            {error ? <ThemedText style={styles.errorText}>{error}</ThemedText> : null}
        </ThemedView>
    );
});

AddItemForm.displayName = 'AddItemForm';

const styles = StyleSheet.create({
    container: { marginVertical: 8 },
    inputContainer: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    input: { flex: 1, borderWidth: 1, borderRadius: 8, paddingHorizontal: 12, paddingVertical: 8, fontSize: 16 },
    button: { minWidth: 44, minHeight: 44, justifyContent: 'center', alignItems: 'center' },
    pressed: { opacity: 0.7 },
    disabled: { opacity: 0.5 },
    errorText: { color: '#ff4d4f', fontSize: 12, marginTop: 4, marginLeft: 4 },
});
