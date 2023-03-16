import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './Style';
import {onValue, ref} from 'firebase/database';
import {db} from '../../../db/firebase/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import {Strings} from '../../../assets/strings/Strings';
import {useDispatch} from 'react-redux';
import {editAppUrl, editAuthorEmail} from '../../../redux/reducers/raeducer';
import {strings} from '../../../localization';
import {changeLanguage, editLanguage} from '../../../redux/reducers/settings';
import {Image} from 'react-native';
export const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [isConnected, setIsConnected] = useState(true);
  useEffect(() => {
    getAppUrl();
    getAuthorEmail();
    selecrLanguage();
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);

      isConnected ? checkVersion() : navigation.navigate('Home');
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const getAppUrl = () => {
    onValue(ref(db, '/app_url/'), r => {
      dispatch(editAppUrl(r.val()));
    });
  };

  const getAuthorEmail = () => {
    onValue(ref(db, '/author_email/'), r => {
      dispatch(editAuthorEmail(r.val()));
    });
  };
  const selecrLanguage = () => {
    try {
      AsyncStorage.getItem('lang').then(value => {
        if (value === null) {
          AsyncStorage.setItem('lang', 'en');
        } else {
          dispatch(changeLanguage(value));
          strings.setLanguage(value);
        }
      });
      AsyncStorage.getItem('langId').then(id => {
        if (id === null) {
          AsyncStorage.setItem('langId', ' ' + 0);
        } else {
          dispatch(editLanguage(id));
        }
      });
    } catch (error) {
      console.log(error);
    }
  };

  const checkVersion = async () => {
    try {
      await AsyncStorage.getItem('version_singers').then(val => {
        if (val === null) {
          AsyncStorage.setItem('version_singers', '1').then(() =>
            loadingSingers(),
          );
        } else {
          onValue(ref(db, '/version_singers/'), r => {
            AsyncStorage.getItem('version_singers').then(val => {
              if (val !== r.val()) {
                loadingSingers();
              } else {
                navigation.navigate('Home');
              }
            });
          });
        }
      });
    } catch (error) {}
  };

  const loadingSingers = async () => {
    try {
      onValue(ref(db, '/Singers/'), r => {
        let s = JSON.stringify(r.val());
        AsyncStorage.setItem('singers', s).then(() => {
          navigation.navigate('Home');
        });
      });
      onValue(ref(db, '/version_singers/'), r => {
        AsyncStorage.setItem('version_singers', r.val());
      });
    } catch (error) {
      console.log(error);
    }
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
        <Image
          source={require('../../../assets/images/logoDeasa_512-512.png')}
          style={styles.img}
        />
      </LinearGradient>
    </SafeAreaView>
  );
};
