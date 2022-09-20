import React, {useEffect, useState} from 'react';
import {
  Platform,
  View,
  Text,
  TouchableOpacity,
  DeviceEventEmitter,
  Dimensions,
} from 'react-native';
import {useSelector} from 'react-redux';
import WeatherScreenViewModel from '../../controller/WeatherScreenViewModel';
import {Icon} from '@ant-design/react-native';
import { Picker } from '@react-native-picker/picker';

const SettignsScreen = ({navigation, route}) => {
  return (
    <View style={{backgroundColor: 'grey', flex: 1}}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}>
        <Icon name="setting" size="lg" color="white" style={{marginLeft: 20, marginTop: 100}} />
      </TouchableOpacity>
    </View>
  );
};

export default SettignsScreen;
