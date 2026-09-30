import React from 'react';
import ReactTestRenderer from 'react-test-renderer';
import { AddItemForm } from './AddItemForm';

describe('AddItemForm', () => {
    it('renders correctly', () => {
        const addItemMock = jest.fn();
        const tree = ReactTestRenderer.create(<AddItemForm addItem={addItemMock} />).toJSON();
        expect(tree).toBeDefined();
    });
});
