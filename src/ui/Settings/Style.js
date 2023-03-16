import {Dimensions, StyleSheet} from 'react-native';
import {COLOR} from '../../../assets/colors/Colors';

export const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
  },
  LinearGradient: {
    flex: 1,
    padding: 20,
    paddingTop: Platform.OS === 'android' ? 50 : 0,
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
    marginTop: 30,
  },
  viewSlider: {
    flexDirection: 'row',
    alignItems: 'center',
    columnGap: 20,
  },
  txtTimeTitle: {
    color: COLOR.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  txtTimeSubTitle: {
    color: COLOR.whiteGray,
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 10,
    paddingStart: 16,
    width: '60%',
  },
  txtLanguageSubTitle: {
    color: COLOR.whiteGray,
    fontSize: 14,
    fontWeight: '300',
    paddingVertical: 10,
    paddingStart: 16,
  },
  viewModal: {
    height: 200,
    width: Dimensions.get('window').width * 0.7,
    backgroundColor: '#53192A',
    borderRadius: 20,
    padding: 16,
  },
  txtModalTitle: {
    fontSize: 22,
    color: COLOR.white,
    fontWeight: 'bold',
    marginBottom: 10
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
    marginTop: 20,
  },
  txtBtnMoadal: {
    fontSize: 22,
    color: COLOR.white,
    fontWeight: '100',
  },
});
