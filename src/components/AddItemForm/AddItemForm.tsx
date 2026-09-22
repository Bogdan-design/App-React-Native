import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
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
  const iconColor = useThemeColor({}, 'icon');

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
      <View style={styles.inputContainer}>
        <TextInput
          value={title}
          onChangeText={onChangeTextHandler}
          onSubmitEditing={addItemHandler}
          editable={!disabled}
          placeholder="Title"
          placeholderTextColor={iconColor}
          style={[
            styles.input,
            { color: textColor, borderColor: error ? 'red' : iconColor },
          ]}
        />
        <TouchableOpacity
          onPress={addItemHandler}
          disabled={disabled}
          accessibilityLabel="Add item"
          accessibilityRole="button"
          style={styles.addButton}
        >
          <Ionicons
            name="add-circle-outline"
            size={28}
            color={disabled ? iconColor : tintColor}
          />
        </TouchableOpacity>
      </View>
      {error && <ThemedText style={styles.errorText}>{error}</ThemedText>}
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
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderRadius: 6,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    marginRight: 8,
  },
  addButton: {
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
