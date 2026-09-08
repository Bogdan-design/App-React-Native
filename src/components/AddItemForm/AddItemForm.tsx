import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
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

    const onChangeTextHandler = (text: string) => {
        setTitle(text);
        if (error !== null) {
            setError(null);
        }
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { color: textColor, borderColor: error ? '#ff3b30' : '#ccc' }]}
                    value={title}
                    onChangeText={onChangeTextHandler}
                    onSubmitEditing={addItemHandler}
                    placeholder="Enter title..."
                    placeholderTextColor="#888"
                    editable={!disabled}
                    accessibilityLabel="Item title input"
                />
                <TouchableOpacity
                    style={[styles.button, disabled && styles.buttonDisabled]}
                    onPress={addItemHandler}
                    disabled={disabled}
                    accessibilityLabel="Add item"
                    accessibilityRole="button"
                >
                    <Ionicons name="add-circle" size={32} color={disabled ? '#ccc' : tintColor} />
                </TouchableOpacity>
            </ThemedView>
            {error && <ThemedText style={styles.errorText}>{error}</ThemedText>}
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
    },
    input: {
        flex: 1,
        height: 44,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        marginRight: 8,
    },
    button: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonDisabled: {
        opacity: 0.5,
    },
    errorText: {
        color: '#ff3b30',
        fontSize: 12,
        marginTop: 4,
    },
});
