import {Dimensions, StyleSheet} from 'react-native';
import {COLOR} from '../../../assets/colors/Colors';

export const styles = StyleSheet.create({
  wrapper: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginTop: 10,
    paddingHorizontal: 10
  },

  txtTeamName: {
    fontSize: 22,
    color: COLOR.white,
    fontWeight: '700',
  },

  txtPoint: {
    fontSize: 28,
    color: COLOR.white,
    fontWeight: '700',
  },
});
