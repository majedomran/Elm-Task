import {View, Text, TouchableOpacity} from 'react-native';
import styles from '../view/weatherScreen/styles';
import {Icon} from '@ant-design/react-native';

const RenderDetails = ({getCity}) => {
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.detailsDegreeDif}>-1°C / +1°C</Text>
      <View>
        <Text style={styles.cityText}>{getCity()}</Text>
        <Text style={styles.nextMonthText}>next month</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <TouchableOpacity>
          <Icon
            name="setting"
            size="lg"
            color="white"
            style={styles.detailsIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Icon
            name="clock-circle"
            size="lg"
            color="white"
            style={styles.detailsIcon}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default RenderDetails;
