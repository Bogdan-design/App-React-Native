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
        <ThemedView>
            <ThemedView style={styles.inputContainer}>
                <TextInput
                    style={[
                        styles.input,
                        { color: textColor, borderColor: error ? '#ff4d4f' : borderColor }
                    ]}
                    value={title}
                    onChangeText={onChangeTextHandler}
                    onSubmitEditing={addItemHandler}
                    placeholder="Enter title..."
                    placeholderTextColor="#888"
                    editable={!disabled}
                    accessibilityLabel="Item title input"
                />
                <TouchableOpacity
                    onPress={addItemHandler}
                    disabled={disabled}
                    style={styles.button}
                    accessibilityLabel="Add item"
                    accessibilityRole="button"
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <Ionicons name="add-circle-outline" size={28} color={disabled ? '#888' : iconColor} />
                </TouchableOpacity>
            </ThemedView>
            {error && <ThemedText style={styles.errorText}>{error}</ThemedText>}
        </ThemedView>
    );
});

AddItemForm.displayName = 'AddItemForm';

const styles = StyleSheet.create({
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
        color: '#ff4d4f',
        fontSize: 12,
        marginTop: 4,
    },
});
