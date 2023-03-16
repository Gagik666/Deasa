import { Dimensions } from 'react-native';
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
    paddingTop: Platform.OS === 'android' ? 50 : 0,
  },
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    columnGap: 16
  },
  txtTitle: {
    textAlign: 'center',
    fontSize: 46,
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
