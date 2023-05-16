import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import { addTempPoint, reduceTempPoint} from '../../../redux/reducers/raeducer';
import {styles} from './Style';

export const BtnSingers = ({name, onClick}) => {
  const [click, setClick] = useState(true);
  const queueOfTeams = useSelector(s => s.deAsa.queueOfTeams);
  const dispatch = useDispatch();

  // This function is designed to give 1 point
  const addPointClick = () => {
    setClick(false)
    dispatch(addTempPoint());
  };

  //  This function is designed to take 1 point
  const reducePointClick = () => {
    setClick(true)
    dispatch(reduceTempPoint());
  };

  const add = (
    <TouchableOpacity style={styles.btnActiveItem} onPress={() => {addPointClick(), onClick()}}>
      <Text style={styles.txtActiveItem}>{name}</Text>
    </TouchableOpacity>
  );

  const reducer = (
    <TouchableOpacity style={styles.btnInActiveItem} onPress={() => {reducePointClick(), onClick()}}>
      <Text style={styles.txtInActiveItem}>{name}</Text>
    </TouchableOpacity>
  );

  if (click) {
    return add 
  } else {
    return reducer
  }
};
