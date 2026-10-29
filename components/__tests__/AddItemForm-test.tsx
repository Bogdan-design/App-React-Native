import * as React from 'react';
import renderer from 'react-test-renderer';
import { AddItemForm } from '@/src/components/AddItemForm/AddItemForm';

describe('AddItemForm', () => {
    it('renders correctly in default state', () => {
        const mockAddItem = jest.fn();
        const tree = renderer.create(<AddItemForm addItem={mockAddItem} />).toJSON();
        expect(tree).toBeDefined();
    });

    it('renders correctly when disabled', () => {
        const mockAddItem = jest.fn();
        const tree = renderer.create(<AddItemForm addItem={mockAddItem} disabled={true} />).toJSON();
        expect(tree).toBeDefined();
    });
});
