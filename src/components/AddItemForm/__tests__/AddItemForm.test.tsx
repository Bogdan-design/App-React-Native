import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { AddItemForm } from '../AddItemForm';
import { TextInput, TouchableOpacity } from 'react-native';

describe('AddItemForm', () => {
    it('renders correctly with default props', () => {
        const addItemMock = jest.fn();
        const tree = renderer.create(<AddItemForm addItem={addItemMock} />).toJSON();
        expect(tree).toBeDefined();
    });

    it('calls addItem callback when valid title is submitted', () => {
        const addItemMock = jest.fn();
        const component = renderer.create(<AddItemForm addItem={addItemMock} />);
        const instance = component.root;

        const input = instance.findByType(TextInput);
        act(() => {
            input.props.onChangeText('Test Item');
        });

        const button = instance.findByType(TouchableOpacity);
        act(() => {
            button.props.onPress();
        });

        expect(addItemMock).toHaveBeenCalledWith('Test Item');
    });

    it('shows error when submitting empty title', () => {
        const addItemMock = jest.fn();
        const component = renderer.create(<AddItemForm addItem={addItemMock} />);
        const instance = component.root;

        const button = instance.findByType(TouchableOpacity);
        act(() => {
            button.props.onPress();
        });

        expect(addItemMock).not.toHaveBeenCalled();
    });
});
