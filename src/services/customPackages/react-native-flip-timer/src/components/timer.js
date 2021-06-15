import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

import FlipNumber from './flip-number';
import Separator from './flip-number/separator';
import { Metrics, Fonts } from '../../../../../theme';

import TransformUtils from '../utils';

import style from './style';

class Timer extends React.Component {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  componentDidMount() {
    const { time, play } = this.props;
    const { hours, minutes, seconds } = TransformUtils.formatNumberToTime(time);

    this.setState(
      {
        hours,
        minutes,
        seconds,
      },
      () => {
        if (play) {
          this.timer = setInterval(() => this.updateTime(), 1000);
        }
      },
    );
  }

  shouldComponentUpdate(nextProps) {
    const { play } = this.props;
    if (nextProps.play !== play) {
      if (nextProps.play) {
        this.timer = setInterval(() => this.updateTime(), 1000);
      } else {
        clearInterval(this.timer);
      }
    }
    return true;
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  updateTime = () => {
    const { hours, minutes, seconds } = this.state;
    const { onStop } = this.props;

    // console.log(` hours, minutes, seconds in ut`, hours, minutes, seconds);

    if (minutes !== '00' || seconds !== '00') {
      const newState = TransformUtils.addTime(hours, minutes, seconds);
      this.setState((prevState) => ({ ...prevState, ...newState }));
    } else {
      clearInterval(this.timer);
      onStop(true);
    }
  };

  render() {
    const { wrapperStyle, flipNumberProps } = this.props;
    const { hours, minutes, seconds } = this.state;

    return (
      <View
        style={[
          wrapperStyle,
          {
            backgroundColor: 'white',
            paddingHorizontal: Metrics.ratio(15),
            paddingVertical: Metrics.ratio(10),
            elevation: 2,
            borderRadius: 7,
            marginVertical: Metrics.ratio(5),
          },
        ]}>
        <Text
          style={{
            fontFamily: Fonts.type.ArialBold,
            fontSize: Fonts.size.thirteen,
            textAlign: 'center',
            marginBottom: Metrics.ratio(5),
          }}>
          Time Remaining
        </Text>
        {/* {!!hours && <FlipNumber number={hours} unit="hours" {...flipNumberProps} />} */}
        {/* <Separator /> */}
        <View style={style.wrapper}>
          {!!minutes && (
            <FlipNumber number={minutes} unit="minutes" {...flipNumberProps} />
          )}
          {/* <Separator /> */}
          {!!seconds && (
            <FlipNumber number={seconds} unit="seconds" {...flipNumberProps} />
          )}
        </View>
      </View>
    );
  }
}

Timer.defaultProps = {
  play: true,
  wrapperStyle: {},
};

Timer.propTypes = {
  time: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  play: PropTypes.bool,
  wrapperStyle: PropTypes.object,
  flipNumberProps: PropTypes.shape({
    size: PropTypes.number,
    perspective: PropTypes.number,
    numberWrapperStyle: PropTypes.object,
    cardStyle: PropTypes.object,
    flipCardStyle: PropTypes.object,
    numberStyle: PropTypes.object,
  }),
};

export default Timer;
