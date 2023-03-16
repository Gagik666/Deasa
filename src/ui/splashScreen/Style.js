import { StyleSheet, Dimensions} from 'react-native';
import {COLOR} from '../../../assets/colors/Colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  LinearGradient: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtTitle: {
    textAlign: 'center',
    fontSize: 42,
    color: COLOR.white,
    marginTop: '60%',
    fontFamily: 'Asset-Regular'
  },
  viewImg: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%' 
  },
  img: {
    width: Dimensions.get('window').width * .9,
    height: Dimensions.get('window').width * .9,
    resizeMode: "contain"
  }
});
