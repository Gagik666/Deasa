import React, {useState} from 'react';
import {TouchableOpacity, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addPoint, addTempPoint, reducePoint, reduceTempPoint} from '../../../redux/reducers/raeducer';
import {styles} from './Style';

export const BtnSingers = ({name}) => {
  const [click, setClick] = useState(true);
  const queueOfTeams = useSelector(s => s.deAsa.queueOfTeams);
  const dispatch = useDispatch();

  const addPointClick = () => {
    setClick(false)
    dispatch(addTempPoint());
  };

  const reducePointClick = () => {
    setClick(true)
    dispatch(reduceTempPoint());
  };

  const add = (
    <TouchableOpacity style={styles.btnActiveItem} onPress={addPointClick}>
      <Text style={styles.txtActiveItem}>{name}</Text>
    </TouchableOpacity>
  );

  const reducer = (
    <TouchableOpacity style={styles.btnInActiveItem} onPress={reducePointClick}>
      <Text style={styles.txtInActiveItem}>{name}</Text>
    </TouchableOpacity>
  );

  if (click) {
    return add 
  } else {
    return reducer
  }
};
