import {StyleSheet, Dimensions} from 'react-native';
import {COLOR} from '../../../assets/colors/Colors';
export const styles = StyleSheet.create({
  btnActiveItem: {
    marginVertical: Dimensions.get('window').width * 0.02,
    borderColor: COLOR.yellow,
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.8,
    paddingVertical:Dimensions.get('window').width * 0.04,
    borderRadius: 50,
  },
  txtActiveItem: {
    color: COLOR.white,
    fontSize: 18,
    textAlign: 'center',
  },

  btnInActiveItem: {
    marginVertical: Dimensions.get('window').width * 0.02,
    borderColor: 'gray',
    borderWidth: 1,
    width: Dimensions.get('window').width * 0.8,
    paddingVertical:Dimensions.get('window').width * 0.04,
    borderRadius: 50,
  },
  txtInActiveItem: {
    color: 'gray',
    fontSize: 18,
    textAlign: 'center',
  },
});
