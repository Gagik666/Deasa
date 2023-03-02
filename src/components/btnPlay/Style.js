import {StyleSheet, Dimensions} from 'react-native';
import { COLOR } from '../../../assets/colors/Colors';

export const styles = StyleSheet.create({
  btnPlay: {
    backgroundColor: 'rgba(104, 25, 47, 0.92)',
    borderRadius: 84,
    width: Dimensions.get('window').width * .7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    alignSelf: 'center'
  },
  txtPlay: {
    fontWeight: '600',
    fontSize: 26,
    lineHeight: 35,
    color: COLOR.white,
  },
    
});
