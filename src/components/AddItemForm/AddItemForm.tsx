import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";
import { useThemeColor } from '@/hooks/useThemeColor';

type AddItemFormPropsType = {
    addItem: (title: string) => void
    disabled?: boolean
}

export const AddItemForm = React.memo(function AddItemForm({addItem, disabled = false}: AddItemFormPropsType) {
    let [title, setTitle] = useState('')
    let [error, setError] = useState<string | null>(null)
    const textColor = useThemeColor({}, 'text');

    const addItemHandler = () => {
        if (title.trim() !== '') {
            addItem(title.trim());
            setTitle('');
        } else {
            setError('Title is required');
        }
    }

    return (
        <ThemedView style={styles.container}>
            <ThemedView style={styles.inputContainer}>
                <TextInput
                    style={[styles.input, { color: textColor }, error ? styles.inputError : null]}
                    value={title}
                    onChangeText={(text) => { setTitle(text); if (error) setError(null); }}
                    onSubmitEditing={addItemHandler}
                    placeholder="Enter title"
                    placeholderTextColor="#888"
                    editable={!disabled}
                    accessibilityLabel="Item title input"
                />
                <TouchableOpacity
                    onPress={addItemHandler}
                    disabled={disabled}
                    style={styles.button}
                    accessibilityLabel="Add item"
                    accessibilityRole="button"
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                >
                    <Ionicons name="add-circle-outline" size={28} color={disabled ? '#888' : textColor} />
                </TouchableOpacity>
            </ThemedView>
            {error && <ThemedText style={styles.errorText}>{error}</ThemedText>}
        </ThemedView>
    );
})

AddItemForm.displayName = 'AddItemForm';

const styles = StyleSheet.create({
    container: { marginVertical: 8 },
    inputContainer: { flexDirection: 'row', alignItems: 'center' },
    input: { flex: 1, borderWidth: 1, borderColor: '#ccc', borderRadius: 6, paddingHorizontal: 12, paddingVertical: 8, fontSize: 16 },
    inputError: { borderColor: '#ff4d4f' },
    button: { marginLeft: 8, padding: 4, minWidth: 44, minHeight: 44, justifyContent: 'center', alignItems: 'center' },
    errorText: { color: '#ff4d4f', fontSize: 12, marginTop: 4 }
});
