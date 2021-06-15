/* eslint-disable no-param-reassign, radix */
import React from 'react';
import { View, Text } from 'react-native';
import { Metrics, Fonts } from '../../../../../../theme';

import PropTypes from 'prop-types';

import NumberCard from './number-card';

import style from '../style';

function FlipNumber({
  number,
  unit,
  size,
  perspective,
  numberWrapperStyle,
  cardStyle,
  flipCardStyle,
  numberStyle,
}) {
  number = parseInt(number);
  let previousNumber = number - 1;
  // console.log(`number, previousNumber`, number, previousNumber);

  if (unit !== 'hours') {
    previousNumber = previousNumber === -1 ? 59 : previousNumber;
  } else {
    previousNumber = previousNumber === -1 ? 23 : previousNumber;
  }
  number = number < 10 ? `0${number}` : number;
  previousNumber = previousNumber < 10 ? `0${previousNumber}` : previousNumber;

  const numberSplit = number.toString().split('');
  const previousNumberSplit = previousNumber.toString().split('');

  // console.log(
  //   `numberSplit, previousNumberSplit`,
  //   numberSplit,
  //   previousNumberSplit,
  // );

  // console.log("previousNumberSplit[0]", previousNumberSplit[1])

  return (
    <View>
      <View style={style.wrapper}>
        <NumberCard
          number={numberSplit[0]}
          previousNumber={previousNumberSplit[0]}
          size={size}
          perspective={perspective}
          numberWrapperStyle={numberWrapperStyle}
          cardStyle={{ cardStyle }}
          flipCardStyle={flipCardStyle}
          // numberStyle={numberStyle}
          // numberStyle={{ color: 'green' }}
          numberStyle={{ color: unit == 'seconds' ? 'red' : '#3FA9F5' }}
        />
        <NumberCard
          number={numberSplit[1]}
          previousNumber={numberSplit[1]}
          // previousNumber={previousNumberSplit[1]} // in case of show previous value
          size={size}
          perspective={perspective}
          numberWrapperStyle={numberWrapperStyle}
          cardStyle={{ cardStyle }}
          flipCardStyle={flipCardStyle}
          numberStyle={{ color: unit == 'seconds' ? 'red' : '#3FA9F5' }}
        />
      </View>
      <Text
        style={{
          fontFamily: Fonts.type.ArialBold,
          fontSize: Fonts.size.xxxSmall,
          textAlign: 'center',
          marginTop: Metrics.ratio(5),
        }}>
        {unit == 'seconds' ? 'Seconds' : 'Minutes'}
      </Text>
    </View>
  );
}

FlipNumber.defaultProps = {
  unit: 'seconds',
};

FlipNumber.propTypes = {
  number: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  unit: PropTypes.oneOf(['hours', 'minutes', 'seconds']),
  size: PropTypes.number,
  perspective: PropTypes.number,
  numberWrapperStyle: PropTypes.object,
  cardStyle: PropTypes.object,
  flipCardStyle: PropTypes.object,
  numberStyle: PropTypes.object,
};

export default FlipNumber;
