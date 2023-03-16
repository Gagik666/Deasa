import {Dimensions, StyleSheet} from 'react-native';
import {COLOR} from '../../../assets/colors/Colors';

export const styles = StyleSheet.create({
    viewRadio: {
        borderRadius: 100,
        borderWidth: 1,
        borderColor: COLOR.white,
        width: 15,
        height: 15,
        justifyContent: 'center',
        alignItems: 'center'
      },
      btn: {
        flexDirection: 'row',
        columnGap: 20,
        alignItems: 'center'
      },
      viewSubRadio: {
        width: '60%',
        height: '60%',
        borderRadius: 100
      },
      txtTitle: {
        color: COLOR.white,
        fontSize: 18,
        fontWeight: 'bold'
      },
});
