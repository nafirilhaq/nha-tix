import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../../utils/colors/colors';
import {IcLogo} from '../../assets/icon';

const Splash = () => {
  return (
    <View style={styles.page}>
      <Image source={IcLogo} style={styles.logo} />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
  },
});
