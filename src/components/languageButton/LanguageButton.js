import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import { styles } from './Style';

export const LanguageButton = ({title, press, active}) => {
  return (
    <TouchableOpacity style={styles.btn} onPress = {() => press()}>
      <View style={styles.viewRadio}>
        <View style={[styles.viewSubRadio, { backgroundColor: active ? "#fff": null}]}></View>
      </View>
      <Text style={styles.txtTitle}>{title}</Text>
    </TouchableOpacity>
  );
};

