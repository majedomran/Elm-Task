import {useDispatch, useSelector} from 'react-redux';
import {getWeatherAction} from '../../redux/reducers/weatherReducer';
import {useEffect, useState} from 'react';

const WeatherScreenViewModel = () => {
  const dispatch = useDispatch();
  const {temp, weather, lon, lat, city, weatherLoading} = useSelector(
    state => state.weather,
  );
  const [time, setTime] = useState(
    new Date().getHours() * 3600 + new Date().getMinutes() * 60,
  );


  useEffect(() => {
    setInterval(() => {
      setTime(prevState => prevState + 1);
    }, 1000);
  }, []);

  const formatTime = localTime => {
    const timeMinutes = Math.floor(localTime / 60);
    const hour = Math.floor(timeMinutes / 60);
    const hourString = hour < 10 ? `0${hour}` : `${hour}`;
    const minutes = timeMinutes % 60;
    const minutesString = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const timeString = `${hourString}:${minutesString}`;
    return timeString;
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
    const ampm = time <= 43200 ? 'am' : 'pm';

    return ampm;
  };
  const initRequests = () => {
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

  const isLoading = () => {
    return weatherLoading;
  };

  return {
    time,
    getMonth,
    getAmPm,
    initRequests,
    getTemp,
    getWeather,
    getCity,
    isLoading,
    formatTime,
  };
};

export default WeatherScreenViewModel;
