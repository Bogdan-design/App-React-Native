import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
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
  const iconColor = useThemeColor({}, 'tint');

  const addItemHandler = () => {
    if (title.trim() !== '') {
      addItem(title.trim());
      setTitle('');
    } else {
      setError('Title is required');
    }
  };

  const onChangeText = (text: string) => {
    setTitle(text);
    if (error) setError(null);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: textColor, borderColor: error ? 'red' : '#ccc' }]}
          value={title}
          onChangeText={onChangeText}
          onSubmitEditing={addItemHandler}
          placeholder="Add new item..."
          placeholderTextColor="#888"
          editable={!disabled}
          accessibilityLabel="New item title"
        />
        <TouchableOpacity
          onPress={addItemHandler}
          disabled={disabled}
          style={styles.addButton}
          accessibilityLabel="Add item"
          accessibilityRole="button"
        >
          <Ionicons name="add-circle" size={32} color={disabled ? '#ccc' : iconColor} />
        </TouchableOpacity>
      </ThemedView>
      {error ? <ThemedText style={styles.errorText}>{error}</ThemedText> : null}
    </ThemedView>
  );
});

AddItemForm.displayName = 'AddItemForm';

const styles = StyleSheet.create({
  container: { marginVertical: 8 },
  inputContainer: { flexDirection: 'row', alignItems: 'center' },
  input: { flex: 1, borderWidth: 1, borderRadius: 6, paddingHorizontal: 12, paddingVertical: 8, fontSize: 16 },
  addButton: { padding: 6, minWidth: 44, minHeight: 44, justifyContent: 'center', alignItems: 'center' },
  errorText: { color: 'red', fontSize: 12, marginTop: 4 },
});
