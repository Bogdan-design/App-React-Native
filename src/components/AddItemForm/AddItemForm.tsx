import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from '@/hooks/useThemeColor';

type AddItemFormPropsType = {
    addItem: (title: string) => void;
    disabled?: boolean;
};

export const AddItemForm = React.memo(function AddItemForm({ addItem, disabled = false }: AddItemFormPropsType) {
    const [title, setTitle] = useState('');
    const [error, setError] = useState<string | null>(null);
    const textColor = useThemeColor({}, 'text');
    const tintColor = useThemeColor({}, 'tint');

    const addItemHandler = () => {
        if (title.trim() !== '') {
            addItem(title.trim());
            setTitle('');
        } else {
            setError('Title is required');
        }
    };

    return (
        <ThemedView>
            <ThemedView style={styles.container}>
                <TextInput
                    style={[styles.input, { color: textColor, borderColor: error ? 'red' : '#ccc' }]}
                    value={title}
                    onChangeText={(text) => { setTitle(text); if (error) setError(null); }}
                    placeholder="Title"
                    placeholderTextColor="#888"
                    editable={!disabled}
                    onSubmitEditing={addItemHandler}
                />
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
            {error && <ThemedText style={styles.errorText}>{error}</ThemedText>}
        </ThemedView>
    );
});

AddItemForm.displayName = 'AddItemForm';

const styles = StyleSheet.create({
    container: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    input: { flex: 1, borderWidth: 1, borderRadius: 6, paddingHorizontal: 10, paddingVertical: 6, fontSize: 16 },
    button: { minWidth: 44, minHeight: 44, justifyContent: 'center', alignItems: 'center' },
    errorText: { color: 'red', fontSize: 12, marginTop: 4 },
});
