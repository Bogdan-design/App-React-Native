import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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

    const onChangeText = (text: string) => {
        if (error !== null) {
            setError(null);
        }
        setTitle(text);
    };

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { color: textColor, borderColor: error ? 'red' : borderColor }]}
                    value={title}
                    onChangeText={onChangeText}
                    onSubmitEditing={addItemHandler}
                    placeholder="Add a new item..."
                    placeholderTextColor="#888"
                    editable={!disabled}
                    accessibilityLabel="New item title input"
                />
                <TouchableOpacity
                    onPress={addItemHandler}
                    disabled={disabled}
                    style={styles.addButton}
                    accessibilityLabel="Add item"
                    accessibilityRole="button"
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <Ionicons name="add-circle-outline" size={28} color={iconColor} />
                </TouchableOpacity>
            </View>
            {error ? <ThemedText style={styles.errorText}>{error}</ThemedText> : null}
        </View>
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
    addButton: {
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
