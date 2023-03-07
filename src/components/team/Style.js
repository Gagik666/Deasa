import {Dimensions, StyleSheet} from 'react-native';
import {COLOR} from '../../../assets/colors/Colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    marginBottom: 5,
  },
  viewTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  txtTitle: {
    color: COLOR.white,
    fontSize: 28,
  },
  btnAdd: {
    marginStart: 20,
    marginTop: 10,
  },
  txtAdd: {
    color: '#CFCFCF',
    fontSize: 22,
  },
  viewModal: {
    height: Dimensions.get('window').height * 0.2,
    width: Dimensions.get('window').width * 0.7,
    backgroundColor: '#53192A',
    borderRadius: 20,
    padding: 16,
  },
  txtModalTitle: {
    fontSize: 22,
    color: COLOR.white,
    fontWeight: 'bold'
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
    fontSize: 18
  },
  viewModalButton: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-end',
    columnGap: 40,
    marginTop: 10
  },
  txtBtnMoadal: {
    fontSize: 22,
    color: COLOR.white,
    fontWeight: '100'
  }

});
