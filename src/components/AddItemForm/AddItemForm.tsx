import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

type AddItemFormProps = { addItem: (title: string) => void; disabled?: boolean };

export const AddItemForm = React.memo(({ addItem, disabled = false }: AddItemFormProps) => {
  const [title, setTitle] = useState('');
  const [error, setError] = useState<string | null>(null);
  const textColor = useThemeColor({}, 'text');

  const addItemHandler = () => {
    if (title.trim()) {
      addItem(title.trim());
      setTitle('');
    } else {
      setError('Title is required');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedView style={styles.row}>
        <TextInput
          style={[styles.input, { color: textColor, borderColor: error ? '#ff4d4f' : '#ccc' }]}
          value={title}
          onChangeText={(t) => { if (error) setError(null); setTitle(t); }}
          onSubmitEditing={addItemHandler}
          placeholder="Add item..."
          placeholderTextColor="#888"
          editable={!disabled}
          accessibilityLabel="Title for new item"
        />
        <TouchableOpacity onPress={addItemHandler} disabled={disabled} accessibilityLabel="Add item" accessibilityRole="button" style={styles.button}>
          <Ionicons name="add-circle" size={32} color={disabled ? '#ccc' : '#2f95dc'} />
        </TouchableOpacity>
      </ThemedView>
      {error && <ThemedText style={styles.errorText}>{error}</ThemedText>}
    </ThemedView>
  );
});

AddItemForm.displayName = 'AddItemForm';

const styles = StyleSheet.create({
  container: { marginVertical: 8 },
  row: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  input: { flex: 1, borderWidth: 1, borderRadius: 6, padding: 8, fontSize: 16 },
  button: { padding: 4, minWidth: 44, minHeight: 44, justifyContent: 'center', alignItems: 'center' },
  errorText: { color: '#ff4d4f', fontSize: 12, marginTop: 4 },
});
