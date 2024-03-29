import {View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Style';
import {DeleteX} from '../deleteX/DeleteX';
import {Player} from '../player/Player';
import {useDispatch, useSelector} from 'react-redux';
import {
  addPlayer,
  deleteTeam,
} from '../../../redux/reducers/raeducer';
import { strings } from '../../../localization';

export const Team = ({team, open, setidItem, setidItemPlayer, setClickStatus}) => {
  const teamsCount = useSelector(s => s.deAsa.teamsCount);
  const [teamName, setTeamName] = useState('');
  const dispatch = useDispatch();
  const addPlayerClick = () => {
    dispatch(addPlayer(team.id));
  };

  // This function is designed to remove a team
  const deleteTeamClick = () => {
    dispatch(deleteTeam(team.id));
  };

  return (
    <View style={styles.wrapper}>
      <View style={styles.viewTop}>
        <TouchableOpacity
          onPress={() => {
            open();
            setidItem(team.id);
            setClickStatus("team")
          }}>
          <Text style={styles.txtTitle}>{team.teamName}</Text>
        </TouchableOpacity>
        {teamsCount > 2 && <DeleteX size={14} click={deleteTeamClick} />}
      </View>

      <FlatList
        data={team.players}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <Player
            item={item.name}
            playerCount={team.playerCount}
            playerId={item.id}
            teamId={team.id}
            open={open}
            setidItem={setidItem}
            setidItemPlayer={setidItemPlayer}
            setClickStatus={setClickStatus}
          />
        )}
      />

      {team.playerCount <= 2 && (
        <TouchableOpacity style={styles.btnAdd} onPress={addPlayerClick}>
          <Text style={styles.txtAdd}>{strings.addPlayer}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
