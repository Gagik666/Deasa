import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
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
 
const HomeScreen = ({navigation}) => {
  const teams = useSelector(s => s.deAsa.teams);
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

  return (
    <SafeAreaView style={styles.wrapper}>
      <LinearGradient
        colors={['#FF4359', '#AA1439', '#68192F', '#53192A', '#000000']}
        style={styles.LinearGradient}>
        <View>
          <View style={styles.viewTop}>
            <TouchableOpacity onPress={() => {navigation.navigate('Settings')}}>
              <SettingsSVGIcone />
            </TouchableOpacity>
          </View>
          <Text style={styles.txtTitle}>Deasa</Text>
        </View>
        <BtnPlay click={play} />
      </LinearGradient>
    </SafeAreaView>
  );
};

export default HomeScreen;
