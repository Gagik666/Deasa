import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './Style'
import { DeleteXSVGIcone } from '../../../assets/icones/DeleteXSVGIcone'

export const DeleteX = ({size, click}) => {
  return (
    <TouchableOpacity style = {styles.btnX} onPress = {click}>
     <DeleteXSVGIcone size={size} />
    </TouchableOpacity>
  )
}
