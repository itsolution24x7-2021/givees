// @flow
import React from 'react';
import PropTypes from 'prop-types';
import {View, TouchableOpacity} from 'react-native';
import {Text} from '..';
import styles from './styles';
import data from './data';

export default class CustomAccordion extends React.Component {
  static propTypes = {};

  static defaultProps = {};

  render() {
    return (
      <View style={styles.container}>
        {data.map(({bg, color, category, subCategories}) => {
          return (
            <TouchableOpacity
              key={category}
              onPress={() => {}}
              style={styles.cardContainer}
              activeOpacity={0.9}>
              <View style={[styles.card, {backgroundColor: bg}]}>
                <Text style={[styles.heading, {color}]}>{category}</Text>
                <View style={[styles.subCategoryList]}>
                  {subCategories.map(subCategory => {
                    return (
                      <Text key={subCategory} style={[styles.body, {color: "white"}]}>
                        {subCategory}
                      </Text>
                    );
                  })}
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
