import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store';
import { MainApp } from './MainApp';

export default function Index() {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
}
