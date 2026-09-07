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
  const iconColor = useThemeColor({}, 'icon');
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

  const onChangeText = (text: string) => {
    setTitle(text);
    if (error !== null) {
      setError(null);
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: textColor, borderColor: error ? 'red' : iconColor }]}
          value={title}
          onChangeText={onChangeText}
          onSubmitEditing={addItemHandler}
          placeholder="Enter title..."
          placeholderTextColor={iconColor}
          editable={!disabled}
          accessibilityLabel="Item title input"
        />
        <TouchableOpacity
          style={styles.addButton}
          onPress={addItemHandler}
          disabled={disabled}
          accessibilityRole="button"
          accessibilityLabel="Add item"
          accessibilityHint="Adds a new item with the entered title"
        >
          <Ionicons name="add-circle" size={28} color={disabled ? iconColor : tintColor} />
        </TouchableOpacity>
      </ThemedView>
      {error ? <ThemedText style={styles.errorText}>{error}</ThemedText> : null}
    </ThemedView>
  );
});

AddItemForm.displayName = 'AddItemForm';

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  addButton: {
    padding: 8,
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
