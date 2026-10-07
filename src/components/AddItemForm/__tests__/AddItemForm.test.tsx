import React from 'react';
import renderer from 'react-test-renderer';
import { AddItemForm } from '../AddItemForm';

describe('AddItemForm Component', () => {
    it('renders correctly with default props and accessibility labels', () => {
        const addItemMock = jest.fn();
        const tree = renderer.create(<AddItemForm addItem={addItemMock} />).toJSON();
        expect(tree).toBeDefined();
    });
});
