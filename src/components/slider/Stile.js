import { StyleSheet} from 'react-native';
import {COLOR} from '../../../assets/colors/Colors';

export const styles = StyleSheet.create({
  viewSlider: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
  txtTimeTitle: {
    color: COLOR.white,
    fontSize: 18,
    fontWeight: 'bold'
  },
  txtTimeSubTitle: {
    color: COLOR.whiteGray,
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 10,
    paddingStart: 16,
    width: '60%'
  }
});
