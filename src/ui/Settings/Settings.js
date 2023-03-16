import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {styles} from './Style';
import LinearGradient from 'react-native-linear-gradient';
import {ArrowBackSVGIcone} from '../../../assets/icones/ArrowBackSVGIcone';
import {WatchSVGIcone} from '../../../assets/icones/WatchSVGIcone';
import {useDispatch, useSelector} from 'react-redux';
import {editFixPoint, editTime} from '../../../redux/reducers/raeducer';
import {CusteSlider} from '../../components/slider/CustemSlider';
import {PointsSVGIcone} from '../../../assets/icones/PointsSVGIcone';
import {FeedbackSVGIcone} from '../../../assets/icones/FeedbackSVGIcone';
import Share from 'react-native-share';
import Modal from 'react-native-modal';
import {changeLanguage, editLanguage} from '../../../redux/reducers/settings';
import { LanguageSVGIcone } from '../../../assets/icones/LanguageSVGIcone';
import { strings } from '../../../localization';
import { LanguageButton } from '../../components/languageButton/LanguageButton';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Settings = ({navigation}) => {
  const [isVisible, setIsVisible] = useState(false);
  const time = useSelector(s => s.deAsa.time);
  const fixPoint = useSelector(s => s.deAsa.fixPoint);
  const authorEmail = useSelector(s => s.deAsa.authorEmail);
  const language = useSelector(s => s.settings.language);
  const lang = useSelector(s => s.settings.lang)
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

  const selecrLanguage = async (id, title) => {
    try {
      dispatch(editLanguage(id));
      dispatch(changeLanguage(title))
      await AsyncStorage.setItem('lang', title);
      await AsyncStorage.setItem('langId', ' ' + id);
      setIsVisible(false);
    } catch (error) {
      console.log(error);
    }
  };

  strings.setLanguage(lang)
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
        <Modal
          avoidKeyboard={true}
          isVisible={isVisible}
          animationOutTiming={1000}
          style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
          <View style={styles.viewModal}>
            <Text style={styles.txtModalTitle}>
              {strings.languageSelection}
            </Text>
            <View>
              <FlatList
                data={language}
                keyExtractor={item => item.id}
                renderItem={({item}) => (
                  <LanguageButton
                    title={item.title}
                    press={() => selecrLanguage(item.id, item.title)}
                    active={item.active}
                  />
                )}
              />
            </View>
            <View style={styles.viewModalButton}>
              <TouchableOpacity onPress={() => setIsVisible(false)}>
                <Text style={styles.txtBtnMoadal}>{strings.cancle}</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
        <View style={styles.viewNav}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <ArrowBackSVGIcone />
          </TouchableOpacity>
          <Text style={styles.txtSettings}>{strings.settings}</Text>
        </View>
        <View style={styles.viewTime}>
          <TouchableOpacity
            onPress={() => setIsVisible(true)}
            style={styles.viewTime}>
            <LanguageSVGIcone />
            <View>
              <Text style={styles.txtTimeTitle}>{strings.language}</Text>
              <Text style={styles.txtLanguageSubTitle}>{strings.lang}</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.viewTime}>
          <WatchSVGIcone />
          <CusteSlider
            val={time}
            title={strings.roundTime}
            subtitle={strings.inSeconds}
            setVal={setTime}
          />
        </View>
        <View style={styles.viewTime}>
          <PointsSVGIcone />
          <CusteSlider
            val={fixPoint}
            title={strings.victoryPoints}
            subtitle={strings.numberOfWords}
            setVal={setFixPoint}
          />
        </View>
        <TouchableOpacity onPress={() => share()} style={styles.viewTime}>
          <FeedbackSVGIcone />
          <View>
            <Text style={styles.txtTimeTitle}>{strings.Feedback}</Text>
            <Text style={styles.txtTimeSubTitle}>{strings.ReportProblems}</Text>
          </View>
        </TouchableOpacity>
      </LinearGradient>
    </SafeAreaView>
  );
};
