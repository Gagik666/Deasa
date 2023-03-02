import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Style'

export const BtnCircle = ({flag, click}) => {
  return (
    <TouchableOpacity style = {styles.btn} onPress = {click}>
      <Text style = {styles.btnText}>{flag}</Text>
    </TouchableOpacity>
  )
}
