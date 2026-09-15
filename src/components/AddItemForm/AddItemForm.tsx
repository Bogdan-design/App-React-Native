import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
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
  const borderColor = error ? 'red' : '#ccc';

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
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: textColor, borderColor }]}
          value={title}
          onChangeText={onChangeTextHandler}
          onSubmitEditing={addItemHandler}
          placeholder="Enter title..."
          placeholderTextColor="#888"
          editable={!disabled}
          accessibilityLabel="Item title input"
        />
        <TouchableOpacity
          style={[styles.button, disabled && styles.buttonDisabled]}
          onPress={addItemHandler}
          disabled={disabled}
          accessibilityLabel="Add item"
          accessibilityRole="button"
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <Ionicons name="add-circle" size={28} color={disabled ? '#888' : iconColor} />
        </TouchableOpacity>
      </View>
      {error && <ThemedText style={styles.errorText}>{error}</ThemedText>}
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
    height: 44,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
  },
  button: {
    padding: 4,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 44,
    minHeight: 44,
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});
