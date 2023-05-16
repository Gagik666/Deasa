import {StyleSheet} from 'react-native';
import {COLOR} from '../../../assets/colors/Colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    
  },
  LinearGradient: {
    flex: 1,
    padding: 20,
    justifyContent: 'space-between',
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  

  txtPoint: {
    fontSize:26,
    color: COLOR.white,
    fontWeight: '700',
  },
  viewPoint: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  viewFlag: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 10
  },
  viewBottom: {
    alignItems: 'center',
    paddingBottom: 16
  },
  txtName: {
    fontSize: 22,
    color: COLOR.white,
    fontWeight: '700',
    marginBottom: 8
  }
 
  
});
