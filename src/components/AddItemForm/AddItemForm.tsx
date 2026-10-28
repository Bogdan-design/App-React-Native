import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

type AddItemFormPropsType = {
    addItem: (title: string) => void;
    disabled?: boolean;
};

export const AddItemForm = React.memo(function AddItemForm({ addItem, disabled = false }: AddItemFormPropsType) {
    const [title, setTitle] = useState('');
    const [error, setError] = useState<string | null>(null);

    const textColor = useThemeColor({}, 'text');
    const borderColor = useThemeColor({ light: '#ccc', dark: '#444' }, 'text');
    const iconColor = useThemeColor({ light: '#0a7ea4', dark: '#fff' }, 'text');

    const addItemHandler = () => {
        if (title.trim() !== '') {
            addItem(title.trim());
            setTitle('');
        } else {
            setError('Title is required');
        }
    };

    const onChangeText = (text: string) => {
        setTitle(text);
        if (error !== null) setError(null);
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { color: textColor, borderColor: error ? 'red' : borderColor }]}
                    value={title}
                    onChangeText={onChangeText}
                    onSubmitEditing={addItemHandler}
                    placeholder="Title"
                    placeholderTextColor="#888"
                    editable={!disabled}
                    accessibilityLabel="Title input"
                />
                <TouchableOpacity
                    onPress={addItemHandler}
                    disabled={disabled}
                    style={styles.button}
                    accessibilityRole="button"
                    accessibilityLabel="Add item"
                    aria-label="Add item"
                >
                    <Ionicons name="add-circle" size={28} color={disabled ? '#888' : iconColor} />
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
        gap: 8,
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 10,
    },
    button: {
        padding: 4,
        minWidth: 44,
        minHeight: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
    },
});
