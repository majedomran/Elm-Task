import React, {useEffect} from 'react';
import {Image} from 'react-native';
import WeatherScreenViewModel from '../../controller/WeatherScreenViewModel';
import LinearGradient from 'react-native-linear-gradient';
import styles from './styles';
import RenderTime from '../../components/RenderTime';
import RenderTemp from '../../components/RenderTemp';
import RenderTimeSlide from '../../components/RenderTimeSlide';
import RenderDetails from '../../components/RenderDetails';

const WeatherScreen = ({navigation, route}) => {
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

  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={
        getWeather() === 'Clouds' || getWeather() === 'Rain'
          ? ['#BCAC98', '#625043', 'black']
          : getWeather() === 'Snow'
          ? ['#5FCCCA', '#448BCC', 'black']
          : ['#EFDB4E', '#DF7937', 'black']
      }
      locations={[0, 0.65, 1]}>
      {RenderTime({getMonth, formatTime, getAmPm, time})}

      <Image
        source={
          getWeather() === 'Clouds' || getWeather() === 'Rain'
            ? require('../../../assets/ellipse-white.png')
            : getWeather() === 'Snow'
            ? require('../../../assets/snow-white.png')
            : require('../../../assets/sunny-white.png')
        }
        style={styles.whiteWeatherImage}
      />
      <Image
        source={
          getWeather() === 'Clouds' || getWeather() === 'Rain'
            ? require('../../../assets/ellipse-gradient.png')
            : getWeather() === 'Snow'
            ? require('../../../assets/snow-gradient.png')
            : require('../../../assets/sunny-gradient.png')
        }
        style={styles.gradientWeatherImage}
      />
      {RenderTemp({getTemp, getWeather, isLoading})}
      {RenderTimeSlide(time / 3600)}
      {RenderDetails({getCity})}
    </LinearGradient>
  );
};

export default WeatherScreen;
