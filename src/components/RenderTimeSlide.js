import {View, Text} from 'react-native';
import styles from '../view/weatherScreen/styles';
const RenderTimeSlide = hour => {
  const percentage = (1 - hour / 24) * 100 * 0.75;
  return (
    <View style={styles.timeSlideWidth}>
      <View style={styles.hoursContainer}>
        <Text style={styles.hoursText}> 00 - 06h</Text>
        <View style={styles.hoursSaperator} />
        <Text style={styles.hoursText}> 06 - 12h</Text>
        <View style={styles.hoursSaperator} />
        <Text style={styles.hoursText}> 12 - 18h</Text>
        <View style={styles.hoursSaperator} />
        <Text style={styles.hoursText}> 18 - 24h</Text>
      </View>
      <View>
        <View style={styles.timeSlideHorizantalSaperator} />
        <View style={{...styles.slider, right: `${percentage}%`}} />
      </View>
    </View>
  );
};
export default RenderTimeSlide;
