import {
  View,
  Image,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React from 'react';
import {styles} from './Style';
import LinearGradient from 'react-native-linear-gradient';
import {SettingsSVGIcone} from '../../../assets/icones/SettingsSVGIcone';
import {BtnPlay} from '../../components/btnPlay/btnPlay';
import {useDispatch, useSelector} from 'react-redux';
import {
  editIndex,
  editSingers,
  resetPoint,
  resetQueueOfPlayers,
  resetQueueOfTeams,
  resetTempPoint,
} from '../../../redux/reducers/raeducer';
import {ShereSVGIcone} from '../../../assets/icones/ShereSVGIcone';
import Share from 'react-native-share';
import {strings} from '../../../localization';
const HomeScreen = ({navigation}) => {
  const teams = useSelector(s => s.deAsa.teams);
  const appUrl = useSelector(s => s.deAsa.appUrl);
  const dispatch = useDispatch();
  const play = () => {
    dispatch(resetQueueOfPlayers());
    dispatch(resetQueueOfTeams());
    dispatch(resetTempPoint());
    dispatch(editIndex(0));
    dispatch(editSingers([]));
    teams.forEach((el, index) => {
      dispatch(resetPoint(index + 1));
    });
    navigation.navigate('SelectTeams');
  };

  const share = () => {
    const options = {
      message: strings.shareMessage,
      url: appUrl,
    };

    Share.open(options)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        err && console.log(err);
      });
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar
        barStyle="light-content"
        backgroundColor="#FF4359"
        translucent
      />
      <LinearGradient
        colors={['#FF4359', '#AA1439', '#68192F', '#53192A', '#000000']}
        style={styles.LinearGradient}>
          <View style={styles.viewTop}>
            <TouchableOpacity
              onPress={() => {
                share();
              }}>
              <ShereSVGIcone />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('Settings');
              }}>
              <SettingsSVGIcone />
            </TouchableOpacity>
          </View>
          <View style={styles.viewImg}>
            <Image
              source={require('../../../assets/images/logoDeasa_512-512.png')}
              style={styles.img}
            />
          </View>
        <BtnPlay click={play} title="PLAY" />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;
