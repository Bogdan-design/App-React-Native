import React, { useState } from 'react';
import { StyleSheet, TextInput, Pressable } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

type AddItemFormPropsType = {
    addItem: (title: string) => void
    disabled?: boolean
}

export const AddItemForm = React.memo(function ({addItem, disabled = false}: AddItemFormPropsType) {
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
        if (error) setError(null)
    }

    const onKeyPressHandler = () => {
        addItemHandler();
    }

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { color: textColor, borderColor: error ? 'red' : tintColor }]}
                    value={title}
                    onChangeText={onChangeHandler}
                    onSubmitEditing={onKeyPressHandler}
                    placeholder="Type something..."
                    placeholderTextColor={useThemeColor({}, 'icon')}
                    disabled={disabled}
                    accessibilityLabel="Item title input"
                />
                {error && <ThemedText style={styles.errorText}>{error}</ThemedText>}
            </ThemedView>
            <Pressable
                onPress={addItemHandler}
                disabled={disabled}
                style={({ pressed }) => [
                    styles.button,
                    { opacity: (disabled || pressed) ? 0.5 : 1 }
                ]}
                accessibilityLabel="Add item"
                accessibilityRole="button"
            >
                <Ionicons name="add-circle" size={32} color={tintColor} />
            </Pressable>
        </ThemedView>
    )
})

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 8,
        paddingVertical: 8,
    },
    inputContainer: {
        flex: 1,
    },
    input: {
        borderWidth: 1,
        borderRadius: 4,
        padding: 8,
        fontSize: 16,
        minHeight: 44,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 44,
        height: 44,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
    }
});
