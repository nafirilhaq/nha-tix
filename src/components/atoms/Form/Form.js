import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';

const Form = ({label}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInput style={styles.input} />
    </View>
  );
};

export default Form;

const styles = StyleSheet.create({
  label: {
    fontFamily: fonts.primary[400],
    fontSize: 14,
    position: 'absolute',
    top: -10,
    left: 20,
    backgroundColor: colors.white,
    zIndex: 1,
  },
  input: {
    position: 'relative',
    borderWidth: 1,
    borderRadius: 6,
    borderColor: colors.form.border.primary,
    padding: 13,
    fontSize: 16,
    fontFamily: fonts.primary[400],
    color: colors.text.primary,
  },
});
