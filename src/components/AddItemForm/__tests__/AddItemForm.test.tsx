import * as React from 'react';
import renderer, { act } from 'react-test-renderer';
import { AddItemForm } from '../AddItemForm';
import { TextInput, TouchableOpacity } from 'react-native';

describe('AddItemForm', () => {
  it('renders correctly with accessibility attributes', () => {
    const addItemMock = jest.fn();
    const component = renderer.create(<AddItemForm addItem={addItemMock} />);
    const root = component.root;

    const input = root.findByType(TextInput);
    expect(input.props.accessibilityLabel).toBe('Title input');
    expect(input.props.placeholder).toBe('Title');

    const button = root.findByType(TouchableOpacity);
    expect(button.props.accessibilityLabel).toBe('Add item');
    expect(button.props.accessibilityRole).toBe('button');
  });

  it('calls addItem when button is pressed with valid text', () => {
    const addItemMock = jest.fn();
    const component = renderer.create(<AddItemForm addItem={addItemMock} />);
    const root = component.root;

    const input = root.findByType(TextInput);
    act(() => {
      input.props.onChangeText('New Task');
    });

    const button = root.findByType(TouchableOpacity);
    act(() => {
      button.props.onPress();
    });

    expect(addItemMock).toHaveBeenCalledWith('New Task');
  });

  it('shows error message when submitted with empty title', () => {
    const addItemMock = jest.fn();
    const component = renderer.create(<AddItemForm addItem={addItemMock} />);
    const root = component.root;

    const button = root.findByType(TouchableOpacity);
    act(() => {
      button.props.onPress();
    });

    expect(addItemMock).not.toHaveBeenCalled();
  });
});
