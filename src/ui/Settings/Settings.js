import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {styles} from './Style';
import LinearGradient from 'react-native-linear-gradient';
import {ArrowBackSVGIcone} from '../../../assets/icones/ArrowBackSVGIcone';
import {WatchSVGIcone} from '../../../assets/icones/WatchSVGIcone';
import {useDispatch, useSelector} from 'react-redux';
import {editFixPoint, editTime} from '../../../redux/reducers/raeducer';
import {CusteSlider} from '../../components/slider/CustemSlider';
import {PointsSVGIcone} from '../../../assets/icones/PointsSVGIcone';

export const Settings = ({navigation}) => {
  const time = useSelector(s => s.deAsa.time);
  const fixPoint = useSelector(s => s.deAsa.fixPoint);
  const dispatch = useDispatch();
  const setTime = val => {
    dispatch(editTime(val));
  };
  const setFixPoint = val => {
    dispatch(editFixPoint(val));
  };
  return (
    <SafeAreaView style={styles.wrapper}>
      <LinearGradient
        colors={['#FF4359', '#AA1439', '#68192F', '#53192A', '#000000']}
        style={styles.LinearGradient}>
        <View style={styles.viewNav}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <ArrowBackSVGIcone />
          </TouchableOpacity>
          <Text style={styles.txtSettings}>Settings</Text>
        </View>
        <View style={styles.viewTime}>
          <WatchSVGIcone />
          <CusteSlider
            val={time}
            title="Round time"
            subtitle="In seconds"
            setVal={setTime}
          />
        </View>
        <View style={styles.viewTime}>
          <PointsSVGIcone />
          <CusteSlider
            val={fixPoint}
            title="Victory points"
            subtitle="Number of words to guess to win"
            setVal={setFixPoint}
          />
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
