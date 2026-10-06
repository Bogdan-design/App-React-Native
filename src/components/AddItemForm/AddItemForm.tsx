import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
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
    const borderColor = useThemeColor({}, 'tabIconDefault');
    const tintColor = useThemeColor({}, 'tint');

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
        if (error) setError(null);
    };

    return (
        <ThemedView style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    style={[
                        styles.input,
                        { color: textColor, borderColor: error ? '#ff4d4f' : borderColor },
                    ]}
                    value={title}
                    onChangeText={onChangeTextHandler}
                    onSubmitEditing={addItemHandler}
                    placeholder="Enter item title..."
                    placeholderTextColor={borderColor}
                    editable={!disabled}
                    accessibilityLabel="Item title input"
                />
                <TouchableOpacity
                    onPress={addItemHandler}
                    disabled={disabled}
                    style={styles.addButton}
                    accessibilityRole="button"
                    accessibilityLabel="Add item"
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <Ionicons
                        name="add-circle-outline"
                        size={28}
                        color={disabled ? borderColor : tintColor}
                    />
                </TouchableOpacity>
            </View>
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
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        fontSize: 16,
        marginRight: 8,
    },
    addButton: {
        padding: 4,
    },
    errorText: {
        color: '#ff4d4f',
        fontSize: 12,
        marginTop: 4,
        marginLeft: 4,
    },
});
