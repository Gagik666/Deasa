import { Text, SafeAreaView, View, FlatList, StatusBar } from 'react-native';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './Style';
import { BtnSingers } from '../../components/btnSingers/BtnSingers';
import Sound from 'react-native-sound';
import {
  addPoint,
  editIndex,
  editQueueOfPlayers,
  editQueueOfTeams,
  editTempIndex,
  resetQueueOfPlayers,
  resetQueueOfTeams,
} from '../../../redux/reducers/raeducer';
import { strings } from '../../../localization';

export const DeAsaGame = ({ navigation }) => {
  const dispatch = useDispatch();
  const singers = useSelector(s => s.deAsa.singers);
  const teams = useSelector(s => s.deAsa.teams);
  const queueOfTeams = useSelector(s => s.deAsa.queueOfTeams);
  const queueOfPlayers = useSelector(s => s.deAsa.queueOfPlayers);
  const time = useSelector(s => s.deAsa.time);
  const [timerId, setTimerId] = useState(null);
  const [secund, setSecund] = useState(time);
  const tempPoint = useSelector(s => s.deAsa.tempPoint);
  const tempIndex = useSelector(s => s.deAsa.tempIndex);
  const index = useSelector(s => s.deAsa.index);
  const timer = useSelector(s => s.deAsa.timer);
  const fixPoint = useSelector(s => s.deAsa.fixPoint);
  const teamsCount = useSelector(s => s.deAsa.teamsCount);
  const soundStatus = useSelector(s => s.settings.sound);

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(timerId);
    };
  }, [timer]);

  useEffect(() => {
    if (secund === 0) {
      dispatch(addPoint(queueOfTeams + 1, tempPoint));
      stopTimer();
      dispatch(editTempIndex());
      for (let i = 0; i < teams.length; i++) {
        if (teams[i].TeamPoint >= fixPoint && queueOfPlayers === teams[queueOfTeams].playerCount) {
          navigation.replace('Finish', { team: teams[i].teamName });
        } else {
          navigation.replace('Points');
        }
      }

      if (queueOfTeams === teamsCount - 1) {
        if (queueOfPlayers === teams[queueOfTeams].playerCount - 1) {
          dispatch(resetQueueOfPlayers());
        } else {
          dispatch(editQueueOfPlayers());
        }
        dispatch(resetQueueOfTeams());
      } else {
        dispatch(editQueueOfTeams());
      }
      if (queueOfPlayers === teams[queueOfTeams].playerCount) {
        dispatch(resetQueueOfPlayers());
      }
    }

    if (tempIndex === 6) {
      dispatch(editIndex(index + 6));
      dispatch(editTempIndex());
    }
  });
  const startTimer = () => {
    const id = setInterval(() => {
      setSecund(secund => secund - 1);
    }, 1000);
    setTimerId(id);
  };

  const stopTimer = () => {
    clearInterval(timerId);
    setSecund(time);
    setTimerId(null);
  };


  const sound = new Sound(require('../../../assets/sounds/sound.wav'), null, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + sound.getDuration() +
      'number of channels: ' + sound.getNumberOfChannels());
  });

  const clickSound = () => {
    soundStatus ? sound.play() : null
  }

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
          <Text style={styles.txtTitle}>{teams[queueOfTeams].teamName}</Text>
          <Text style={styles.txtTitle}>{secund}</Text>
        </View>
        <View style={styles.viewList}>
          <FlatList
            style={styles.flatList}
            keyExtractor={item => item.id}
            data={singers.slice(index, index + 6)}
            renderItem={({ item }) => <BtnSingers name={item.name} onClick={clickSound} />}
          />
        </View>
        <Text style={styles.txtPoints}>{`${strings.point} ${tempPoint}`}</Text>
      </LinearGradient>
    </SafeAreaView>
  );
};
