import React, { useState, useCallback } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';
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
  const borderColor = useThemeColor({ light: '#ccc', dark: '#444' }, 'text');
  const tintColor = useThemeColor({}, 'tint');

  const addItemHandler = useCallback(() => {
    if (title.trim() !== '') {
      addItem(title.trim());
      setTitle('');
      setError(null);
    } else {
      setError('Title is required');
    }
  }, [addItem, title]);

  const onChangeTextHandler = useCallback((text: string) => {
    setTitle(text);
    if (error !== null) setError(null);
  }, [error]);

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, { color: textColor, borderColor: error ? '#ff4d4f' : borderColor }]}
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
          style={[styles.button, { backgroundColor: tintColor, opacity: disabled ? 0.5 : 1 }]}
          accessibilityLabel="Add item"
          accessibilityRole="button"
          accessibilityState={{ disabled }}
        >
          <Ionicons name="add" size={24} color="#ffffff" />
        </TouchableOpacity>
      </View>
      {error ? <ThemedText style={styles.errorText}>{error}</ThemedText> : null}
    </View>
  );
});

AddItemForm.displayName = 'AddItemForm';

const styles = StyleSheet.create({
  container: { marginVertical: 8 },
  inputContainer: { flexDirection: 'row', alignItems: 'center' },
  input: { flex: 1, borderWidth: 1, borderRadius: 6, paddingHorizontal: 12, paddingVertical: 8, fontSize: 16, height: 44, marginRight: 8 },
  button: { width: 44, height: 44, borderRadius: 6, justifyContent: 'center', alignItems: 'center' },
  errorText: { color: '#ff4d4f', fontSize: 12, marginTop: 4, marginLeft: 4 },
});
