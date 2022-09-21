import {Dimensions, StyleSheet} from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  linearGradient: {
    display: 'flex',
    flex: 1,
  },
  whiteWeatherImage: {
    position: 'absolute',
    right: -50,
    marginTop: windowHeight > 700 ?  200 : 150,
  },
  gradientWeatherImage: {
    position: 'absolute',
    right: -50,
    marginTop: windowHeight > 700 ?  195 : 145,
  },
  tempView: {
    marginTop: '30%',
    alignSelf: 'center',
  },
  tempText: {
    fontSize: 56,
    color: 'white',
    alignSelf: 'center',
  },
  tempLine: {
    height: 2,
    backgroundColor: 'white',
    width: windowWidth * 0.5,
    opacity: 0.2,
  },
  weatherText: {
    fontSize: 32,
    color: 'white',
    alignSelf: 'center',
  },
  timeView: {
    marginTop: windowHeight > 700 ? '20%' : '0%',
    marginLeft: '10%',
    alignSelf: 'baseline',
  },
  monthText: {
    fontSize: 24,
    color: 'white',
    marginBottom: 5,
  },
  timeLine: {
    height: 1,
    backgroundColor: 'white',
  },
  timeText: {
    top: 0,
    fontSize: 56,
    color: 'white',
    fontWeight: '600',
  },
  amPmText: {
    fontSize: 28,
    color: 'white',
    alignSelf: 'flex-end',
    top: -10,
  },
  timeSlideWidth: {
    width: windowWidth,
    height: '8%',
    marginTop: '10%',
  },
  hoursContainer: {
    flexDirection: 'row',
    height: 50,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  hoursText: {
    fontSize: 18,
    color: 'white',
    marginRight: 10,
    marginLeft: 10,
  },
  hoursSaperator: {
    height: '100%',
    backgroundColor: 'white',
    width: 2,
    opacity: 0.2,
  },
  slider: {
    position: 'absolute',

    height: 4,
    width: '25%',
    backgroundColor: 'white',
    opacity: 1,
  },
  timeSlideHorizantalSaperator: {
    height: 2,
    width: '90%',
    backgroundColor: 'white',
    opacity: 0.2,
    alignSelf: 'center',
    marginTop: 1,
  },
  detailsContainer: {
    width: windowWidth,
    height: '20%',
  },
  detailsDegreeDif: {
    fontSize: 22,
    color: 'white',
    alignSelf: 'center',
  },
  cityText: {
    fontSize: 24,
    alignSelf: 'flex-end',
    marginRight: 30,
    color: 'white',
    // marginTop: 25
  },
  nextMonthText: {
    fontSize: 18,
    alignSelf: 'flex-end',
    marginRight: 30,
    color: 'white',
    marginTop: 10,
  },
  detailsIcon: {marginLeft: 20},
});

export default styles;
