import { View, Text, Dimensions} from 'react-native'
import React from 'react'
import Slider from 'react-native-slider';
import { styles } from './Stile';
import { COLOR } from '../../../assets/colors/Colors';
export const CusteSlider = ({title, subtitle,val, setVal}) => {
  return (
    <View>
    <Text style = {styles.txtTimeTitle}>{title}</Text>
    <Text style = {styles.txtTimeSubTitle}>{subtitle}</Text>
    <View style={styles.viewSlider}>
      <View style = {{width: Dimensions.get('window').width * .6}}>
        <Slider
          value={val}
          onValueChange={value => setVal(Math.floor(value))}
          minimumValue={30}
          maximumValue={80}
          thumbTintColor= {COLOR.yellow}
          minimumTrackTintColor = {COLOR.white}
          maximumTrackTintColor = {COLOR.white}
          trackStyle = {{height: 1}}
        />
      </View>
      <Text style = {styles.txtTimeSubTitle}>{val}</Text>
    </View>
  </View>
  )
}