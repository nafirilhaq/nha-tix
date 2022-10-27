import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Button = ({title, isLink, onPress}) => {
  if (isLink) {
    return (
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.linkText}>{title}</Text>
      </TouchableOpacity>
    );
  }
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
  linkText: {
    fontFamily: fonts.primary[500],
    fontSize: 14,
    color: colors.primary,
  },
});
