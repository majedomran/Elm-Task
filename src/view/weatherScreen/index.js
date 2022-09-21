import React, {useEffect, useState} from 'react';
import {
  Platform,
  View,
  Text,
  TouchableOpacity,
  DeviceEventEmitter,
  Dimensions,
  Image,
  ActivityIndicator,
} from 'react-native';
import {useSelector} from 'react-redux';
import WeatherScreenViewModel from '../../controller/WeatherScreenViewModel';
import {Icon} from '@ant-design/react-native';
import LinearGradient from 'react-native-linear-gradient';
import AwesomeLoading from 'react-native-awesome-loading';

const WeatherScreen = ({navigation, route}) => {
  const windowWidth = Dimensions.get('window').width;

  const {
    time,
    getMonth,
    getAmPm,
    initRequests,
    getTemp,
    getWeather,
    getCity,
    isLoading,
    formatTime,
  } = WeatherScreenViewModel();

  useEffect(() => {
    initRequests();
  }, []);

  const renderTime = () => {
    return (
      <View
        style={{marginTop: '20%', marginLeft: '10%', alignSelf: 'baseline'}}>
        <Text style={{fontSize: 24, color: 'white', marginBottom: 5}}>
          {getMonth()}
        </Text>
        <View style={{height: 1, backgroundColor: 'white'}} />
        <Text
          style={{
            top: 0,
            fontSize: 56,
            color: 'white',
            fontWeight: '600',
          }}>
          {formatTime(time)}
        </Text>
        <Text
          style={{
            fontSize: 28,
            color: 'white',
            alignSelf: 'flex-end',
            top: -10,
          }}>
          {getAmPm()}
        </Text>
      </View>
    );
  };

  const renderTemp = () => {
    return (
      <View
        style={{
          marginTop: '45%',
          alignSelf: 'center',
        }}>
        {isLoading() ? (
          <ActivityIndicator size="large" color="white" />
        ) : (
          <Text style={{fontSize: 56, color: 'white', alignSelf: 'center'}}>
            {getTemp()}
          </Text>
        )}
        <View
          style={{
            height: 2,
            backgroundColor: 'white',
            width: windowWidth * 0.5,
            opacity: 0.2,
          }}
        />
        <Text style={{fontSize: 32, color: 'white', alignSelf: 'center'}}>
          {getWeather()}
        </Text>
      </View>
    );
  };

  const renderTimeSlide = hour => {
    const percentage = (1 - hour / 24) * 100 * 0.75;
    return (
      <View
        style={{
          width: windowWidth,
          height: '8%',
          marginTop: '10%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              marginRight: 10,
              marginLeft: 10,
            }}>
            {' '}
            00 - 06h
          </Text>
          <View
            style={{
              height: '100%',
              backgroundColor: 'white',
              width: 2,
              opacity: 0.2,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              marginRight: 10,
              marginLeft: 10,
            }}>
            {' '}
            06 - 12h
          </Text>
          <View
            style={{
              height: '100%',
              backgroundColor: 'white',
              width: 2,
              opacity: 0.2,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              marginRight: 10,
              marginLeft: 10,
            }}>
            {' '}
            12 - 18h
          </Text>
          <View
            style={{
              height: '100%',
              backgroundColor: 'white',
              width: 2,
              opacity: 0.2,
            }}
          />
          <Text
            style={{
              fontSize: 18,
              color: 'white',
              marginRight: 10,
              marginLeft: 10,
            }}>
            {' '}
            18 - 24h
          </Text>
        </View>
        <View>
          <View
            style={{
              height: 2,
              width: '90%',
              backgroundColor: 'white',
              opacity: 0.2,
              alignSelf: 'center',
              marginTop: 1,
            }}
          />
          <View
            style={{
              position: 'absolute',
              right: `${percentage}%`,
              height: 4,
              width: '25%',
              backgroundColor: 'white',
              opacity: 1,
            }}
          />
        </View>
      </View>
    );
  };

  const renderDetails = () => {
    return (
      <View
        style={{
          width: windowWidth,
          height: '20%',
        }}>
        <Text style={{fontSize: 22, color: 'white', alignSelf: 'center'}}>
          -1°C / +1°C
        </Text>
        <View>
          <Text
            style={{
              fontSize: 24,
              alignSelf: 'flex-end',
              marginRight: 30,
              color: 'white',
            }}>
            {getCity()}
          </Text>
          <Text
            style={{
              fontSize: 18,
              alignSelf: 'flex-end',
              marginRight: 30,
              color: 'white',
              marginTop: 10,
            }}>
            next month
          </Text>
        </View>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Icon
              name="setting"
              size="lg"
              color="white"
              style={{marginLeft: 20}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon
              name="clock-circle"
              size="lg"
              color="white"
              style={{marginLeft: 20}}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  };
  return (
    <LinearGradient
      style={{
        display: 'flex',
        flex: 1,
      }}
      colors={
        getWeather() === 'Clouds'
          ? ['#BCAC98', '#625043', 'black']
          : getWeather() === 'Snow'
          ? ['#5FCCCA', '#448BCC', 'black']
          : ['#EFDB4E', '#DF7937', 'black']
      }
      locations={[0, 0.65, 1]}>
      {renderTime()}

      <Image
        source={
          getWeather() === 'Clouds'
            ? require('../../../assets/ellipse-white.png')
            : getWeather() === 'Snow'
            ? require('../../../assets/snow-white.png')
            : require('../../../assets/sunny-white.png')
        }
        style={{position: 'absolute', right: -50, marginTop: 200}}
      />
      <Image
        source={
          getWeather() === 'Clouds'
            ? require('../../../assets/ellipse-gradient.png')
            : getWeather() === 'Snow'
            ? require('../../../assets/snow-gradient.png')
            : require('../../../assets/sunny-gradient.png')
        }
        style={{
          position: 'absolute',
          right: -50,
          marginTop: 195,
        }}
      />
      {renderTemp()}
      {renderTimeSlide(time / 3600)}
      {renderDetails()}
    </LinearGradient>
  );
};

export default WeatherScreen;
