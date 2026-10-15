import React from 'react';
import render from 'react-test-renderer';
import { AddItemForm } from '../AddItemForm';

describe('AddItemForm', () => {
    it('renders correctly with default props', () => {
        const tree = render.create(<AddItemForm addItem={jest.fn()} />).toJSON();
        expect(tree).toBeDefined();
    });
});
