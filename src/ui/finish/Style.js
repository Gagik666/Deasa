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
    flex: 1.5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewBottom: {
    flex: 1,
    justifyContent: 'space-between',
    padding: 24
  },
  viewFlatList: {
    height: 100
  },
  txtTitle: {
    fontSize: 32,
    color: COLOR.white,
    fontWeight: '700',
    marginBottom: 8
  },
  
});
