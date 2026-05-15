import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from '@/hooks/useThemeColor';

type AddItemFormPropsType = {
    addItem: (title: string) => void
    disabled?: boolean
}

export const AddItemForm = React.memo(function ({addItem, disabled = false}: AddItemFormPropsType) {
    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)

    const textColor = useThemeColor({}, 'text');
    const iconColor = useThemeColor({ light: '#007aff', dark: '#0a84ff' }, 'text');
    const errorColor = '#ff3b30';

    const addItemHandler = () => {
        if (title.trim() !== '') {
            addItem(title);
            setTitle('');
            setError(null);
        } else {
            setError('Title is required');
        }
    }

    const onChangeHandler = (text: string) => {
        setTitle(text)
        if (error) setError(null)
    }

    return (
        <ThemedView>
            <ThemedView style={styles.container}>
                <TextInput
                    style={[
                        styles.input,
                        { color: textColor, borderColor: error ? errorColor : '#ccc' }
                    ]}
                    value={title}
                    onChangeText={onChangeHandler}
                    placeholder="Add new item"
                    placeholderTextColor="#8e8e93"
                    editable={!disabled}
                    onSubmitEditing={addItemHandler}
                />
                <TouchableOpacity
                    onPress={addItemHandler}
                    disabled={disabled}
                    style={[styles.button, disabled && { opacity: 0.5 }]}
                    accessibilityLabel="Add item"
                    accessibilityRole="button"
                >
                    <Ionicons
                        name="add-circle"
                        size={38}
                        color={disabled ? '#8e8e93' : iconColor}
                    />
                </TouchableOpacity>
            </ThemedView>
            {error && <ThemedText style={[styles.errorText, { color: errorColor }]}>{error}</ThemedText>}
        </ThemedView>
    )
})

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 16,
        marginRight: 8,
        height: 44,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: 44,
        height: 44,
    },
    errorText: {
        fontSize: 12,
        marginTop: 4,
        marginLeft: 4,
    }
})
