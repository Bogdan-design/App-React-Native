import * as React from 'react';
import renderer from 'react-test-renderer';
import { AddItemForm } from '@/src/components/AddItemForm/AddItemForm';

it('renders AddItemForm correctly', () => {
    const tree = renderer.create(<AddItemForm addItem={() => {}} />).toJSON();
    expect(tree).toBeDefined();
});
