import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors, fonts} from '../../../utils';
import {IcBackDark} from '../../../assets/icon';

const Header = ({title}) => {
  return (
    <View style={styles.container}>
      <IcBackDark />
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.primary[500],
    fontSize: 20,
    color: colors.text.primary,
    textAlign: 'center',
    flex: 1,
    marginRight: 24,
  },
});
