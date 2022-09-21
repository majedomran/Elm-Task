import {View, Text} from 'react-native';
import styles from '../view/weatherScreen/styles';

const RenderTime = ({getMonth, formatTime, getAmPm, time}) => {
  return (
    <View style={styles.timeView}>
      <Text style={styles.monthText}>{getMonth()}</Text>
      <View style={styles.timeLine} />
      <Text style={styles.timeText}>{formatTime(time)}</Text>
      <Text style={styles.amPmText}>{getAmPm()}</Text>
    </View>
  );
};
export default RenderTime;
