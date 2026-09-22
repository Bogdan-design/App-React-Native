import * as React from 'react';
import renderer from 'react-test-renderer';
import { AddItemForm } from '@/src/components/AddItemForm/AddItemForm';

it(`AddItemForm renders correctly`, () => {
  const tree = renderer.create(<AddItemForm addItem={() => {}} />).toJSON();
  expect(tree).toMatchSnapshot();
});
