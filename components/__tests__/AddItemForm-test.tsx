import React from 'react';
import renderer from 'react-test-renderer';
import { AddItemForm } from '../../src/components/AddItemForm/AddItemForm';

describe('AddItemForm', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<AddItemForm addItem={() => {}} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
