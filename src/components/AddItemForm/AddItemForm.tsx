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

export const AddItemForm = React.memo(function ({addItem, disabled = false}: AddItemFormPropsType) {
    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const tintColor = useThemeColor({}, 'tint');
    const iconColor = useThemeColor({}, 'icon');
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

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.inputContainer}>
                <TextInput
                    style={[
                        styles.input,
                        { color: textColor, borderColor: error ? 'red' : iconColor }
                    ]}
                    value={title}
                    onChangeText={onChangeHandler}
                    onSubmitEditing={addItemHandler}
                    placeholder="Type something..."
                    placeholderTextColor={iconColor}
                    editable={!disabled}
                    accessibilityLabel="Item title input"
                />
                <TouchableOpacity
                    onPress={addItemHandler}
                    disabled={disabled}
                    style={[styles.button, { backgroundColor: disabled ? iconColor : tintColor }]}
                    accessibilityLabel="Add item"
                    accessibilityRole="button"
                >
                    <Ionicons name="add" size={24} color="white" />
                </TouchableOpacity>
            </ThemedView>
            {error && (
                <ThemedText style={styles.errorText}>{error}</ThemedText>
            )}
        </ThemedView>
    )
})

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginVertical: 8,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8,
    },
    input: {
        flex: 1,
        height: 44,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        fontSize: 16,
    },
    button: {
        width: 44,
        height: 44,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
        marginLeft: 4,
    }
});
