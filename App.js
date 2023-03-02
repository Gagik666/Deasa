import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import HomeScreen from './src/ui/Home/HomeScreen';
import {Provider} from 'react-redux';
import {store} from './redux/store/Store';
import { SelectTeams } from './src/ui/selectTeams/SelectTeams';
import { DeAsaGame } from './src/ui/deAsaGame/DeAsaGame';
import { Navigita } from './navigation/Navigate';

export const App = () => {
  return (
    <>
      <Provider store={store}>
        <Navigita />
      </Provider>
    </>
  );
};
