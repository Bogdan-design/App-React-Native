import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

type AddItemFormPropsType = { addItem: (title: string) => void; disabled?: boolean };

export const AddItemForm = React.memo(function AddItemForm({ addItem, disabled = false }: AddItemFormPropsType) {
    const [title, setTitle] = useState('');
    const [error, setError] = useState<string | null>(null);
    const textColor = useThemeColor({}, 'text');
    const tintColor = useThemeColor({}, 'tint');

    const addItemHandler = () => {
        if (title.trim()) {
            addItem(title.trim());
            setTitle('');
            setError(null);
        } else setError('Title is required');
    };

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
                <TextInput
                    style={[styles.input, { color: textColor, borderColor: error ? '#FF3B30' : '#CCCCCC' }]}
                    value={title}
                    placeholder="Add a new item..."
                    placeholderTextColor="#888"
                    onChangeText={(txt) => { setTitle(txt); if (error) setError(null); }}
                    onSubmitEditing={addItemHandler}
                    editable={!disabled}
                />
                <TouchableOpacity
                    onPress={addItemHandler}
                    disabled={disabled}
                    style={{ width: 44, height: 44, justifyContent: 'center', alignItems: 'center' }}
                    accessibilityLabel="Add item"
                    accessibilityRole="button"
                >
                    <Ionicons name="add-circle" size={32} color={disabled ? '#888' : tintColor} />
                </TouchableOpacity>
            </ThemedView>
            {error && <ThemedText style={{ color: '#FF3B30', fontSize: 12, marginTop: 4 }}>{error}</ThemedText>}
        </ThemedView>
    );
});
AddItemForm.displayName = 'AddItemForm';
const styles = StyleSheet.create({
    container: { width: '100%', marginVertical: 8 },
    input: { flex: 1, borderWidth: 1, borderRadius: 8, padding: 8, fontSize: 16 },
});
