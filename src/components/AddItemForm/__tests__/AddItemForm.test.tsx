import React from 'react';
import renderer, { act } from 'react-test-renderer';
import { AddItemForm } from '../AddItemForm';
import { TextInput, TouchableOpacity } from 'react-native';

describe('AddItemForm', () => {
    it('renders correctly', () => {
        const addItemMock = jest.fn();
        const tree = renderer.create(<AddItemForm addItem={addItemMock} />).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('shows error when submitting empty input', () => {
        const addItemMock = jest.fn();
        const component = renderer.create(<AddItemForm addItem={addItemMock} />);
        const button = component.root.findByType(TouchableOpacity);

        act(() => {
            button.props.onPress();
        });

        expect(addItemMock).not.toHaveBeenCalled();
    });

    it('calls addItem callback and clears input when title is entered', () => {
        const addItemMock = jest.fn();
        const component = renderer.create(<AddItemForm addItem={addItemMock} />);
        const input = component.root.findByType(TextInput);
        const button = component.root.findByType(TouchableOpacity);

        act(() => {
            input.props.onChangeText('New Task');
        });

        act(() => {
            button.props.onPress();
        });

        expect(addItemMock).toHaveBeenCalledWith('New Task');
    });
});
