import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
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
    const borderColor = useThemeColor({ light: '#ccc', dark: '#555' }, 'text');
    const iconColor = useThemeColor({}, 'tint');

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
        <View style={styles.container}>
            <View style={styles.row}>
                <TextInput
                    style={[
                        styles.input,
                        { color: textColor, borderColor: error ? 'red' : borderColor },
                    ]}
                    value={title}
                    onChangeText={onChangeTextHandler}
                    onSubmitEditing={addItemHandler}
                    placeholder="Title"
                    placeholderTextColor="#888"
                    editable={!disabled}
                    accessibilityLabel="New item title"
                />
                <TouchableOpacity
                    style={[styles.button, disabled && styles.disabled]}
                    onPress={addItemHandler}
                    disabled={disabled}
                    accessibilityLabel="Add item"
                    accessibilityRole="button"
                >
                    <Ionicons name="add-circle" size={28} color={disabled ? '#888' : iconColor} />
                </TouchableOpacity>
            </View>
            {error && <ThemedText style={styles.errorText}>{error}</ThemedText>}
        </View>
    );
});

AddItemForm.displayName = 'AddItemForm';

const styles = StyleSheet.create({
    container: {
        marginVertical: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderRadius: 6,
        paddingHorizontal: 10,
        fontSize: 16,
    },
    button: {
        width: 44,
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 8,
    },
    disabled: {
        opacity: 0.5,
    },
    errorText: {
        color: 'red',
        fontSize: 12,
        marginTop: 4,
    },
});
