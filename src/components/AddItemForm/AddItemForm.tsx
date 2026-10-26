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
    const iconColor = useThemeColor({}, 'icon');

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
                    style={[
                        styles.input,
                        { color: textColor, borderColor: error ? '#ff4d4f' : iconColor }
                    ]}
                    value={title}
                    onChangeText={onChangeTextHandler}
                    onSubmitEditing={addItemHandler}
                    placeholder="Enter title..."
                    placeholderTextColor={iconColor}
                    editable={!disabled}
                    accessibilityLabel="Item title input"
                />
                <TouchableOpacity
                    style={[styles.button, disabled && styles.disabledButton]}
                    onPress={addItemHandler}
                    disabled={disabled}
                    accessibilityLabel="Add item"
                    accessibilityRole="button"
                    activeOpacity={0.7}
                >
                    <Ionicons
                        name="add-circle"
                        size={32}
                        color={disabled ? iconColor : tintColor}
                    />
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
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 16,
        marginRight: 8,
        minHeight: 44,
    },
    button: {
        minWidth: 44,
        minHeight: 44,
        alignItems: 'center',
        justifyContent: 'center',
    },
    disabledButton: {
        opacity: 0.5,
    },
    errorText: {
        color: '#ff4d4f',
        fontSize: 12,
        marginTop: 4,
        marginLeft: 4,
    },
});
