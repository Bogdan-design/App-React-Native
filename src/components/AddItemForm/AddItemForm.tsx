import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

type AddItemFormPropsType = { addItem: (title: string) => void; disabled?: boolean };

export const AddItemForm = React.memo(function AddItemForm({ addItem, disabled = false }: AddItemFormPropsType) {
    const [title, setTitle] = useState('');
    const [error, setError] = useState<string | null>(null);
    const textColor = useThemeColor({}, 'text');

    const addItemHandler = () => {
        if (title.trim()) { addItem(title.trim()); setTitle(''); setError(null); }
        else { setError('Title is required'); }
    };

    return (
        <ThemedView>
            <ThemedView style={styles.row}>
                <TextInput
                    style={[styles.input, { color: textColor, borderColor: error ? '#ff4d4f' : '#ccc' }]}
                    value={title} onChangeText={(t) => { setTitle(t); if (error) setError(null); }}
                    onSubmitEditing={addItemHandler} placeholder="Enter title..." placeholderTextColor="#888"
                    editable={!disabled} accessibilityLabel="Item title input"
                />
                <TouchableOpacity
                    style={[styles.button, disabled && styles.disabled]}
                    onPress={addItemHandler} disabled={disabled}
                    accessibilityLabel="Add item" accessibilityRole="button"
                >
                    <Ionicons name="add-circle" size={28} color={disabled ? '#ccc' : '#0a7ea4'} />
                </TouchableOpacity>
            </ThemedView>
            {error ? <ThemedText style={styles.errorText}>{error}</ThemedText> : null}
        </ThemedView>
    );
});
AddItemForm.displayName = 'AddItemForm';

const styles = StyleSheet.create({
    row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
    input: { flex: 1, borderWidth: 1, borderRadius: 6, paddingHorizontal: 12, paddingVertical: 8, fontSize: 16 },
    button: { minWidth: 44, minHeight: 44, justifyContent: 'center', alignItems: 'center' },
    disabled: { opacity: 0.5 },
    errorText: { color: '#ff4d4f', fontSize: 12, marginTop: 4 }
});
