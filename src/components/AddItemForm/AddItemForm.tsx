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

export const AddItemForm = React.memo(function AddItemForm({
  addItem,
  disabled = false,
}: AddItemFormPropsType) {
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
          style={[styles.input, { color: textColor }]}
          value={title}
          onChangeText={onChangeTextHandler}
          onSubmitEditing={addItemHandler}
          placeholder="Enter title..."
          placeholderTextColor="#888"
          editable={!disabled}
          accessibilityLabel="Item title input"
        />
        <TouchableOpacity
          onPress={addItemHandler}
          disabled={disabled}
          accessibilityLabel="Add item"
          accessibilityRole="button"
          style={styles.addButton}
        >
          <Ionicons name="add-circle" size={28} color={disabled ? '#ccc' : tintColor} />
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
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 6,
    padding: 8,
    fontSize: 16,
  },
  addButton: {
    padding: 4,
    minWidth: 44,
    minHeight: 44,
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});
