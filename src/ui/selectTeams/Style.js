import {Dimensions, Platform, StyleSheet} from 'react-native';
import {COLOR} from '../../../assets/colors/Colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    
  },
  LinearGradient: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: Platform.OS === 'android' ? 30 : 0,
  },
  txtTitle: {
    fontSize: 42,
    color: COLOR.white,
    fontWeight: '700',
  },
  viewTop: {
    flex: 6,
    paddingBottom: 50,
  },
  btnPlay: {
    backgroundColor: 'rgba(104, 25, 47, 0.92)',
    borderRadius: 84,
    width: Dimensions.get('window').width * 0.7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
    alignSelf: 'center',
  },
  txtPlay: {
    fontWeight: '600',
    fontSize: 26,
    lineHeight: 35,
    color: COLOR.white,
  },
  txtAdd: {
    color: '#CFCFCF',
    fontSize: 22,
  },
  viewBottom: {
    flex: 4.5,
    rowGap: 20,
  },
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  txtSettings: {
    textAlign: 'center',
    lineHeight: 24,
    color: COLOR.white,
  },
  viewTxt: {
    width: 200,
  },
  viewModal: {
    height: 160,
    width: Dimensions.get('window').width * 0.7,
    backgroundColor: '#53192A',
    borderRadius: 20,
    padding: 16,
  },
  txtModalTitle: {
    fontSize: 22,
    color: COLOR.white,
    fontWeight: 'bold',
  },
  txtInputModal: {
    borderRadius: 8,
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderColor: COLOR.white,
    borderWidth: 1,
    marginTop: 8,
    color: COLOR.white,
    fontSize: 18,
  },
  viewModalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end',
    columnGap: 40,
    marginTop: 10,
  },
  txtBtnMoadal: {
    fontSize: 22,
    color: COLOR.white,
    fontWeight: '100',
  },
});
