import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './Style';
import {Team} from '../../components/team/Team';
import {BtnCircle} from '../../components/btnCircle/BtnCircle';
import {BtnPlay} from '../../components/btnPlay/btnPlay';
import {
  addFixPoint,
  addPoint,
  addTeam,
  addTime,
  editPlayerName,
  editSingers,
  editTeamName,
  editTimer,
  reduceFixPoint,
  reduceTime,
} from '../../../redux/reducers/raeducer';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Modal from 'react-native-modal';

export const SelectTeams = ({navigation}) => {
  const teams = useSelector(s => s.deAsa.teams);
  const teamsCount = useSelector(s => s.deAsa.teamsCount);
  const time = useSelector(s => s.deAsa.time);
  const fixPoint = useSelector(s => s.deAsa.fixPoint);
  const dispatch = useDispatch();
  const [isVisible, setIsVisible] = useState(false);
  const [name, setName] = useState('');
  const [idItem, setidItem] = useState('');
  const [idItemPlayer, setidItemPlayer] = useState('');
  const [clickStatus, setClickStatus] = useState('');
  useEffect(() => {
    addSingers();
  });

  const addSingers = async () => {
    try {
      const singers = await AsyncStorage.getItem('singers');
      dispatch(editSingers(shuffle(JSON.parse(singers))));
    } catch (error) {
      console.log('error');
    }
  };

  const shuffle = array => {
    return array.sort(() => Math.random() - 0.5);
  };

  const addTeamClock = () => {
    dispatch(addTeam());
  };

  const addTimeClick = () => {
    if (time <= 75) dispatch(addTime());
  };

  const reduceTimeClick = () => {
    if (time >= 35) dispatch(reduceTime());
  };

  const addFixPointClick = () => {
    if (fixPoint <= 75) dispatch(addFixPoint());
  };

  const reduceFixPointClick = () => {
    if (fixPoint >= 25) dispatch(reduceFixPoint());
  };

  const openModal = () => {
    setIsVisible(true);
  };

  const editName = () => {
    dispatch(editTeamName(idItem, name));
    setIsVisible(false);
  };

  const editPlayerNameClick = () => {
    dispatch(editPlayerName(idItemPlayer, idItem, name));
    setIsVisible(false);
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <LinearGradient
        colors={['#FF4359', '#AA1439', '#68192F', '#53192A', '#000000']}
        style={styles.LinearGradient}>
        <Modal
          avoidKeyboard={true}
          isVisible={isVisible}
          animationOutTiming={1000}
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <View style={styles.viewModal}>
            <Text style={styles.txtModalTitle}>team name</Text>
            <TextInput
              style={styles.txtInputModal}
              onChangeText={text => setName(text)}
            />
            <View style={styles.viewModalButton}>
              <TouchableOpacity onPress={() => setIsVisible(false)}>
                <Text style={styles.txtBtnMoadal}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  if (clickStatus === 'team') {
                    editName();
                  }
                  if (clickStatus === 'player') {
                    editPlayerNameClick();
                  }
                }}>
                <Text style={styles.txtBtnMoadal}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <Text style={styles.txtTitle}>Tams</Text>
        <View style={styles.viewTop}>
          <View>
            <FlatList
              data={teams}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <Team
                  team={item}
                  open={openModal}
                  setidItem={setidItem}
                  setidItemPlayer={setidItemPlayer}
                  setClickStatus={setClickStatus}
                />
              )}
            />
          </View>
          {teamsCount <= 2 && (
            <TouchableOpacity onPress={addTeamClock}>
              <Text style={styles.txtAdd}>Add team</Text>
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.viewBottom}>
          <View style={styles.viewRow}>
            <BtnCircle flag="-" click={reduceTimeClick} />
            <View style={styles.viewTxt}>
              <Text
                style={styles.txtSettings}>{`round time\n${time} sec`}</Text>
            </View>
            <BtnCircle flag="+" click={addTimeClick} />
          </View>
          <View style={styles.viewRow}>
            <BtnCircle flag="-" click={reduceFixPointClick} />
            <View style={styles.viewTxt}>
              <Text
                style={
                  styles.txtSettings
                }>{`victory points\n${fixPoint}`}</Text>
            </View>
            <BtnCircle flag="+" click={addFixPointClick} />
          </View>
          <BtnPlay
            click={() => {
              navigation.navigate('DeAsaGame');
            }}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
