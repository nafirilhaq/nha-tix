import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Button = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.button.primary.background,
    padding: 12,
    borderRadius: 10,
  },
  text: {
    fontFamily: fonts.primary[500],
    fontSize: 16,
    color: colors.button.primary.text,
    textAlign: 'center',
  },
});
