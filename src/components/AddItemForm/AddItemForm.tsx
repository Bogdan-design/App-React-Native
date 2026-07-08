import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { Ionicons } from '@expo/vector-icons';
import { useThemeColor } from '@/hooks/useThemeColor';

type AddItemFormPropsType = {
    addItem: (title: string) => void
    disabled?: boolean
}

export const AddItemForm = React.memo(function AddItemForm({addItem, disabled = false}: AddItemFormPropsType) {
    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

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
        setTitle(text)
        if (error !== null) {
            setError(null);
        }
    }

    return <ThemedView style={styles.container}>
        <ThemedView style={styles.inputContainer}>
            <TextInput
                style={[styles.input, { color: textColor, borderColor: error ? 'red' : '#ccc' }]}
                value={title}
                onChangeText={onChangeHandler}
                onSubmitEditing={addItemHandler}
                placeholder="Add new item..."
                placeholderTextColor="#888"
                editable={!disabled}
            />
            {error && <ThemedText style={styles.errorText}>{error}</ThemedText>}
        </ThemedView>
        <TouchableOpacity
            onPress={addItemHandler}
            disabled={disabled}
            style={styles.button}
            accessibilityLabel="Add item"
            accessibilityRole="button"
        >
            <Ionicons name="add-circle" size={32} color={disabled ? '#ccc' : tintColor} />
        </TouchableOpacity>
    </ThemedView>
})

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 8,
    },
    inputContainer: {
        flex: 1,
        marginRight: 8,
    },
    input: {
        borderWidth: 1,
        borderRadius: 4,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 16,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
    }
});
