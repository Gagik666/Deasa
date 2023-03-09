import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
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
import {Strings} from '../../../assets/strings/Strings';
import {FeedbackSVGIcone} from '../../../assets/icones/FeedbackSVGIcone';
import Share from 'react-native-share';

export const Settings = ({navigation}) => {
  const time = useSelector(s => s.deAsa.time);
  const fixPoint = useSelector(s => s.deAsa.fixPoint);
  const authorEmail = useSelector(s => s.deAsa.authorEmail);
  const dispatch = useDispatch();
  const setTime = val => {
    dispatch(editTime(val));
  };
  const setFixPoint = val => {
    dispatch(editFixPoint(val));
  };

  const share = () => {
    const options = {
      email: authorEmail,
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
        <View style={styles.viewNav}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <ArrowBackSVGIcone />
          </TouchableOpacity>
          <Text style={styles.txtSettings}>{Strings.settings}</Text>
        </View>
        <View style={styles.viewTime}>
          <WatchSVGIcone />
          <CusteSlider
            val={time}
            title={Strings.roundTime}
            subtitle={Strings.inSeconds}
            setVal={setTime}
          />
        </View>
        <View style={styles.viewTime}>
          <PointsSVGIcone />
          <CusteSlider
            val={fixPoint}
            title={Strings.victoryPoints}
            subtitle={Strings.numberOfWords}
            setVal={setFixPoint}
          />
        </View>
        <TouchableOpacity onPress={() => share()} style={styles.viewTime}>
          <FeedbackSVGIcone />
          <View>
            <Text style={styles.txtTimeTitle}>{Strings.Feedback}</Text>
            <Text style={styles.txtTimeSubTitle}>{Strings.ReportProblems}</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};
