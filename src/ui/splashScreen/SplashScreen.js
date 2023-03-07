import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './Style';
import {onValue, ref} from 'firebase/database';
import {db} from '../../../db/firebase/config';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from '@react-native-community/netinfo';
import { Strings } from '../../../assets/strings/Strings';
export const SplashScreen = ({navigation}) => {
  const [isConnected, setIsConnected] = useState(true);
  useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsConnected(state.isConnected);

      isConnected ? checkVersion() : navigation.navigate('Home');
    });

    return () => {
      unsubscribe();
    };
  }, []);

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
        barStyle='light-content'
        backgroundColor='#FF4359'
        translucent
      />
      <LinearGradient
        colors={['#FF4359', '#AA1439', '#68192F', '#53192A', '#000000']}
        style={styles.LinearGradient}>
        <View>
          <Text style={styles.txtTitle}>{Strings.projectName}</Text>
        </View>
      </LinearGradient>
    </SafeAreaView>
  );
};
