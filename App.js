import React from 'react';
import {Provider} from 'react-redux';
import {store} from './redux/store/Store';
import {Navigita} from './navigation/Navigate';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navigita />
      </Provider>
    </>
  );
};
