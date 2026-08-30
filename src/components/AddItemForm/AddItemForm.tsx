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

export const AddItemForm = React.memo(function AddItemForm({
  addItem,
  disabled = false,
}: AddItemFormPropsType) {
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | null>(null);

  const textColor = useThemeColor({}, 'text');
  const borderColor = useThemeColor({}, 'border');
  const iconColor = useThemeColor({}, 'tint');

  const addItemHandler = () => {
    if (title.trim() !== '') {
      addItem(title.trim());
      setTitle('');
    } else {
      setError('Title is required');
    }
  };

  const onChangeTextHandler = (text: string) => {
    if (error !== null) {
      setError(null);
    }
    setTitle(text);
  };

  return (
    <ThemedView>
      <ThemedView style={styles.inputContainer}>
        <TextInput
          style={[
            styles.input,
            { color: textColor, borderColor: error ? '#ff4d4f' : borderColor },
          ]}
          value={title}
          onChangeText={onChangeTextHandler}
          onSubmitEditing={addItemHandler}
          placeholder="Enter title..."
          placeholderTextColor="#888"
          editable={!disabled}
          accessibilityLabel="Item title input"
        />
        <TouchableOpacity
          style={[styles.addButton, disabled && styles.disabledButton]}
          onPress={addItemHandler}
          disabled={disabled}
          accessibilityRole="button"
          accessibilityLabel="Add item"
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons name="add-circle" size={32} color={disabled ? '#888' : iconColor} />
        </TouchableOpacity>
      </ThemedView>
      {error && <ThemedText style={styles.errorText}>{error}</ThemedText>}
    </ThemedView>
  );
});

AddItemForm.displayName = 'AddItemForm';

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
  },
  addButton: {
    padding: 4,
    minWidth: 44,
    minHeight: 44,
    alignItems: 'center',
    justifyContent: 'center',
  },
  disabledButton: {
    opacity: 0.5,
  },
  errorText: {
    color: '#ff4d4f',
    fontSize: 12,
    marginTop: 4,
  },
});
