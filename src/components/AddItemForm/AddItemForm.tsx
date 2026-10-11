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
  const tintColor = useThemeColor({}, 'tint');
  const iconColor = useThemeColor({}, 'icon');

  const addItemHandler = () => {
    if (title.trim() !== '') {
      addItem(title.trim());
      setTitle('');
      if (error) setError(null);
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
          style={[
            styles.input,
            { color: textColor, borderColor: error ? '#ff3b30' : iconColor },
          ]}
          value={title}
          onChangeText={onChangeTextHandler}
          onSubmitEditing={addItemHandler}
          placeholder="Add a new item..."
          placeholderTextColor={iconColor}
          editable={!disabled}
          accessibilityLabel="Item title input"
        />
        <TouchableOpacity
          style={[styles.button, { backgroundColor: disabled ? '#ccc' : tintColor }]}
          onPress={addItemHandler}
          disabled={disabled}
          accessibilityRole="button"
          accessibilityLabel="Add item"
          accessibilityHint="Adds a new item to the list"
          activeOpacity={0.7}
        >
          <Ionicons name="add" size={24} color="#ffffff" />
        </TouchableOpacity>
      </ThemedView>
      {error ? <ThemedText style={styles.errorText}>{error}</ThemedText> : null}
    </ThemedView>
  );
});

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
  button: {
    width: 44,
    height: 44,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: '#ff3b30',
    fontSize: 12,
    marginTop: 4,
    marginLeft: 4,
  },
});
