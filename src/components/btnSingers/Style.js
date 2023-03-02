import {StyleSheet, Dimensions} from 'react-native';
import {COLOR} from '../../../assets/colors/Colors';
export const styles = StyleSheet.create({
  btnActiveItem: {
    marginVertical: 10,
    borderColor: COLOR.yellow,
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.8,
    paddingVertical: 10,
    borderRadius: 50,
  },
  txtActiveItem: {
    color: COLOR.white,
    fontSize: 24,
    textAlign: 'center',
  },

  btnInActiveItem: {
    marginVertical: 10,
    borderColor: 'gray',
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.8,
    paddingVertical: 10,
    borderRadius: 50,
  },
  txtInActiveItem: {
    color: 'gray',
    fontSize: 24,
    textAlign: 'center',
  },
});
