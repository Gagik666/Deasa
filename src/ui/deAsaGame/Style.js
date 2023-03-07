import {Dimensions, StyleSheet} from 'react-native';
import {COLOR} from '../../../assets/colors/Colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    
  },
  LinearGradient: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    paddingBottom: 30,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 8,
    paddingEnd: 16,
  },
  txtTitle: {
    fontSize: 42,
    color: COLOR.white,
    fontWeight: '700',
    textAlign: 'center',
  },
  viewList: {
    height: Dimensions.get('window').height * 0.7,
    alignItems: 'center',
    marginTop: 50
  },
  txtPoints: {
    color: COLOR.white,
    fontSize: 24,
    textAlign: 'center',
  },
});
