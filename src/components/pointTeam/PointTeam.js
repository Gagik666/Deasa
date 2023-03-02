import { View, Text } from 'react-native'
import React from 'react'
import { styles } from './Style'

export const PointTeam = ({teamName, point}) => {
  return (
    <View style = {styles.wrapper}>
      <Text style = {styles.txtTeamName}>{teamName}</Text>
      <Text style = {styles.txtPoint}>{point}</Text>
    </View>
  )
}
