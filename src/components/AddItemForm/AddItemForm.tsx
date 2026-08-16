import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

type AddItemFormPropsType = {
    addItem: (title: string) => void
    disabled?: boolean
}

export const AddItemForm = React.memo(function AddItemForm({addItem, disabled = false}: AddItemFormPropsType) {
    const [title, setTitle] = useState('');
    const [error, setError] = useState<string | null>(null);

    const textColor = useThemeColor({}, 'text');
    const tintColor = useThemeColor({}, 'tint');

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
        <ThemedView>
            <ThemedView style={styles.container}>
                <TextInput
                    style={[styles.input, { color: textColor }, error ? styles.inputError : null]}
                    value={title}
                    onChangeText={onChangeHandler}
                    onSubmitEditing={addItemHandler}
                    placeholder="Enter title"
                    placeholderTextColor="#888"
                    editable={!disabled}
                    accessibilityLabel="Title input"
                />
                <TouchableOpacity
                    style={[styles.button, disabled && styles.disabledButton]}
                    onPress={addItemHandler}
                    disabled={disabled}
                    accessibilityRole="button"
                    accessibilityLabel="Add item"
                    activeOpacity={0.7}
                >
                    <Ionicons name="add-circle" size={32} color={disabled ? '#888' : tintColor} />
                </TouchableOpacity>
            </ThemedView>
            {error ? <ThemedText style={styles.errorText}>{error}</ThemedText> : null}
        </ThemedView>
    );
});

AddItemForm.displayName = 'AddItemForm';

const styles = StyleSheet.create({
    container: {
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
        minHeight: 44,
    },
    inputError: {
        borderColor: '#ff4d4f',
    },
    button: {
        minWidth: 44,
        minHeight: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    disabledButton: {
        opacity: 0.5,
    },
    errorText: {
        color: '#ff4d4f',
        fontSize: 12,
        marginTop: 4,
    },
});
