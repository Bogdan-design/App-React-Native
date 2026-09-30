import React, { useState } from 'react';
import { StyleSheet, TextInput, Pressable, View } from 'react-native';
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
    const iconColor = useThemeColor({ light: '#0a7ea4', dark: '#fff' }, 'text');
    const borderColor = useThemeColor({ light: '#ccc', dark: '#444' }, 'text');

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
            <View style={styles.inputContainer}>
                <TextInput
                    style={[
                        styles.input,
                        { color: textColor, borderColor: error ? 'red' : borderColor },
                    ]}
                    value={title}
                    onChangeText={onChangeTextHandler}
                    onSubmitEditing={addItemHandler}
                    placeholder="Enter item title..."
                    placeholderTextColor="#888"
                    editable={!disabled}
                    accessibilityLabel="New item title input"
                />
                <Pressable
                    onPress={addItemHandler}
                    disabled={disabled}
                    style={({ pressed }) => [
                        styles.button,
                        pressed && styles.buttonPressed,
                        disabled && styles.buttonDisabled,
                    ]}
                    accessibilityRole="button"
                    accessibilityLabel="Add item"
                    hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
                >
                    <Ionicons name="add-circle" size={28} color={disabled ? '#888' : iconColor} />
                </Pressable>
            </View>
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
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 16,
    },
    button: {
        minWidth: 44,
        minHeight: 44,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonPressed: {
        opacity: 0.7,
    },
    buttonDisabled: {
        opacity: 0.5,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
    },
});
