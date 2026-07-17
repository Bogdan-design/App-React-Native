import React, { useState } from 'react';
import { TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

type AddItemFormPropsType = {
    addItem: (title: string) => void
    disabled?: boolean
}

export const AddItemForm = React.memo(function ({ addItem, disabled = false }: AddItemFormPropsType) {
    const [title, setTitle] = useState('');
    const [error, setError] = useState<string | null>(null);

    const borderColor = useThemeColor({}, 'tabIconDefault');
    const tintColor = useThemeColor({}, 'tint');
    const textColor = useThemeColor({}, 'text');

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
        setTitle(text);
    }

    return (
        <ThemedView style={styles.formContainer}>
            <ThemedView style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { borderColor, color: textColor }]}
                    value={title}
                    onChangeText={onChangeHandler}
                    onSubmitEditing={addItemHandler}
                    placeholder="Add new item..."
                    placeholderTextColor="#888"
                    editable={!disabled}
                    accessibilityLabel="New item title input"
                />
                <TouchableOpacity
                    onPress={addItemHandler}
                    disabled={disabled}
                    style={styles.button}
                    accessibilityLabel="Add item button"
                    accessibilityRole="button"
                >
                    <Ionicons
                        name="add-circle"
                        size={28}
                        color={disabled ? '#ccc' : tintColor}
                    />
                </TouchableOpacity>
            </ThemedView>
            {error && (
                <ThemedText style={styles.errorText}>
                    {error}
                </ThemedText>
            )}
        </ThemedView>
    );
});

AddItemForm.displayName = 'AddItemForm';

const styles = StyleSheet.create({
    formContainer: {
        width: '100%',
        marginVertical: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
        marginRight: 8,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        padding: 4,
        minWidth: 44,
        minHeight: 44,
    },
    errorText: {
        color: '#ff3b30',
        fontSize: 12,
        marginTop: 4,
        paddingLeft: 4,
    }
});
