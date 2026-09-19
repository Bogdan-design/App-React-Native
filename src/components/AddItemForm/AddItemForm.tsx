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
          style={[styles.input, { color: textColor, borderColor: error ? '#ff4d4f' : '#ccc' }]}
          value={title}
          onChangeText={onChangeTextHandler}
          onSubmitEditing={addItemHandler}
          placeholder="Type a title..."
          placeholderTextColor="#888"
          editable={!disabled}
          accessibilityLabel="Item title input"
        />
        <TouchableOpacity
          style={[styles.addButton, disabled && styles.disabledButton]}
          onPress={addItemHandler}
          disabled={disabled}
          accessibilityLabel="Add item"
          accessibilityRole="button"
        >
          <Ionicons name="add-circle" size={32} color={disabled ? '#888' : iconColor} />
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
    height: 44,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  addButton: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 44,
    minHeight: 44,
  },
  disabledButton: {
    opacity: 0.5,
  },
  errorText: {
    color: '#ff4d4f',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});
