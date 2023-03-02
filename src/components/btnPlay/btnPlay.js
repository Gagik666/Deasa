import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Style';

export const BtnPlay = ({click, title = "Play"}) => {
  return (
    <TouchableOpacity style={styles.btnPlay} onPress = {click}>
      <Text style={styles.txtPlay}>{title}</Text>
    </TouchableOpacity>
  );
};
