import {Dimensions, StyleSheet} from 'react-native';
import {COLOR} from '../../../assets/colors/Colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    
  },
  LinearGradient: {
    flex: 1,
    padding: 20,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

  viewNav: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    columnGap: 10,
  },
  txtSettings: {
    fontSize: 24,
    color: COLOR.white,
    fontWeight: '600',
  },
  viewTime: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
    marginTop: 30
  },
  viewSlider: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
  txtTimeTitle: {
    color: COLOR.white,
    fontSize: 22,
    fontWeight: 'bold'
  },
  txtTimeSubTitle: {
    color: COLOR.whiteGray,
    fontSize: 18,
    fontWeight: '300'
  }
});
