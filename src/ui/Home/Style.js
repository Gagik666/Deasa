import {Dimensions, StyleSheet} from 'react-native';
import {COLOR} from '../../../assets/colors/Colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  LinearGradient: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
  },
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  txtTitle: {
    textAlign: 'center',
    fontSize: 42,
    color: COLOR.white,
    marginTop: '60%',
    fontFamily: 'HennyPenny-Regular'
  },
  
});
