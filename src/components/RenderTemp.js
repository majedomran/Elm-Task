import {View, Text, ActivityIndicator} from 'react-native';
import styles from '../view/weatherScreen/styles';
const RenderTemp = ({isLoading, getTemp, getWeather}) => {
  return (
    <View style={styles.tempView}>
      {isLoading() ? (
        <ActivityIndicator size="large" color="white" />
      ) : (
        <Text style={styles.tempText}>{getTemp()}</Text>
      )}
      <View style={styles.tempLine} />
      <Text style={styles.weatherText}>{getWeather()}</Text>
    </View>
  );
};
export default RenderTemp;
