import {View, Text, SafeAreaView, FlatList, StatusBar} from 'react-native';
import React from 'react';
import {styles} from './Style';
import LinearGradient from 'react-native-linear-gradient';
import {FlagSVGIcone} from '../../../assets/icones/FlagSVGIcone';
import {BtnPlay} from '../../components/btnPlay/btnPlay';
import {useDispatch, useSelector} from 'react-redux';
import {
  editIndex,
  editTempIndex,
  editTimer,
  resetTempPoint,
} from '../../../redux/reducers/raeducer';
import {PointTeam} from '../../components/pointTeam/PointTeam';
import { strings } from '../../../localization';

export const Points = ({navigation}) => {
  const dispatch = useDispatch();

  const fixPoint = useSelector(s => s.deAsa.fixPoint);
  const queueOfTeams = useSelector(s => s.deAsa.queueOfTeams);
  const queueOfPlayers = useSelector(s => s.deAsa.queueOfPlayers);
  const index = useSelector(s => s.deAsa.index);
  const teams = useSelector(s => s.deAsa.teams);

  const playAgainClick = () => {
    dispatch(editTempIndex());
    dispatch(editIndex(index + 7));
    dispatch(resetTempPoint());
    dispatch(editTimer());

    navigation.navigate('DeAsaGame');
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
          <View style={styles.viewPoint}>
            <Text style={styles.txtPoint}>{strings.points}</Text>
            <View style={styles.viewFlag}>
              <FlagSVGIcone />
              <Text style={styles.txtPoint}>{fixPoint}</Text>
            </View>
          </View>
          <View>
            <FlatList
              data={teams}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <PointTeam teamName={item.teamName} point={item.TeamPoint} />
              )}
            />
          </View>
        </View>
        <View style={styles.viewBottom}>
          <Text style={styles.txtName}>{teams[queueOfTeams].teamName}</Text>
          <Text style={[styles.txtName, {marginBottom: 32}]}>
            {teams[queueOfTeams].players[queueOfPlayers].name}
          </Text>
          <BtnPlay click={playAgainClick} title = {strings.play}/>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
