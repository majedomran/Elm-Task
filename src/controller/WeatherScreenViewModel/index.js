import {useDispatch, useSelector} from 'react-redux';
import {getWeatherAction} from '../../redux/reducers/weatherReducer';
import {getTimeZoneAction} from '../../redux/reducers/timeZoneReducer';
import {useEffect, useState} from 'react';
const WeatherScreenViewModel = () => {
  const dispatch = useDispatch();
  const {temp, weather, lon, lat, city} = useSelector(state => state.weather);

  useEffect(() => {
    if (lon && lat) {
      dispatch(getTimeZoneAction({lon, lat}));
    }
  }, [lon, lat]);

  const getTime = () => {
    const date = new Date();
    //   console.log('------date: ', date);
    const hour = date.getHours();
    const hourString = hour < 10 ? `0${hour}` : `${hour}`;
    const minutes = date.getMinutes();
    const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const timeString = `${hourString}:${minutesString}`;
    //   console.log('------time: ', hour);
    //   console.log('------timeString: ', timeString);
    return {timeString, timeDate: new Date()};
    // }
  };
  const getMonth = () => {
    const monthNames = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const month = new Date().getMonth();

    return monthNames[month];
  };
  const getAmPm = () => {
    const time = new Date().getTime();
    const ampm = time <= 12 ? 'am' : 'pm';

    return ampm;
  };
  const initRequests = () => {
    console.log('------dispatching init');
    dispatch(getWeatherAction({}));
  };
  const getTemp = () => {
    return `${Math.floor(temp)}°c`;
  };
  const getWeather = () => {
    return weather;
  };

  const getCity = () => {
    return city;
  };

  return {
    getTime,
    getMonth,
    getAmPm,
    initRequests,
    getTemp,
    getWeather,
    getCity,
  };
};

export default WeatherScreenViewModel;
