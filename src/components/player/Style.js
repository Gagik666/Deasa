import {Dimensions, StyleSheet} from 'react-native';
import {COLOR} from '../../../assets/colors/Colors';

export const styles = StyleSheet.create({
  wrapper: {
    marginStart: 10
  },
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  txtTitle: {
    color: COLOR.white,
    fontSize: 24,
  },
});
