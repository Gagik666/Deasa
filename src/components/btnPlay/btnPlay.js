import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Style';
import { Strings } from '../../../assets/strings/Strings';

export const BtnPlay = ({click, title = Strings.play}) => {
  return (
    <TouchableOpacity style={styles.btnPlay} onPress = {click}>
      <Text style={styles.txtPlay}>{title}</Text>
    </TouchableOpacity>
  );
};
