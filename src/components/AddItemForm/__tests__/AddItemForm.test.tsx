import * as React from 'react';
import renderer from 'react-test-renderer';
import { AddItemForm } from '../AddItemForm';

describe('AddItemForm Component', () => {
  it('renders correctly with accessibility props', () => {
    const handleAddItem = jest.fn();
    const tree = renderer.create(<AddItemForm addItem={handleAddItem} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
