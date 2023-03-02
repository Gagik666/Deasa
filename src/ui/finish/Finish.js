import {View, Text, SafeAreaView, FlatList} from 'react-native';
import React from 'react';
import {styles} from './Style';
import LinearGradient from 'react-native-linear-gradient';
import {BtnPlay} from '../../components/btnPlay/btnPlay';
import {useDispatch, useSelector} from 'react-redux';
import {PointTeam} from '../../components/pointTeam/PointTeam';
import {useRoute} from '@react-navigation/native';
import {addPoint} from '../../../redux/reducers/raeducer';

export const Finish = ({navigation}) => {
  const teams = useSelector(s => s.deAsa.teams);
  const rout = useRoute();
  const dispatch = useDispatch();
  return (
    <SafeAreaView style={styles.wrapper}>
      <LinearGradient
        colors={['#FF4359', '#AA1439', '#68192F', '#53192A', '#000000']}
        style={styles.LinearGradient}>
        <View style={styles.viewTop}>
          <Text style={styles.txtTitle}>{rout.params.team}</Text>
          <Text style={styles.txtTitle}>Won!</Text>
        </View>
        <View style={styles.viewBottom}>
          <View style={styles.viewFlatList}>
            <FlatList
              data={teams}
              keyExtractor={item => item.id}
              renderItem={({item}) => (
                <PointTeam teamName={item.teamName} point={item.TeamPoint} />
              )}
            />
          </View>
          <View>
            <BtnPlay
              title="Play again"
              click={() => {
                navigation.navigate('Home');
              }}
            />
          </View>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
