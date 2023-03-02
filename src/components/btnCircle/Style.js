import {StyleSheet} from 'react-native';
import { COLOR } from '../../../assets/colors/Colors';

export const styles = StyleSheet.create({
  btn: {
    padding: 10,
    backgroundColor: 'rgba(104, 25, 47, 0.92)',
    borderRadius: 100,
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center'

  },
  btnText: {
    fontSize: 22,
    color: COLOR.white,
    fontWeight: '700'
  }
});
