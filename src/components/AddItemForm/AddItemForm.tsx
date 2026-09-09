import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
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
      <ThemedView style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: textColor }, error ? styles.inputError : null]}
          value={title}
          onChangeText={onChangeTextHandler}
          onSubmitEditing={addItemHandler}
          placeholder="Title"
          placeholderTextColor="#888"
          editable={!disabled}
          accessibilityLabel="Title for new item"
          accessibilityHint="Enter title for a new task or todolist"
        />
        <TouchableOpacity
          onPress={addItemHandler}
          disabled={disabled}
          accessibilityRole="button"
          accessibilityLabel="Add item"
          accessibilityHint="Tap to add item with entered title"
          style={styles.addButton}
        >
          <Ionicons name="add-circle-outline" size={28} color={disabled ? '#ccc' : iconColor} />
        </TouchableOpacity>
      </ThemedView>
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
    gap: 8,
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  inputError: {
    borderColor: '#ff4d4f',
  },
  addButton: {
    padding: 6,
    minWidth: 44,
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: '#ff4d4f',
    fontSize: 12,
    marginTop: 4,
  },
});
