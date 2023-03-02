import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {styles} from './Style';
import {DeleteX} from '../deleteX/DeleteX';
import {useDispatch} from 'react-redux';
import {deletePlayer} from '../../../redux/reducers/raeducer';

export const Player = ({
  item,
  playerCount,
  playerId,
  teamId,
  open,
  setidItem,
  setidItemPlayer,
  setClickStatus
}) => {
  const dispath = useDispatch();
  const deletePlasyerClick = () => {
    dispath(deletePlayer(playerId, teamId));
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.viewTop}>
        <TouchableOpacity
          onPress={() => {
            open();
            setidItem(teamId);
            setidItemPlayer(playerId)
            setClickStatus('player')
          }}>
          <Text style={styles.txtTitle}>{item}</Text>
        </TouchableOpacity>
        {playerCount > 2 && <DeleteX size={10} click={deletePlasyerClick} />}
      </View>
    </View>
  );
};
